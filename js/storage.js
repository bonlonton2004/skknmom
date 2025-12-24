// ===== STORAGE MANAGER WITH USER AUTHENTICATION =====
// Author: Lê Thị Bách Thảo - Tiểu học Hoa Lư Đà Nẵng

const CLASSES = ['3/1', '3/2', '3/3', '3/4', '3/5', '3/6', '3/7'];
const TEACHER_CODE = 'GVCN2025';

const Storage = {
    KEYS: {
        USERS: 'edu_users',
        CURRENT_USER: 'edu_current_user',
        CHATBOT_NAME: 'chatbot_username'
    },

    // ===== USER MANAGEMENT =====
    getUsers() {
        const data = localStorage.getItem(this.KEYS.USERS);
        return data ? JSON.parse(data) : [];
    },

    saveUsers(users) {
        localStorage.setItem(this.KEYS.USERS, JSON.stringify(users));
    },

    // Register new user
    register(name, password, role, className, gender = 'male') {
        const users = this.getUsers();

        // Check if name + class already exists
        const exists = users.find(u =>
            u.name.toLowerCase() === name.toLowerCase() &&
            u.className === className
        );

        if (exists) {
            return { success: false, message: 'Tên này đã được đăng ký trong lớp!' };
        }

        const newUser = {
            id: Date.now(),
            name: name,
            password: password,
            role: role, // 'student' or 'teacher'
            className: className,
            gender: gender, // 'male' or 'female'
            createdAt: new Date().toISOString()
        };

        users.push(newUser);
        this.saveUsers(users);

        return { success: true, user: newUser };
    },

    // Login
    login(name, password, className) {
        const users = this.getUsers();

        const user = users.find(u =>
            u.name.toLowerCase() === name.toLowerCase() &&
            u.password === password &&
            u.className === className
        );

        if (!user) {
            return { success: false, message: 'Sai tên, mật khẩu hoặc lớp!' };
        }

        localStorage.setItem(this.KEYS.CURRENT_USER, JSON.stringify(user));
        localStorage.setItem(this.KEYS.CHATBOT_NAME, user.name);

        return { success: true, user: user };
    },

    // Logout
    logout() {
        localStorage.removeItem(this.KEYS.CURRENT_USER);
    },

    // Get current logged in user
    getCurrentUser() {
        const data = localStorage.getItem(this.KEYS.CURRENT_USER);
        return data ? JSON.parse(data) : null;
    },

    // Check if logged in
    isLoggedIn() {
        return this.getCurrentUser() !== null;
    },

    // Get students in a class (for teacher)
    getStudentsByClass(className) {
        const users = this.getUsers();
        return users.filter(u => u.role === 'student' && u.className === className);
    },

    // ===== PROGRESS (per user) =====
    getProgressKey(userId) {
        return `edu_progress_${userId}`;
    },

    getUserProgress(userId) {
        const data = localStorage.getItem(this.getProgressKey(userId));
        return data ? JSON.parse(data) : {
            completedLessons: [],
            completedScenarios: [],
            badges: [],
            failedLessons: [],
            quizIndexes: {}
        };
    },

    saveUserProgress(userId, progress) {
        localStorage.setItem(this.getProgressKey(userId), JSON.stringify(progress));
    },

    // Current user progress helpers
    getCompletedLessons() {
        const user = this.getCurrentUser();
        if (!user) return [];
        return this.getUserProgress(user.id).completedLessons || [];
    },

    completeLesson(lessonId) {
        const user = this.getCurrentUser();
        if (!user) return;

        const progress = this.getUserProgress(user.id);
        if (!progress.completedLessons.includes(lessonId)) {
            progress.completedLessons.push(lessonId);
        }
        // Clear from failed
        progress.failedLessons = (progress.failedLessons || []).filter(id => id !== lessonId);
        this.saveUserProgress(user.id, progress);
    },

    getFailedLessons() {
        const user = this.getCurrentUser();
        if (!user) return [];
        return this.getUserProgress(user.id).failedLessons || [];
    },

    markLessonFailed(lessonId) {
        const user = this.getCurrentUser();
        if (!user) return;

        const progress = this.getUserProgress(user.id);
        if (!progress.failedLessons) progress.failedLessons = [];
        if (!progress.failedLessons.includes(lessonId)) {
            progress.failedLessons.push(lessonId);
        }
        this.saveUserProgress(user.id, progress);
    },

    clearFailedLesson(lessonId) {
        const user = this.getCurrentUser();
        if (!user) return;

        const progress = this.getUserProgress(user.id);
        progress.failedLessons = (progress.failedLessons || []).filter(id => id !== lessonId);
        this.saveUserProgress(user.id, progress);
    },

    getNextQuizIndex(lessonId) {
        const user = this.getCurrentUser();
        if (!user) return 0;

        const progress = this.getUserProgress(user.id);
        const indexes = progress.quizIndexes || {};
        const lesson = LESSONS.find(l => l.id === lessonId);
        const maxQuizzes = lesson ? lesson.quizzes.length : 3;
        return (indexes[lessonId] || 0) % maxQuizzes;
    },

    incrementQuizIndex(lessonId) {
        const user = this.getCurrentUser();
        if (!user) return;

        const progress = this.getUserProgress(user.id);
        if (!progress.quizIndexes) progress.quizIndexes = {};
        const lesson = LESSONS.find(l => l.id === lessonId);
        const maxQuizzes = lesson ? lesson.quizzes.length : 3;
        progress.quizIndexes[lessonId] = ((progress.quizIndexes[lessonId] || 0) + 1) % maxQuizzes;
        this.saveUserProgress(user.id, progress);
    },

    getCompletedScenarios() {
        const user = this.getCurrentUser();
        if (!user) return [];
        return this.getUserProgress(user.id).completedScenarios || [];
    },

    completeScenario(scenarioId) {
        const user = this.getCurrentUser();
        if (!user) return;

        const progress = this.getUserProgress(user.id);
        if (!progress.completedScenarios.includes(scenarioId)) {
            progress.completedScenarios.push(scenarioId);
        }
        this.saveUserProgress(user.id, progress);
    },

    getBadges() {
        const user = this.getCurrentUser();
        if (!user) return [];
        return this.getUserProgress(user.id).badges || [];
    },

    addBadge(badgeId) {
        const user = this.getCurrentUser();
        if (!user) return false;

        const progress = this.getUserProgress(user.id);
        if (!progress.badges.includes(badgeId)) {
            progress.badges.push(badgeId);
            this.saveUserProgress(user.id, progress);
            return true;
        }
        return false;
    },

    checkAndAwardBadge(condition) {
        const badge = BADGES.find(b => b.condition === condition);
        if (badge) {
            const isNew = this.addBadge(badge.id);
            if (isNew) return badge;
        }
        return null;
    },

    // ===== PROGRESS CALCULATIONS =====
    getOverallProgress() {
        const lessonsComplete = this.getCompletedLessons().length;
        const scenariosComplete = this.getCompletedScenarios().length;
        const total = LESSONS.length + SCENARIOS.length;
        const completed = lessonsComplete + scenariosComplete;
        return Math.round((completed / total) * 100);
    },

    getLessonsProgress() {
        const completed = this.getCompletedLessons().length;
        return Math.round((completed / LESSONS.length) * 100);
    },

    getScenariosProgress() {
        const completed = this.getCompletedScenarios().length;
        return Math.round((completed / SCENARIOS.length) * 100);
    },

    // Get progress for a specific student (for teacher view)
    getStudentProgress(studentId) {
        const progress = this.getUserProgress(studentId);
        return {
            lessons: (progress.completedLessons || []).length,
            scenarios: (progress.completedScenarios || []).length,
            badges: (progress.badges || []).length,
            lessonsPercent: Math.round(((progress.completedLessons || []).length / LESSONS.length) * 100),
            scenariosPercent: Math.round(((progress.completedScenarios || []).length / SCENARIOS.length) * 100)
        };
    },

    // Get detailed progress for a student (for popup)
    getStudentDetailedProgress(studentId) {
        const progress = this.getUserProgress(studentId);
        return {
            completedLessons: progress.completedLessons || [],
            completedScenarios: progress.completedScenarios || [],
            badges: progress.badges || [],
            failedLessons: progress.failedLessons || []
        };
    },

    // Get class statistics
    getClassStatistics(className) {
        const students = this.getStudentsByClass(className);
        if (students.length === 0) {
            return {
                total: 0,
                completed100: 0,
                notStarted: 0,
                avgLessons: 0,
                avgScenarios: 0,
                lessonStats: []
            };
        }

        let completed100 = 0;
        let notStarted = 0;
        let totalLessonsPercent = 0;
        let totalScenariosPercent = 0;
        const lessonCounts = {};

        LESSONS.forEach(l => lessonCounts[l.id] = 0);

        students.forEach(s => {
            const progress = this.getStudentProgress(s.id);
            totalLessonsPercent += progress.lessonsPercent;
            totalScenariosPercent += progress.scenariosPercent;

            if (progress.lessonsPercent === 100 && progress.scenariosPercent === 100) {
                completed100++;
            }
            if (progress.lessonsPercent === 0 && progress.scenariosPercent === 0) {
                notStarted++;
            }

            const detailed = this.getStudentDetailedProgress(s.id);
            detailed.completedLessons.forEach(lid => {
                if (lessonCounts[lid] !== undefined) lessonCounts[lid]++;
            });
        });

        const lessonStats = LESSONS.map(l => ({
            id: l.id,
            title: l.title,
            count: lessonCounts[l.id]
        })).sort((a, b) => b.count - a.count);

        return {
            total: students.length,
            completed100,
            notStarted,
            avgLessons: Math.round(totalLessonsPercent / students.length),
            avgScenarios: Math.round(totalScenariosPercent / students.length),
            lessonStats
        };
    },

    // Teacher: mark activity as used
    getUsedActivities() {
        const user = this.getCurrentUser();
        if (!user) return [];
        const data = localStorage.getItem(`teacher_activities_${user.id}`);
        return data ? JSON.parse(data) : [];
    },

    toggleActivityUsed(activityTitle) {
        const user = this.getCurrentUser();
        if (!user) return;
        let used = this.getUsedActivities();
        if (used.includes(activityTitle)) {
            used = used.filter(a => a !== activityTitle);
        } else {
            used.push(activityTitle);
        }
        localStorage.setItem(`teacher_activities_${user.id}`, JSON.stringify(used));
    },

    // ===== RESET =====
    clearAll() {
        const keys = Object.keys(localStorage);
        keys.forEach(key => {
            if (key.startsWith('edu_') || key === 'chatbot_username') {
                localStorage.removeItem(key);
            }
        });
    }
};
