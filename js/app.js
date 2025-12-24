// ===== MAIN APP WITH AUTHENTICATION =====
// Author: Lê Thị Bách Thảo - Tiểu học Hoa Lư Đà Nẵng

let currentLessonId = null;
let currentQuizIndex = 0;
let currentScenarioIndex = 0;
let currentTopic = 'self-reliance';
let chatMessages = [];

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Check if logged in
    if (Storage.isLoggedIn()) {
        const user = Storage.getCurrentUser();
        if (user.role === 'student') {
            renderStudentPage();
        } else {
            renderTeacherPage();
        }
    } else {
        renderLoginPage();
    }
});

// ===== AUTH PAGES =====
function renderLoginPage() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="page" id="login-page">
            <header class="header">
                <div class="logo">
                    <h1>Em Học Tự Lập</h1>
                </div>
            </header>
            
            <main class="auth-main">
                <div class="auth-card">
                    <h2>Đăng Nhập</h2>
                    
                    <div class="form-group">
                        <label>Tên của bạn</label>
                        <input type="text" id="login-name" placeholder="Nhập tên..." class="form-input">
                    </div>
                    
                    <div class="form-group">
                        <label>Mật khẩu</label>
                        <input type="password" id="login-password" placeholder="Nhập mật khẩu..." class="form-input">
                    </div>
                    
                    <div class="form-group">
                        <label>Lớp</label>
                        <select id="login-class" class="form-input">
                            ${CLASSES.map(c => `<option value="${c}">Lớp ${c}</option>`).join('')}
                        </select>
                    </div>
                    
                    <div id="login-error" class="error-message"></div>
                    
                    <button class="btn-primary" onclick="handleLogin()">Đăng Nhập</button>
                    
                    <p class="auth-switch">Chưa có tài khoản? <a href="#" onclick="renderRegisterPage()">Đăng ký</a></p>
                </div>
            </main>
            
            <footer class="footer">
                <p class="copyright">© 2025 Lê Thị Bách Thảo - Tiểu học Hoa Lư Đà Nẵng</p>
            </footer>
        </div>
    `;
}

function renderRegisterPage() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="page" id="register-page">
            <header class="header">
                <div class="logo">
                    <h1>Em Học Tự Lập</h1>
                </div>
            </header>
            
            <main class="auth-main">
                <div class="auth-card">
                    <h2>Đăng Ký</h2>
                    
                    <div class="form-group">
                        <label>Tên của bạn</label>
                        <input type="text" id="reg-name" placeholder="Nhập tên..." class="form-input">
                    </div>
                    
                    <div class="form-group">
                        <label>Mật khẩu</label>
                        <input type="password" id="reg-password" placeholder="Nhập mật khẩu..." class="form-input">
                    </div>
                    
                    <div class="form-group">
                        <label>Lớp</label>
                        <select id="reg-class" class="form-input">
                            ${CLASSES.map(c => `<option value="${c}">Lớp ${c}</option>`).join('')}
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label>Giới tính</label>
                        <div class="role-buttons">
                            <button class="role-btn active" id="gender-male" onclick="selectGender('male')">👦 Nam</button>
                            <button class="role-btn" id="gender-female" onclick="selectGender('female')">👧 Nữ</button>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label>Bạn là</label>
                        <div class="role-buttons">
                            <button class="role-btn active" id="role-student" onclick="selectRegisterRole('student')">👦 Học Sinh</button>
                            <button class="role-btn" id="role-teacher" onclick="selectRegisterRole('teacher')">👩‍🏫 Giáo Viên</button>
                        </div>
                    </div>
                    
                    <div class="form-group" id="teacher-code-group" style="display:none;">
                        <label>Mã xác nhận giáo viên</label>
                        <input type="text" id="reg-teacher-code" placeholder="Nhập mã..." class="form-input">
                    </div>
                    
                    <div id="reg-error" class="error-message"></div>
                    
                    <button class="btn-primary" onclick="handleRegister()">Đăng Ký</button>
                    
                    <p class="auth-switch">Đã có tài khoản? <a href="#" onclick="renderLoginPage()">Đăng nhập</a></p>
                </div>
            </main>
            
            <footer class="footer">
                <p class="copyright">© 2025 Lê Thị Bách Thảo - Tiểu học Hoa Lư Đà Nẵng</p>
            </footer>
        </div>
    `;
}

let selectedRole = 'student';
let selectedGender = 'male';

function selectGender(gender) {
    selectedGender = gender;
    document.getElementById('gender-male').classList.toggle('active', gender === 'male');
    document.getElementById('gender-female').classList.toggle('active', gender === 'female');
}

function selectRegisterRole(role) {
    selectedRole = role;
    document.getElementById('role-student').classList.toggle('active', role === 'student');
    document.getElementById('role-teacher').classList.toggle('active', role === 'teacher');
    document.getElementById('teacher-code-group').style.display = role === 'teacher' ? 'block' : 'none';
}

function handleLogin() {
    const name = document.getElementById('login-name').value.trim();
    const password = document.getElementById('login-password').value;
    const className = document.getElementById('login-class').value;
    const errorEl = document.getElementById('login-error');

    if (!name || !password) {
        errorEl.textContent = 'Vui lòng điền đầy đủ thông tin!';
        errorEl.style.display = 'block';
        return;
    }

    const result = Storage.login(name, password, className);

    if (result.success) {
        if (result.user.role === 'student') {
            renderStudentPage();
        } else {
            renderTeacherPage();
        }
    } else {
        errorEl.textContent = result.message;
        errorEl.style.display = 'block';
    }
}

function handleRegister() {
    const name = document.getElementById('reg-name').value.trim();
    const password = document.getElementById('reg-password').value;
    const className = document.getElementById('reg-class').value;
    const errorEl = document.getElementById('reg-error');

    if (!name || !password) {
        errorEl.textContent = 'Vui lòng điền đầy đủ thông tin!';
        errorEl.style.display = 'block';
        return;
    }

    if (password.length < 3) {
        errorEl.textContent = 'Mật khẩu phải có ít nhất 3 ký tự!';
        errorEl.style.display = 'block';
        return;
    }

    if (selectedRole === 'teacher') {
        const teacherCode = document.getElementById('reg-teacher-code').value.trim();
        if (teacherCode !== TEACHER_CODE) {
            errorEl.textContent = 'Mã xác nhận giáo viên không đúng!';
            errorEl.style.display = 'block';
            return;
        }
    }

    const result = Storage.register(name, password, selectedRole, className, selectedGender);

    if (result.success) {
        // Auto login
        Storage.login(name, password, className);
        if (selectedRole === 'student') {
            renderStudentPage();
        } else {
            renderTeacherPage();
        }
    } else {
        errorEl.textContent = result.message;
        errorEl.style.display = 'block';
    }
}

function handleLogout() {
    Storage.logout();
    chatMessages = [];
    renderLoginPage();
}

// ===== STUDENT PAGE =====
function renderStudentPage() {
    const user = Storage.getCurrentUser();
    const badges = Storage.getBadges();
    const progress = Storage.getOverallProgress();
    const lessonsProgress = Storage.getLessonsProgress();
    const scenariosProgress = Storage.getScenariosProgress();
    const completedLessons = Storage.getCompletedLessons();
    const completedScenarios = Storage.getCompletedScenarios();

    // Find next lesson to do
    const nextLesson = LESSONS.find(l => !completedLessons.includes(l.id));
    const nextScenario = SCENARIOS.find(s => !completedScenarios.includes(s.id));

    // Calculate remaining badges
    const earnedBadges = badges.length;
    const totalBadges = BADGES.length;
    const remainingBadges = totalBadges - earnedBadges;

    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="page" id="student-page">
            <header class="header student-header">
                <div class="user-info">
                    <span class="user-avatar bounce-in">${user.gender === 'female' ? '👧' : '👦'}</span>
                    <div>
                        <div class="user-name">${user.name}</div>
                        <div class="user-class">Lớp ${user.className}</div>
                    </div>
                </div>
                <button class="logout-btn" onclick="handleLogout()">Đăng xuất</button>
            </header>
            
            <main>
                <div class="welcome-section student-welcome">
                    <h2>🌟 Chào ${user.name}! 🌟</h2>
                    <p class="welcome-subtitle">Hôm nay em muốn học gì nào?</p>
                </div>
                
                <!-- Stats Cards -->
                <div class="student-stats-row">
                    <div class="student-stat-card">
                        <div class="stat-icon">📖</div>
                        <div class="stat-value">${completedLessons.length}/${LESSONS.length}</div>
                        <div class="stat-name">Bài học</div>
                    </div>
                    <div class="student-stat-card">
                        <div class="stat-icon">❓</div>
                        <div class="stat-value">${completedScenarios.length}/${SCENARIOS.length}</div>
                        <div class="stat-name">Tình huống</div>
                    </div>
                    <div class="student-stat-card">
                        <div class="stat-icon">🏆</div>
                        <div class="stat-value">${earnedBadges}/${totalBadges}</div>
                        <div class="stat-name">Huy hiệu</div>
                    </div>
                </div>
                
                <!-- Progress Bar -->
                <div class="progress-container">
                    <div class="progress-header">
                        <span class="progress-label">📊 Tiến độ học tập</span>
                        <span class="progress-text">${progress}%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill animated-progress" style="width: ${progress}%"></div>
                    </div>
                    ${progress === 100 ? '<p class="progress-complete">🎉 Tuyệt vời! Em đã hoàn thành tất cả!</p>' : ''}
                </div>
                
                <!-- Next Lesson Suggestion -->
                ${nextLesson ? `
                <div class="next-lesson-card" onclick="openLesson(${nextLesson.id})">
                    <div class="next-lesson-badge">💡 Gợi ý</div>
                    <div class="next-lesson-content">
                        <h4>Bài tiếp theo: ${nextLesson.title}</h4>
                        <p>${nextLesson.description}</p>
                    </div>
                    <span class="next-lesson-arrow">→</span>
                </div>
                ` : ''}
                
                <!-- Module Grid -->
                <div class="module-grid">
                    <div class="module-card lessons-module" onclick="openModule('lessons')">
                        <div class="module-icon wiggle">📖</div>
                        <h3>Bài Học</h3>
                        <p>8 bài học hay</p>
                        <div class="mini-progress">
                            <div class="mini-progress-fill" style="width: ${lessonsProgress}%"></div>
                        </div>
                        <span class="module-status">${completedLessons.length}/8 ✓</span>
                    </div>
                    
                    <div class="module-card quiz-module" onclick="openModule('scenarios')">
                        <div class="module-icon wiggle">❓</div>
                        <h3>Tình Huống</h3>
                        <p>10 tình huống</p>
                        <div class="mini-progress">
                            <div class="mini-progress-fill" style="width: ${scenariosProgress}%"></div>
                        </div>
                        <span class="module-status">${completedScenarios.length}/10 ✓</span>
                    </div>
                    
                    <div class="module-card calm-module" onclick="openModule('calm')">
                        <div class="module-icon wiggle">😌</div>
                        <h3>Góc Bình Tĩnh</h3>
                        <p>3 bước thư giãn</p>
                        <span class="module-tag">🧘 Thư giãn</span>
                    </div>
                    
                    <div class="module-card report-module" onclick="openModule('report')">
                        <div class="module-icon wiggle">🆘</div>
                        <h3>Cần Giúp Đỡ</h3>
                        <p>Tìm người lớn</p>
                        <span class="module-tag">🛡️ An toàn</span>
                    </div>
                    
                    <div class="module-card chatbot-module" onclick="openModule('chatbot')">
                        <div class="module-icon wiggle">🤖</div>
                        <h3>Người Bạn Tâm Giao</h3>
                        <p>Trò chuyện với Bông!</p>
                        <span class="module-tag">💬 Chat</span>
                    </div>
                </div>
                
                <!-- Badges Section -->
                <div class="badges-section">
                    <div class="badges-header">
                        <h3>🏆 Huy Hiệu Của Em</h3>
                        ${remainingBadges > 0 ? `<span class="badges-remaining">Còn ${remainingBadges} huy hiệu nữa!</span>` : '<span class="badges-complete">🎊 Đã đạt hết!</span>'}
                    </div>
                    <div class="badges-container">
                        ${renderBadges()}
                    </div>
                </div>
                
                <!-- Encouragement -->
                <div class="encouragement-card">
                    <span class="encouragement-icon">✨</span>
                    <p>${getEncouragementMessage(progress)}</p>
                </div>
            </main>
            
            <footer class="footer">
                <p class="copyright">© 2025 Lê Thị Bách Thảo - Tiểu học Hoa Lư Đà Nẵng</p>
            </footer>
        </div>
    `;

    // Trigger confetti if 100% complete
    if (progress === 100) {
        setTimeout(() => triggerConfetti(), 500);
    }
}

function getEncouragementMessage(progress) {
    if (progress === 0) return "Hãy bắt đầu hành trình học tập nào! 🚀";
    if (progress < 25) return "Khởi đầu tốt lắm! Tiếp tục cố gắng nhé! 💪";
    if (progress < 50) return "Em đang tiến bộ rất nhanh! 🌈";
    if (progress < 75) return "Tuyệt vời! Em đã đi được nửa đường rồi! ⭐";
    if (progress < 100) return "Gần hoàn thành rồi! Cố lên em nhé! 🎯";
    return "Xuất sắc! Em là ngôi sao sáng nhất! 🌟";
}

function triggerConfetti() {
    // Simple confetti effect
    const colors = ['#FF70A6', '#4CC9F0', '#FFD60A', '#06D6A0', '#9D4EDD'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
}

function renderBadges() {
    const earnedBadges = Storage.getBadges();
    return BADGES.map(badge => {
        const isEarned = earnedBadges.includes(badge.id);
        return `
            <div class="badge-item ${isEarned ? '' : 'locked'}">
                <span class="badge-icon">${badge.icon}</span>
                <span class="badge-name">${badge.name}</span>
            </div>
        `;
    }).join('');
}

function openModule(module) {
    if (module === 'lessons') renderLessonsPage();
    else if (module === 'scenarios') renderScenariosPage();
    else if (module === 'calm') renderCalmPage();
    else if (module === 'report') renderReportPage();
    else if (module === 'chatbot') renderChatbotPage();
}

// ===== LESSONS PAGE =====
function renderLessonsPage() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="page" id="lessons-page">
            <header class="header">
                <button class="back-btn" onclick="renderStudentPage()">← Quay lại</button>
                <div class="logo">Bài Học</div>
            </header>
            
            <main class="lessons-main">
                <div class="topic-tabs">
                    <button class="topic-tab ${currentTopic === 'self-reliance' ? 'active' : ''}" onclick="switchTopic('self-reliance')">Tự Lập</button>
                    <button class="topic-tab ${currentTopic === 'safety' ? 'active' : ''}" onclick="switchTopic('safety')">An Toàn</button>
                </div>
                
                <div class="lessons-list" id="lessons-list">
                    ${renderLessonsList()}
                </div>
            </main>
        </div>
    `;
}

function switchTopic(topic) {
    currentTopic = topic;
    renderLessonsPage();
}

function renderLessonsList() {
    const completedLessons = Storage.getCompletedLessons();
    const failedLessons = Storage.getFailedLessons();
    const filteredLessons = LESSONS.filter(l => l.topic === currentTopic);

    return filteredLessons.map(lesson => {
        const isCompleted = completedLessons.includes(lesson.id);
        const isFailed = failedLessons.includes(lesson.id);
        let statusClass = '';
        let statusIcon = '▶️';

        if (isCompleted) {
            statusClass = 'completed';
            statusIcon = '✅';
        } else if (isFailed) {
            statusClass = 'failed';
            statusIcon = '🔄';
        }

        return `
            <div class="lesson-item ${statusClass}" onclick="openLesson(${lesson.id})">
                <span class="lesson-icon">${lesson.icon}</span>
                <div class="lesson-info">
                    <div class="lesson-title">${lesson.title}</div>
                    <div class="lesson-desc">${lesson.description}</div>
                </div>
                <span class="lesson-status">${statusIcon}</span>
            </div>
        `;
    }).join('');
}

function openLesson(lessonId) {
    currentLessonId = lessonId;
    currentQuizIndex = Storage.getNextQuizIndex(lessonId);
    const lesson = LESSONS.find(l => l.id === lessonId);
    const quiz = lesson.quizzes[currentQuizIndex];

    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="page" id="lesson-detail-page">
            <header class="header">
                <button class="back-btn" onclick="renderLessonsPage()">← Quay lại</button>
                <div class="logo">${lesson.title}</div>
            </header>
            
            <main class="lesson-detail-main">
                <div class="lesson-section">
                    <h3>Mục tiêu</h3>
                    <p>${lesson.objective}</p>
                </div>
                
                <div class="lesson-section">
                    <h3>Nội dung</h3>
                    <ul>
                        ${lesson.content.map(c => `<li>${c}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="lesson-section example-box">
                    <h3>${lesson.example.title}</h3>
                    <p>${lesson.example.text}</p>
                </div>
                
                <div class="lesson-section practice-section">
                    <h3>Câu hỏi (${currentQuizIndex + 1}/${lesson.quizzes.length})</h3>
                    <div class="quiz-question">${quiz.question}</div>
                    <div class="quiz-options" id="lesson-quiz">
                        ${quiz.options.map((opt, idx) => `
                            <button class="quiz-option" onclick="checkLessonAnswer(${idx})">${opt}</button>
                        `).join('')}
                    </div>
                    <div class="feedback-box" id="lesson-feedback"></div>
                    
                    <button class="complete-btn" id="complete-btn" onclick="completeLesson(${lessonId})">
                        Nhận huy hiệu!
                    </button>
                    <button class="retry-btn" id="retry-btn" onclick="openLesson(${lessonId})">
                        Thử câu khác
                    </button>
                </div>
            </main>
        </div>
    `;
}

function checkLessonAnswer(selected) {
    const lesson = LESSONS.find(l => l.id === currentLessonId);
    const quiz = lesson.quizzes[currentQuizIndex];
    const options = document.querySelectorAll('#lesson-quiz .quiz-option');
    const feedback = document.getElementById('lesson-feedback');
    const completeBtn = document.getElementById('complete-btn');
    const retryBtn = document.getElementById('retry-btn');

    // Hide buttons initially
    completeBtn.style.display = 'none';
    retryBtn.style.display = 'none';

    options.forEach((opt, idx) => {
        opt.classList.add('disabled');
        opt.style.pointerEvents = 'none';
        if (idx === quiz.correct) opt.classList.add('correct');
        else if (idx === selected && selected !== quiz.correct) opt.classList.add('wrong');
    });

    feedback.classList.add('show');

    if (selected === quiz.correct) {
        feedback.className = 'feedback-box show correct';
        feedback.innerHTML = `<strong>Đúng rồi!</strong><br>${quiz.feedback}`;
        completeBtn.style.display = 'block';
        Storage.clearFailedLesson(currentLessonId);
    } else {
        feedback.className = 'feedback-box show wrong';
        feedback.innerHTML = `<strong>Chưa đúng rồi!</strong><br>Đáp án đúng: "${quiz.options[quiz.correct]}"<br>${quiz.feedback}<br><br><strong>Thử câu hỏi khác nhé!</strong>`;
        retryBtn.style.display = 'block';
        Storage.markLessonFailed(currentLessonId);
        Storage.incrementQuizIndex(currentLessonId);
    }
}

function completeLesson(lessonId) {
    Storage.completeLesson(lessonId);
    const newBadge = Storage.checkAndAwardBadge(`lesson-${lessonId}`);

    const completedLessons = Storage.getCompletedLessons();
    if (completedLessons.length === LESSONS.length) {
        Storage.checkAndAwardBadge('all-lessons');
    }

    if (newBadge) {
        showCelebration(newBadge);
    } else {
        renderLessonsPage();
    }
}

// ===== SCENARIOS PAGE =====
function renderScenariosPage() {
    currentScenarioIndex = 0;
    renderScenario();
}

function renderScenario() {
    const scenario = SCENARIOS[currentScenarioIndex];

    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="page" id="scenarios-page">
            <header class="header">
                <button class="back-btn" onclick="renderStudentPage()">← Quay lại</button>
                <div class="logo">Tình Huống</div>
                <div class="scenario-counter">${currentScenarioIndex + 1}/10</div>
            </header>
            
            <main class="scenarios-main">
                <div class="scenario-card">
                    <h3 class="scenario-title">${scenario.title}</h3>
                    <div class="scenario-text">${scenario.text}</div>
                    
                    <div class="scenario-options" id="scenario-options">
                        ${scenario.options.map((opt, idx) => `
                            <button class="scenario-option" onclick="checkScenarioAnswer(${idx})">${opt}</button>
                        `).join('')}
                    </div>
                    
                    <div class="scenario-feedback" id="scenario-feedback"></div>
                    
                    <div class="scenario-nav" id="scenario-nav" style="display: none;">
                        ${currentScenarioIndex < SCENARIOS.length - 1 ?
            '<button class="next-btn" onclick="nextScenario()">Tiếp theo →</button>' :
            '<button class="next-btn" onclick="finishScenarios()">Hoàn thành!</button>'
        }
                    </div>
                </div>
            </main>
        </div>
    `;
}

function checkScenarioAnswer(selected) {
    const scenario = SCENARIOS[currentScenarioIndex];
    const options = document.querySelectorAll('#scenario-options .scenario-option');
    const feedback = document.getElementById('scenario-feedback');
    const nav = document.getElementById('scenario-nav');

    options.forEach((opt, idx) => {
        opt.classList.add('disabled');
        opt.style.pointerEvents = 'none';
        if (idx === scenario.correct) opt.classList.add('correct');
        else if (idx === selected && selected !== scenario.correct) opt.classList.add('wrong');
    });

    feedback.classList.add('show');
    if (selected === scenario.correct) {
        feedback.className = 'scenario-feedback show correct';
        feedback.innerHTML = `<h4>Tuyệt vời!</h4><p>${scenario.feedback}</p>`;
    } else {
        feedback.className = 'scenario-feedback show wrong';
        feedback.innerHTML = `<h4>Gợi ý:</h4><p>${scenario.feedback}</p>`;
    }

    Storage.completeScenario(scenario.id);
    nav.style.display = 'flex';
}

function nextScenario() {
    if (currentScenarioIndex < SCENARIOS.length - 1) {
        currentScenarioIndex++;
        renderScenario();
    }
}

function finishScenarios() {
    const completedScenarios = Storage.getCompletedScenarios();
    if (completedScenarios.length === SCENARIOS.length) {
        const newBadge = Storage.checkAndAwardBadge('all-scenarios');
        if (newBadge) {
            showCelebration(newBadge);
            return;
        }
    }
    renderStudentPage();
}

// ===== CALM CORNER =====
function renderCalmPage() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="page" id="calm-page">
            <header class="header calm-header">
                <button class="back-btn" onclick="renderStudentPage()">← Quay lại</button>
                <div class="logo">Góc Bình Tĩnh</div>
            </header>
            
            <main class="calm-main">
                <div class="calm-intro">
                    <h2>Khi em thấy khó chịu...</h2>
                    <p>Làm theo 3 bước này nhé!</p>
                </div>
                
                <div class="calm-steps">
                    <div class="calm-step" id="step-1" onclick="activateCalmStep(1)">
                        <div class="step-number">1</div>
                        <div class="step-icon">🛑</div>
                        <h3>DỪNG LẠI</h3>
                        <p>Dừng lại một chút. Không làm gì vội.</p>
                    </div>
                    
                    <div class="calm-step" id="step-2">
                        <div class="step-number">2</div>
                        <div class="step-icon">🌬️</div>
                        <h3>THỞ SÂU</h3>
                        <p>Hít vào... 1, 2, 3. Thở ra... 1, 2, 3.</p>
                        <div class="breathing-circle" id="breathing-circle">
                            <span id="breath-text">Bắt đầu</span>
                        </div>
                        <button class="breath-btn" id="breath-btn" onclick="event.stopPropagation(); startBreathing()">Thở cùng mình!</button>
                    </div>
                    
                    <div class="calm-step" id="step-3" onclick="activateCalmStep(3)">
                        <div class="step-number">3</div>
                        <div class="step-icon">🤝</div>
                        <h3>TÌM NGƯỜI LỚN</h3>
                        <p>Kể cho bố mẹ hoặc thầy cô nghe.</p>
                    </div>
                </div>
                
                <div class="calm-encouragement">
                    <p>Em thật giỏi khi biết cách giữ bình tĩnh!</p>
                </div>
            </main>
        </div>
    `;
}

function activateCalmStep(stepNum) {
    document.querySelectorAll('.calm-step').forEach(s => s.classList.remove('active'));
    document.getElementById(`step-${stepNum}`).classList.add('active');
}

function startBreathing() {
    const circle = document.getElementById('breathing-circle');
    const text = document.getElementById('breath-text');
    const btn = document.getElementById('breath-btn');

    btn.disabled = true;
    btn.textContent = 'Đang thở...';

    let count = 0;
    const maxCycles = 3;

    function breathCycle() {
        if (count >= maxCycles * 2) {
            circle.classList.remove('inhale', 'exhale');
            text.textContent = 'Xong rồi!';
            btn.disabled = false;
            btn.textContent = 'Thở lại nào!';
            activateCalmStep(2);
            return;
        }

        if (count % 2 === 0) {
            circle.classList.remove('exhale');
            circle.classList.add('inhale');
            text.textContent = 'Hít vào...';
        } else {
            circle.classList.remove('inhale');
            circle.classList.add('exhale');
            text.textContent = 'Thở ra...';
        }

        count++;
        setTimeout(breathCycle, 3000);
    }

    breathCycle();
}

// ===== REPORT PAGE =====
function renderReportPage() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="page" id="report-page">
            <header class="header report-header">
                <button class="back-btn" onclick="renderStudentPage()">← Quay lại</button>
                <div class="logo">Cần Giúp Đỡ</div>
            </header>
            
            <main class="report-main">
                <div class="report-intro">
                    <h2>Khi nào cần báo người lớn?</h2>
                    <ul class="when-list">
                        <li>Bị bạn đánh hoặc bắt nạt</li>
                        <li>Cảm thấy sợ hãi, lo lắng</li>
                        <li>Ai đó làm em khó chịu</li>
                        <li>Em hoặc bạn bị đau</li>
                    </ul>
                </div>
                
                <div class="trusted-adults">
                    <h3>Người em tin tưởng:</h3>
                    <div class="adult-cards">
                        <div class="adult-card">
                            <div class="adult-icon">👨‍👩‍👧</div>
                            <h4>Bố Mẹ</h4>
                            <p>Yêu thương em</p>
                        </div>
                        <div class="adult-card">
                            <div class="adult-icon">👩‍🏫</div>
                            <h4>Thầy Cô</h4>
                            <p>Bảo vệ em</p>
                        </div>
                        <div class="adult-card">
                            <div class="adult-icon">👴👵</div>
                            <h4>Ông Bà</h4>
                            <p>Thương yêu em</p>
                        </div>
                    </div>
                </div>
                
                <div class="script-helper">
                    <h3>Em có thể nói thế này:</h3>
                    <div class="script-cards">
                        <div class="script-card">
                            <p>"Mẹ ơi, con muốn kể chuyện này..."</p>
                        </div>
                        <div class="script-card">
                            <p>"Thưa cô, em bị bạn... ạ."</p>
                        </div>
                        <div class="script-card">
                            <p>"Con cảm thấy sợ/buồn vì..."</p>
                        </div>
                    </div>
                </div>
                
                <div class="safety-note">
                    <p><strong>An toàn:</strong> Ứng dụng này không lưu thông tin của em. Yên tâm nhé!</p>
                </div>
            </main>
        </div>
    `;
}

// ===== CHATBOT PAGE =====
let userName = '';
let waitingForName = false;

function renderChatbotPage() {
    const user = Storage.getCurrentUser();
    userName = user ? user.name : '';

    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="page" id="chatbot-page">
            <header class="header">
                <button class="back-btn" onclick="renderStudentPage()">← Quay lại</button>
                <div class="logo">Bạn Tâm Giao</div>
            </header>
            
            <div class="chatbot-container">
                <div class="chatbot-header">
                    <div class="chatbot-avatar">🌸</div>
                    <div class="chatbot-info">
                        <h3>Bông</h3>
                        <p>Người bạn luôn lắng nghe em!</p>
                    </div>
                </div>
                
                <div class="chat-messages" id="chat-messages">
                    ${renderChatMessages()}
                </div>
                
                <div class="quick-replies" id="quick-replies">
                    ${CHATBOT_RESPONSES.quickReplies.map(reply => `
                        <button class="quick-reply" onclick="sendQuickReply('${reply}')">${reply}</button>
                    `).join('')}
                </div>
                
                <div class="chat-input-area">
                    <input type="text" class="chat-input" id="chat-input" placeholder="Nhập tin nhắn..." onkeypress="handleChatKeyPress(event)">
                    <button class="chat-send-btn" onclick="sendChatMessage()">➤</button>
                </div>
            </div>
        </div>
    `;

    // Greet with user's name (already know from login)
    if (chatMessages.length === 0 && userName) {
        setTimeout(() => {
            const greeting = getRandomResponse(CHATBOT_RESPONSES.greetWithName).replace(/{name}/g, userName);
            addBotMessage(greeting);
        }, 500);
    }

    scrollChatToBottom();
}

function renderChatMessages() {
    return chatMessages.map(msg => `
        <div class="chat-message ${msg.type}-message">
            ${msg.text}
        </div>
    `).join('');
}

function sendQuickReply(text) {
    addUserMessage(text);
    processUserMessage(text);
}

function handleChatKeyPress(event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
}

function sendChatMessage() {
    const input = document.getElementById('chat-input');
    const text = input.value.trim();
    if (text) {
        addUserMessage(text);
        processUserMessage(text);
        input.value = '';
    }
}

function addUserMessage(text) {
    chatMessages.push({ type: 'user', text: text });
    updateChatUI();
}

function addBotMessage(text) {
    chatMessages.push({ type: 'bot', text: text });
    updateChatUI();
}

function updateChatUI() {
    const container = document.getElementById('chat-messages');
    if (container) {
        container.innerHTML = renderChatMessages();
        scrollChatToBottom();
    }
}

function scrollChatToBottom() {
    const container = document.getElementById('chat-messages');
    if (container) {
        container.scrollTop = container.scrollHeight;
    }
}

function processUserMessage(text) {
    const lowerText = text.toLowerCase();

    // Show typing then respond
    setTimeout(() => {
        let response;

        // Check for SPECIFIC SITUATIONS first (most specific patterns)
        if ((lowerText.includes('xô') || lowerText.includes('đánh') || lowerText.includes('đẩy') || lowerText.includes('tát')) &&
            (lowerText.includes('không nói') || lowerText.includes('chưa nói') || lowerText.includes('hong nói') || lowerText.includes('chưa kể') || lowerText.includes('không dám'))) {
            response = getRandomResponse(CHATBOT_RESPONSES.gotHurtNotTold);
        }
        else if (lowerText.includes('phải làm sao') || lowerText.includes('làm sao đây') || lowerText.includes('làm sao bây giờ') ||
            lowerText.includes('làm gì bây giờ') || lowerText.includes('giờ phải làm gì') || lowerText.includes('nên làm gì') ||
            lowerText.includes('biết làm gì') || lowerText.includes('không biết làm') || lowerText.includes('giúp mình với') ||
            lowerText.includes('cho mình lời khuyên') || lowerText.includes('mình cần giúp')) {
            response = getRandomResponse(CHATBOT_RESPONSES.whatToDo);
        }
        else if ((lowerText.includes('sợ') && (lowerText.includes('nói') || lowerText.includes('kể') || lowerText.includes('mách') || lowerText.includes('báo'))) ||
            lowerText.includes('trả thù') || lowerText.includes('bị đánh thêm') || lowerText.includes('không dám nói') || lowerText.includes('không dám kể')) {
            response = getRandomResponse(CHATBOT_RESPONSES.afraidToTell);
        }
        else if (lowerText.includes('xô') || lowerText.includes('đẩy') || lowerText.includes('tát') || lowerText.includes('đấm') ||
            lowerText.includes('đá') || lowerText.includes('cấu') || lowerText.includes('véo') ||
            (lowerText.includes('đánh') && !lowerText.includes('đánh lại'))) {
            response = getRandomResponse(CHATBOT_RESPONSES.physicalHurt);
        }
        else if (lowerText.includes('trêu') || lowerText.includes('nói xấu') || lowerText.includes('chế giễu') ||
            lowerText.includes('chê') || lowerText.includes('nhạo') || lowerText.includes('cười nhạo') ||
            lowerText.includes('gọi tên xấu') || lowerText.includes('đặt biệt danh') || lowerText.includes('diễu') ||
            (lowerText.includes('cười') && lowerText.includes('mình'))) {
            response = getRandomResponse(CHATBOT_RESPONSES.teased);
        }
        else if ((lowerText.includes('không ai') && lowerText.includes('chơi')) || lowerText.includes('không có bạn') ||
            lowerText.includes('chơi một mình') || lowerText.includes('không cho chơi') || lowerText.includes('bị tẩy chay') ||
            lowerText.includes('bị cô lập') || lowerText.includes('không có ai') || lowerText.includes('chả ai chơi') ||
            lowerText.includes('hong ai chơi') || lowerText.includes('không thèm chơi')) {
            response = getRandomResponse(CHATBOT_RESPONSES.noFriends);
        }
        else if (lowerText.includes('giúp bạn') || lowerText.includes('cứu bạn') ||
            (lowerText.includes('bạn') && lowerText.includes('bị') && (lowerText.includes('nạt') || lowerText.includes('đánh') || lowerText.includes('trêu')))) {
            response = getRandomResponse(CHATBOT_RESPONSES.helpOthers);
        }
        // GENERAL emotions - expanded keywords
        else if (lowerText.includes('buồn') || lowerText.includes('khóc') || lowerText.includes('tủi') ||
            lowerText.includes('đau lòng') || lowerText.includes('chán') || lowerText.includes('thất vọng') ||
            lowerText.includes('tuyệt vọng') || lowerText.includes('ức') || lowerText.includes('muốn khóc')) {
            response = getRandomResponse(CHATBOT_RESPONSES.withName.sad);
        }
        else if (lowerText.includes('sợ') || lowerText.includes('hãi') || lowerText.includes('hoảng') ||
            lowerText.includes('run') || lowerText.includes('khiếp')) {
            response = getRandomResponse(CHATBOT_RESPONSES.withName.scared);
        }
        else if (lowerText.includes('lo lắng') || lowerText.includes('lo quá') || lowerText.includes('lo sợ') ||
            lowerText.includes('hồi hộp') || lowerText.includes('bất an') || lowerText.includes('căng thẳng') ||
            (lowerText.includes('lo') && (lowerText.includes('lắm') || lowerText.includes('quá')))) {
            response = getRandomResponse(CHATBOT_RESPONSES.withName.worried);
        }
        else if (lowerText.includes('giận') || lowerText.includes('bực') || lowerText.includes('tức') ||
            lowerText.includes('điên') || lowerText.includes('cáu') || lowerText.includes('hờn') || lowerText.includes('ghét')) {
            response = getRandomResponse(CHATBOT_RESPONSES.withName.angry);
        }
        else if (lowerText.includes('vui') || lowerText.includes('phấn khởi') || lowerText.includes('hạnh phúc') ||
            lowerText.includes('thích') || lowerText.includes('yêu') || lowerText.includes('tuyệt') || lowerText.includes('great') ||
            lowerText.includes('sung sướng') || lowerText.includes('hài lòng')) {
            response = getRandomResponse(CHATBOT_RESPONSES.withName.happy);
        }
        else if (lowerText.includes('cô đơn') || lowerText.includes('một mình') || lowerText.includes('lẻ loi') ||
            lowerText.includes('không có ai')) {
            response = getRandomResponse(CHATBOT_RESPONSES.withName.lonely);
        }
        else if (lowerText.includes('mệt') || lowerText.includes('ngủ') || lowerText.includes('buồn ngủ') ||
            lowerText.includes('kiệt sức') || lowerText.includes('uể oải') || lowerText.includes('lười')) {
            response = getRandomResponse(CHATBOT_RESPONSES.withName.tired);
        }
        else if (lowerText.includes('bắt nạt') || lowerText.includes('chửi') || lowerText.includes('dọa') ||
            lowerText.includes('đe dọa') || lowerText.includes('bully') || lowerText.includes('ức hiếp')) {
            response = getRandomResponse(CHATBOT_RESPONSES.bullying);
        }
        else if (lowerText.includes('học') || lowerText.includes('bài') || lowerText.includes('điểm') ||
            lowerText.includes('thi') || lowerText.includes('trường') || lowerText.includes('lớp') ||
            lowerText.includes('kiểm tra') || lowerText.includes('bài tập') || lowerText.includes('cô giáo') ||
            lowerText.includes('thầy giáo')) {
            response = getRandomResponse(CHATBOT_RESPONSES.school);
        }
        else if (lowerText.includes('bạn bè') || lowerText.includes('bạn thân') || lowerText.includes('cãi nhau') ||
            lowerText.includes('giận bạn') || lowerText.includes('bạn giận') || lowerText.includes('tuyệt giao') ||
            lowerText.includes('mất bạn') || lowerText.includes('không làm bạn')) {
            response = getRandomResponse(CHATBOT_RESPONSES.friendship);
        }
        else if (lowerText.includes('bố') || lowerText.includes('mẹ') || lowerText.includes('gia đình') ||
            lowerText.includes('ba') || lowerText.includes('má') || lowerText.includes('cha') ||
            lowerText.includes('anh') || lowerText.includes('chị') || lowerText.includes('em') ||
            lowerText.includes('ông') || lowerText.includes('bà')) {
            response = getRandomResponse(CHATBOT_RESPONSES.family);
        }
        else if (lowerText.includes('tự tin') || lowerText.includes('xấu xí') || lowerText.includes('kém cỏi') ||
            lowerText.includes('thua kém') || lowerText.includes('dở') || lowerText.includes('ngu') ||
            lowerText.includes('không giỏi') || lowerText.includes('mình xấu') || lowerText.includes('mình dở')) {
            response = getRandomResponse(CHATBOT_RESPONSES.confidence);
        }
        else if (lowerText.includes('cảm ơn') || lowerText.includes('cám ơn') || lowerText.includes('thank') ||
            lowerText.includes('cảm tạ')) {
            response = getRandomResponse(CHATBOT_RESPONSES.thanks);
        }
        else if (lowerText.includes('tạm biệt') || lowerText.includes('bye') || lowerText.includes('bai') ||
            lowerText.includes('đi đây') || lowerText.includes('gặp sau') || lowerText.includes('hẹn gặp')) {
            response = getRandomResponse(CHATBOT_RESPONSES.goodbye);
        }
        else if (lowerText.includes('chào') || lowerText.includes('hi') || lowerText.includes('hello') ||
            lowerText.includes('xin chào') || lowerText.includes('hey') || lowerText.includes('yo')) {
            response = getRandomResponse(CHATBOT_RESPONSES.greetWithName);
        }
        else {
            response = getRandomResponse(CHATBOT_RESPONSES.default);
        }

        // Replace {name} with actual name
        response = response.replace(/{name}/g, userName || 'bạn');
        addBotMessage(response);
    }, 800);
}

function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
}

// ===== TEACHER PAGE =====
let expandedLessonPlan = null;

function renderTeacherPage() {
    const user = Storage.getCurrentUser();
    const students = Storage.getStudentsByClass(user.className);
    const stats = Storage.getClassStatistics(user.className);
    const usedActivities = Storage.getUsedActivities();

    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="page" id="teacher-page">
            <header class="header teacher-header">
                <div class="user-info">
                    <span class="user-avatar">👩‍🏫</span>
                    <div>
                        <div class="user-name">${user.name}</div>
                        <div class="user-class">GVCN Lớp ${user.className}</div>
                    </div>
                </div>
                <button class="logout-btn" onclick="handleLogout()">Đăng xuất</button>
            </header>
            
            <main class="teacher-main">
                <div class="welcome-section teacher-welcome">
                    <h2>Chào ${user.name}!</h2>
                    <p>Quản lý lớp ${user.className}</p>
                </div>
                
                <div class="teacher-tabs">
                    <button class="teacher-tab active" id="ttab-students" onclick="switchTeacherTab('students')">Học Sinh</button>
                    <button class="teacher-tab" id="ttab-materials" onclick="switchTeacherTab('materials')">Giáo Án</button>
                    <button class="teacher-tab" id="ttab-activities" onclick="switchTeacherTab('activities')">Hoạt Động</button>
                    <button class="teacher-tab" id="ttab-worksheets" onclick="switchTeacherTab('worksheets')">Phiếu BT</button>
                    <button class="teacher-tab" id="ttab-handling" onclick="switchTeacherTab('handling')">Xử Lý</button>
                </div>
                
                <!-- QUẢN LÝ HỌC SINH -->
                <div id="teacher-students" class="teacher-content active">
                    <!-- Thống kê lớp -->
                    <div class="stats-grid">
                        <div class="stat-card stat-total">
                            <div class="stat-number">${stats.total}</div>
                            <div class="stat-label">Học sinh</div>
                        </div>
                        <div class="stat-card stat-complete">
                            <div class="stat-number">${stats.completed100}</div>
                            <div class="stat-label">Hoàn thành 100%</div>
                        </div>
                        <div class="stat-card stat-not-started">
                            <div class="stat-number">${stats.notStarted}</div>
                            <div class="stat-label">Chưa bắt đầu</div>
                        </div>
                        <div class="stat-card stat-avg">
                            <div class="stat-number">${stats.avgLessons}%</div>
                            <div class="stat-label">TB Bài học</div>
                        </div>
                    </div>
                    
                    ${stats.lessonStats.length > 0 ? `
                    <div class="lesson-stats-card">
                        <h4>Bài học phổ biến nhất</h4>
                        <div class="lesson-stat-item">
                            <span>${stats.lessonStats[0].title}</span>
                            <span class="lesson-stat-count">${stats.lessonStats[0].count} em hoàn thành</span>
                        </div>
                        ${stats.lessonStats.length > 1 ? `
                        <h4 style="margin-top:15px">Bài cần chú ý (ít em làm)</h4>
                        <div class="lesson-stat-item warning">
                            <span>${stats.lessonStats[stats.lessonStats.length - 1].title}</span>
                            <span class="lesson-stat-count">${stats.lessonStats[stats.lessonStats.length - 1].count} em hoàn thành</span>
                        </div>
                        ` : ''}
                    </div>
                    ` : ''}
                    
                    <div class="students-section">
                        <h3>Danh sách học sinh (${students.length} em)</h3>
                        ${students.length === 0 ?
            '<p class="empty-message">Chưa có học sinh nào đăng ký trong lớp này.</p>' :
            `<div class="students-list">
                                ${students.map(s => {
                const progress = Storage.getStudentProgress(s.id);
                return `
                                        <div class="student-card" onclick="showStudentDetail(${s.id})">
                                            <div class="student-info">
                                                <span class="student-avatar">${s.gender === 'female' ? '👧' : '👦'}</span>
                                                <div>
                                                    <div class="student-name">${s.name}</div>
                                                    <div class="student-stats">
                                                        ${progress.lessonsPercent}% bài học | 
                                                        ${progress.scenariosPercent}% tình huống | 
                                                        ${progress.badges} huy hiệu
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="student-progress-bar">
                                                <div class="student-progress-fill" style="width:${Math.round((progress.lessonsPercent + progress.scenariosPercent) / 2)}%"></div>
                                            </div>
                                            <span class="view-detail-hint">Xem chi tiết →</span>
                                        </div>
                                    `;
            }).join('')}
                            </div>`
        }
                    </div>
                </div>
                
                <!-- GIÁO ÁN -->
                <div id="teacher-materials" class="teacher-content">
                    <p class="tab-instruction">Click vào giáo án để xem chi tiết các bài học</p>
                    <div class="materials-grid">
                        ${TEACHER_MATERIALS.lessonPlans.map((item, idx) => `
                            <div class="material-card expandable" onclick="toggleLessonPlan(${idx})">
                                <div class="material-header">
                                    <h4>${item.title}</h4>
                                    <span class="expand-icon" id="expand-icon-${idx}">▼</span>
                                </div>
                                <p>${item.description}</p>
                                <div class="lesson-plan-detail" id="lesson-plan-${idx}" style="display:none">
                                    ${item.lessons.map((l, lidx) => {
            const lesson = LESSONS.find(les => les.title === l.name.replace('Bài ' + (lidx + 1) + ': ', '')) || LESSONS[lidx];
            return `
                                            <div class="lesson-detail-item">
                                                <div class="lesson-detail-header">
                                                    <strong>${l.name}</strong>
                                                    <span class="lesson-time">${l.time}</span>
                                                </div>
                                                ${lesson ? `
                                                <div class="lesson-detail-content">
                                                    <p><strong>Mục tiêu:</strong> ${lesson.objective}</p>
                                                    <p><strong>Nội dung:</strong></p>
                                                    <ul>
                                                        ${lesson.content.map(c => `<li>${c}</li>`).join('')}
                                                    </ul>
                                                </div>
                                                ` : ''}
                                            </div>
                                        `;
        }).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- HOẠT ĐỘNG -->
                <div id="teacher-activities" class="teacher-content">
                    <p class="tab-instruction">Click vào nút "Đánh dấu" để ghi nhớ hoạt động đã sử dụng</p>
                    <div class="activities-list">
                        ${TEACHER_MATERIALS.activities.map(item => {
            const isUsed = usedActivities.includes(item.title);
            return `
                            <div class="activity-card ${isUsed ? 'used' : ''}">
                                <div class="activity-header">
                                    <h4>${item.title}</h4>
                                    <div class="activity-actions">
                                        <span class="activity-duration">${item.duration}</span>
                                        <button class="mark-used-btn ${isUsed ? 'marked' : ''}" onclick="toggleActivity('${item.title}')">
                                            ${isUsed ? '✓ Đã dùng' : 'Đánh dấu'}
                                        </button>
                                    </div>
                                </div>
                                <p>${item.desc}</p>
                                <div class="activity-steps">
                                    <strong>Các bước:</strong>
                                    <ol>
                                        ${item.steps.map(s => `<li>${s}</li>`).join('')}
                                    </ol>
                                </div>
                            </div>
                        `;
        }).join('')}
                    </div>
                </div>
                
                <!-- PHIẾU BÀI TẬP -->
                <div id="teacher-worksheets" class="teacher-content">
                    <p class="tab-instruction">Click "In phiếu" để mở cửa sổ in</p>
                    <div class="materials-grid">
                        ${TEACHER_MATERIALS.worksheets.map((item, idx) => `
                            <div class="material-card worksheet-card">
                                <h4>${item.title}</h4>
                                <p>${item.desc}</p>
                                <p class="worksheet-content">${item.content}</p>
                                <button class="print-btn" onclick="printWorksheet(${idx})">In phiếu</button>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="discussion-section">
                        <h4>Câu hỏi thảo luận</h4>
                        ${TEACHER_MATERIALS.discussionQuestions.map(topic => `
                            <div class="discussion-topic">
                                <strong>${topic.topic}:</strong>
                                <ul>
                                    ${topic.questions.map(q => `<li>${q}</li>`).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <!-- XỬ LÝ TÌNH HUỐNG -->
                <div id="teacher-handling" class="teacher-content">
                    <div class="warning-signs">
                        <h4>Dấu hiệu HS bị bắt nạt</h4>
                        <ul>
                            ${TEACHER_MATERIALS.warningSigns.map(s => `<li>${s}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="handling-guides">
                        ${TEACHER_MATERIALS.handlingGuide.map(item => `
                            <div class="handling-card">
                                <h4>${item.situation}</h4>
                                <div class="handling-steps">
                                    ${item.steps.map(s => `<div class="handling-step">${s}</div>`).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </main>
            
            <footer class="footer">
                <p class="copyright">© 2025 Lê Thị Bách Thảo - Tiểu học Hoa Lư Đà Nẵng</p>
            </footer>
        </div>
        
        <!-- Student Detail Modal -->
        <div id="student-modal" class="modal" style="display:none">
            <div class="modal-content student-modal-content">
                <button class="modal-close" onclick="closeStudentModal()">×</button>
                <div id="student-modal-body"></div>
            </div>
        </div>
    `;
}

function switchTeacherTab(tab) {
    document.querySelectorAll('.teacher-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.teacher-content').forEach(c => c.classList.remove('active'));
    document.getElementById('ttab-' + tab).classList.add('active');
    document.getElementById('teacher-' + tab).classList.add('active');
}

function showStudentDetail(studentId) {
    const users = Storage.getUsers();
    const student = users.find(u => u.id === studentId);
    if (!student) return;

    const progress = Storage.getStudentDetailedProgress(studentId);
    const modal = document.getElementById('student-modal');
    const body = document.getElementById('student-modal-body');

    body.innerHTML = `
        <div class="student-detail-header">
            <span class="detail-avatar">${student.gender === 'female' ? '👧' : '👦'}</span>
            <div>
                <h3>${student.name}</h3>
                <p>Lớp ${student.className}</p>
            </div>
        </div>
        
        <div class="detail-section">
            <h4>Bài học đã hoàn thành (${progress.completedLessons.length}/${LESSONS.length})</h4>
            <div class="detail-list">
                ${LESSONS.map(l => {
        const done = progress.completedLessons.includes(l.id);
        return `<div class="detail-item ${done ? 'done' : ''}">${done ? '✅' : '⬜'} ${l.title}</div>`;
    }).join('')}
            </div>
        </div>
        
        <div class="detail-section">
            <h4>Tình huống đã làm (${progress.completedScenarios.length}/${SCENARIOS.length})</h4>
            <div class="detail-list">
                ${SCENARIOS.map(s => {
        const done = progress.completedScenarios.includes(s.id);
        return `<div class="detail-item ${done ? 'done' : ''}">${done ? '✅' : '⬜'} ${s.title}</div>`;
    }).join('')}
            </div>
        </div>
        
        <div class="detail-section">
            <h4>Huy hiệu đạt được (${progress.badges.length}/${BADGES.length})</h4>
            <div class="badges-grid">
                ${BADGES.map(b => {
        const earned = progress.badges.includes(b.id);
        return `<div class="badge-mini ${earned ? 'earned' : 'locked'}">${b.icon || '🏅'} ${b.name}</div>`;
    }).join('')}
            </div>
        </div>
    `;

    modal.style.display = 'flex';
}

function closeStudentModal() {
    document.getElementById('student-modal').style.display = 'none';
}

function toggleLessonPlan(idx) {
    const detail = document.getElementById('lesson-plan-' + idx);
    const icon = document.getElementById('expand-icon-' + idx);

    if (detail.style.display === 'none') {
        // Close all others first
        document.querySelectorAll('.lesson-plan-detail').forEach(d => d.style.display = 'none');
        document.querySelectorAll('.expand-icon').forEach(i => i.textContent = '▼');

        detail.style.display = 'block';
        icon.textContent = '▲';
    } else {
        detail.style.display = 'none';
        icon.textContent = '▼';
    }
}

function toggleActivity(title) {
    Storage.toggleActivityUsed(title);
    renderTeacherPage();
    switchTeacherTab('activities');
}

function printWorksheet(idx) {
    const worksheet = TEACHER_MATERIALS.worksheets[idx];
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${worksheet.title}</title>
            <style>
                body { font-family: 'Nunito', sans-serif; padding: 40px; }
                h1 { text-align: center; color: #9B7ED9; }
                .content { margin: 30px 0; font-size: 18px; line-height: 1.8; }
                .footer { text-align: center; margin-top: 50px; color: #999; }
            </style>
        </head>
        <body>
            <h1>${worksheet.title}</h1>
            <p style="text-align:center;color:#666">${worksheet.desc}</p>
            <div class="content">
                <p>${worksheet.content}</p>
            </div>
            <div class="footer">© 2025 Em Học Tự Lập - Tiểu học Hoa Lư Đà Nẵng</div>
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

// ===== CELEBRATION MODAL =====
function showCelebration(badge) {
    const modal = document.createElement('div');
    modal.className = 'celebration-modal';
    modal.innerHTML = `
        <div class="celebration-content">
            <span class="celebration-icon">${badge.icon}</span>
            <h2>🎉 Tuyệt vời!</h2>
            <p>Em đã nhận được huy hiệu</p>
            <h3>${badge.name}</h3>
            <button class="celebration-btn" onclick="closeCelebration()">Tiếp tục →</button>
        </div>
    `;
    document.body.appendChild(modal);
}

function closeCelebration() {
    const modal = document.querySelector('.celebration-modal');
    if (modal) modal.remove();
    renderLessonsPage();
}
