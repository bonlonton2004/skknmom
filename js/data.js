// ===== BÀI HỌC - Được viết lại tự nhiên hơn =====
const LESSONS = [
    {
        id: 1,
        topic: 'self-reliance',
        icon: '',
        title: 'Chuẩn bị đồ đi học',
        description: 'Tự soạn cặp sách như người lớn',
        objective: 'Sau bài học này, em sẽ biết cách tự chuẩn bị đồ dùng học tập.',
        content: [
            'Mỗi tối, em nên soạn cặp cho ngày mai.',
            'Nhìn thời khóa biểu xem mai học gì.',
            'Bỏ đủ sách, vở, bút vào cặp.',
            'Để cặp ở chỗ dễ thấy.'
        ],
        example: {
            title: 'Câu chuyện của bạn Minh',
            text: 'Mỗi tối, bạn Minh xem lịch học. Thấy mai có vẽ, Minh bỏ hộp màu vào cặp. Sáng dậy, Minh không phải vội tìm đồ.'
        },
        quizzes: [
            {
                question: 'Khi nào nên soạn cặp sách?',
                options: ['Buổi sáng khi dậy', 'Tối hôm trước', 'Khi đến lớp'],
                correct: 1,
                feedback: 'Soạn cặp tối hôm trước giúp em không vội vàng buổi sáng!'
            },
            {
                question: 'Trước khi soạn cặp, em cần xem gì?',
                options: ['Ti vi', 'Thời khóa biểu', 'Điện thoại'],
                correct: 1,
                feedback: 'Đúng rồi! Xem thời khóa biểu để biết mai học môn gì.'
            },
            {
                question: 'Nên để cặp ở đâu sau khi soạn xong?',
                options: ['Dưới gầm giường', 'Chỗ dễ thấy, dễ lấy', 'Trong tủ quần áo'],
                correct: 1,
                feedback: 'Để chỗ dễ thấy thì sáng mai em sẽ nhớ mang theo!'
            }
        ]
    },
    {
        id: 2,
        topic: 'self-reliance',
        icon: '',
        title: 'Sắp xếp thời gian',
        description: 'Biết lúc nào học, lúc nào chơi',
        objective: 'Sau bài học này, em biết cách chia thời gian hợp lý.',
        content: [
            'Mỗi ngày em cần làm nhiều việc.',
            'Làm bài xong rồi chơi sẽ vui hơn.',
            'Nhớ nghỉ ngơi để khỏe mạnh.',
            'Có thể nhờ đồng hồ nhắc giờ.'
        ],
        example: {
            title: 'Một ngày của bạn Lan',
            text: 'Bạn Lan về nhà lúc 4 giờ. Lan làm bài từ 4h đến 5h. Ăn tối lúc 6h. Xem hoạt hình từ 7h đến 8h rồi đi ngủ. Lan có thời gian cho tất cả mọi thứ!'
        },
        quizzes: [
            {
                question: 'Về nhà, em nên làm gì trước?',
                options: ['Xem phim ngay', 'Làm bài rồi mới chơi', 'Ngủ một giấc dài'],
                correct: 1,
                feedback: 'Làm bài xong trước, sau đó chơi sẽ thoải mái và vui hơn nhiều!'
            },
            {
                question: 'Vì sao cần nghỉ ngơi đúng giờ?',
                options: ['Để khỏe mạnh, học tốt', 'Vì bố mẹ bắt', 'Không cần nghỉ'],
                correct: 0,
                feedback: 'Nghỉ ngơi giúp cơ thể và đầu óc khỏe mạnh, học sẽ giỏi hơn!'
            },
            {
                question: 'Cái gì giúp em nhớ giờ?',
                options: ['Đồng hồ', 'Gương', 'Tủ lạnh'],
                correct: 0,
                feedback: 'Đồng hồ giúp em biết giờ và làm việc đúng lúc!'
            }
        ]
    },
    {
        id: 3,
        topic: 'self-reliance',
        icon: '',
        title: 'Khi quên đồ ở nhà',
        description: 'Cách xử lý bình tĩnh khi quên',
        objective: 'Sau bài học này, em biết làm gì khi quên đồ dùng.',
        content: [
            'Ai cũng có lúc quên, không sao.',
            'Quên sách? Xin ngồi cùng bạn.',
            'Quên bút? Mượn thầy cô hoặc bạn.',
            'Lần sau nhớ chuẩn bị kỹ hơn.'
        ],
        example: {
            title: 'Bạn Hùng quên vở',
            text: 'Bạn Hùng quên vở Toán. Hùng giơ tay: "Thưa cô, em quên vở. Em xin ngồi cùng bạn An ạ." Cô khen Hùng biết cách xử lý.'
        },
        quizzes: [
            {
                question: 'Quên sách thì làm sao?',
                options: ['Khóc thật to', 'Xin mượn bạn hoặc ngồi cùng bạn', 'Về nhà lấy'],
                correct: 1,
                feedback: 'Bình tĩnh xin mượn là cách hay nhất!'
            },
            {
                question: 'Quên đồ có phải là chuyện xấu không?',
                options: ['Không, ai cũng có lúc quên', 'Có, rất xấu', 'Không biết'],
                correct: 0,
                feedback: 'Ai cũng có lúc quên. Quan trọng là biết cách xử lý.'
            },
            {
                question: 'Sau khi quên đồ, em nên nhớ điều gì?',
                options: ['Không cần nhớ gì', 'Lần sau chuẩn bị kỹ hơn', 'Đổ lỗi cho người khác'],
                correct: 1,
                feedback: 'Học từ sai lầm giúp em giỏi hơn!'
            }
        ]
    },
    {
        id: 4,
        topic: 'self-reliance',
        icon: '',
        title: 'Làm hòa với bạn',
        description: 'Khi giận bạn thì làm gì',
        objective: 'Sau bài học này, em biết cách giải quyết khi giận bạn.',
        content: [
            'Đôi khi em và bạn giận nhau.',
            'Đừng đánh hay mắng bạn.',
            'Nói cho bạn biết em cảm thấy sao.',
            'Lắng nghe bạn rồi cùng tìm cách.'
        ],
        example: {
            title: 'Bạn Tú và bạn Hoa',
            text: 'Tú và Hoa giành quyển truyện. Tú nói: "Bạn đọc trước đi, rồi đến mình nhé!" Hoa đồng ý. Hai bạn lại vui vẻ với nhau.'
        },
        quizzes: [
            {
                question: 'Khi giận bạn, em nên làm gì?',
                options: ['Đánh bạn', 'Bình tĩnh nói chuyện', 'Im lặng giận mãi'],
                correct: 1,
                feedback: 'Nói chuyện giúp hai bạn hiểu nhau và làm hòa!'
            },
            {
                question: 'Giành đồ chơi với bạn thì sao?',
                options: ['Giật lấy cho mình', 'Oẳn tù tì hoặc thay phiên', 'Khóc'],
                correct: 1,
                feedback: 'Thay phiên nhau chơi thì cả hai đều vui!'
            },
            {
                question: 'Sau khi làm hòa, em cảm thấy thế nào?',
                options: ['Vui vẻ', 'Buồn hơn', 'Không thay đổi'],
                correct: 0,
                feedback: 'Làm hòa rồi thì vui vẻ chơi tiếp!'
            }
        ]
    },
    {
        id: 5,
        topic: 'safety',
        icon: '',
        title: 'Nhận biết bắt nạt',
        description: 'Hiểu thế nào là bị bắt nạt',
        objective: 'Sau bài học này, em biết nhận ra hành vi bắt nạt.',
        content: [
            'Bắt nạt là khi ai đó làm em đau.',
            'Đánh, đá, xô là bắt nạt bằng tay chân.',
            'Chửi, chê bai cũng là bắt nạt.',
            'Không cho ai chơi cùng cũng là bắt nạt.'
        ],
        example: {
            title: 'Chuyện bạn An',
            text: 'Bạn An hay bị gọi là "đồ mập". An rất buồn. Dù không bị đánh nhưng An vẫn bị bắt nạt bằng lời nói.'
        },
        quizzes: [
            {
                question: 'Hành vi nào là bắt nạt?',
                options: ['Rủ bạn chơi', 'Chê bai, gọi bạn tên xấu', 'Giúp bạn'],
                correct: 1,
                feedback: 'Chê bai làm bạn buồn, đó là bắt nạt!'
            },
            {
                question: 'Không cho bạn chơi cùng có phải bắt nạt không?',
                options: ['Có', 'Không', 'Không biết'],
                correct: 0,
                feedback: 'Cô lập bạn cũng là một kiểu bắt nạt.'
            },
            {
                question: 'Bắt nạt bằng lời nói có đau không?',
                options: ['Không đau gì', 'Đau trong lòng', 'Chỉ đau tai'],
                correct: 1,
                feedback: 'Lời nói làm đau trong lòng, rất buồn.'
            }
        ]
    },
    {
        id: 6,
        topic: 'safety',
        icon: '',
        title: 'Nói "Không!" thật to',
        description: 'Dũng cảm từ chối khi bị bắt nạt',
        objective: 'Sau bài học này, em dám nói "Không" khi bị bắt nạt.',
        content: [
            'Em có quyền nói "Không!"',
            'Nói to và rõ: "Dừng lại!"',
            'Nhìn thẳng vào mắt người đó.',
            'Nếu họ không dừng, bỏ đi và kể người lớn.'
        ],
        example: {
            title: 'Bạn Mai dũng cảm',
            text: 'Có bạn đòi lấy bánh của Mai. Mai nói to: "Không! Đây là của mình!" rồi đi chỗ khác. Bạn kia không theo nữa.'
        },
        quizzes: [
            {
                question: 'Khi ai đó lấy đồ của em, em nói gì?',
                options: ['Lấy đi', 'Không! Đây là của mình!', 'Im lặng'],
                correct: 1,
                feedback: 'Nói "Không" to và rõ ràng là rất dũng cảm!'
            },
            {
                question: 'Nói xong mà họ vẫn không dừng thì sao?',
                options: ['Đánh lại', 'Bỏ đi và kể người lớn', 'Khóc'],
                correct: 1,
                feedback: 'Bỏ đi và tìm người lớn giúp đỡ là cách an toàn.'
            },
            {
                question: 'Em có quyền nói "Không" không?',
                options: ['Có, luôn luôn', 'Không', 'Tùy lúc'],
                correct: 0,
                feedback: 'Em LUÔN LUÔN có quyền nói "Không" khi không muốn!'
            }
        ]
    },
    {
        id: 7,
        topic: 'safety',
        icon: '',
        title: 'Kể cho người lớn',
        description: 'Tìm người tin tưởng khi cần giúp',
        objective: 'Sau bài học này, em biết cách kể chuyện cho người lớn.',
        content: [
            'Khi bị bắt nạt, hãy kể người lớn.',
            'Tìm người em tin: bố mẹ, thầy cô.',
            'Kể rõ: chuyện gì, ở đâu, ai làm.',
            'Kể người lớn không phải "mách lẻo".'
        ],
        example: {
            title: 'Bạn Đức kể mẹ nghe',
            text: 'Đức nói: "Mẹ ơi, con bị bạn Hải ở lớp hay đẩy con. Con sợ lắm." Mẹ ôm Đức và hứa sẽ giúp con.'
        },
        quizzes: [
            {
                question: 'Kể người lớn có phải mách lẻo không?',
                options: ['Có', 'Không, đó là bảo vệ mình', 'Không biết'],
                correct: 1,
                feedback: 'Kể người lớn là để được bảo vệ, không phải mách lẻo!'
            },
            {
                question: 'Em có thể kể ai?',
                options: ['Bố mẹ, thầy cô, ông bà', 'Người lạ ngoài đường', 'Không ai cả'],
                correct: 0,
                feedback: 'Người thân và thầy cô luôn sẵn sàng giúp em!'
            },
            {
                question: 'Khi kể, em cần nói gì?',
                options: ['Chuyện gì, ở đâu, ai làm', 'Chỉ khóc', 'Không nói gì'],
                correct: 0,
                feedback: 'Kể rõ ràng giúp người lớn hiểu và giúp em tốt hơn.'
            }
        ]
    },
    {
        id: 8,
        topic: 'safety',
        icon: '',
        title: 'Giúp bạn bị bắt nạt',
        description: 'Làm người bạn tốt',
        objective: 'Sau bài học này, em biết cách giúp bạn khi bạn bị bắt nạt.',
        content: [
            'Thấy bạn bị bắt nạt, đừng đứng nhìn.',
            'Nói: "Dừng lại! Như vậy không được!"',
            'Rủ bạn bị bắt nạt đi cùng em.',
            'Kể thầy cô để người lớn giúp.'
        ],
        example: {
            title: 'Bạn Nga giúp bạn',
            text: 'Nga thấy bạn Hà bị trêu. Nga đến nói: "Đi chơi với mình đi Hà!" rồi dẫn Hà đi. Sau đó Nga kể cô giáo.'
        },
        quizzes: [
            {
                question: 'Thấy bạn bị bắt nạt, em làm gì?',
                options: ['Đứng xem', 'Giúp bạn và kể người lớn', 'Bỏ đi'],
                correct: 1,
                feedback: 'Giúp bạn là hành động rất tốt. Em là người bạn tuyệt vời!'
            },
            {
                question: 'Em có thể rủ bạn bị bắt nạt làm gì?',
                options: ['Đi chơi cùng em', 'Đứng đó', 'Về nhà'],
                correct: 0,
                feedback: 'Rủ bạn đi cùng giúp bạn cảm thấy an toàn hơn!'
            },
            {
                question: 'Sau khi giúp bạn, em nên làm gì?',
                options: ['Quên đi', 'Kể thầy cô', 'Không làm gì'],
                correct: 1,
                feedback: 'Kể thầy cô để người lớn xử lý vấn đề triệt để.'
            }
        ]
    }
];

// ===== TÌNH HUỐNG =====
const SCENARIOS = [
    {
        id: 1,
        title: 'Quên vở ở nhà',
        text: 'Sáng nay em đến lớp mới biết quên vở Tiếng Việt. Tiết 1 là Tiếng Việt. Em làm gì bây giờ?',
        options: [
            'Khóc và xin về nhà lấy',
            'Giơ tay xin cô cho ngồi cùng bạn',
            'Nói dối cô là bị ốm'
        ],
        correct: 1,
        feedback: 'Xin phép cô là cách hay nhất! Cô sẽ hiểu và giúp em.'
    },
    {
        id: 2,
        title: 'Bạn lấy bút không hỏi',
        text: 'Bạn ngồi cạnh lấy bút của em mà không xin phép. Em hơi bực. Em sẽ nói gì?',
        options: [
            'Giật lại và mắng bạn',
            'Nói nhẹ: "Lần sau hỏi mình rồi mượn nhé bạn!"',
            'Im lặng, không nói gì'
        ],
        correct: 1,
        feedback: 'Nói nhẹ nhàng giúp bạn hiểu mà vẫn giữ được tình bạn!'
    },
    {
        id: 3,
        title: 'Bị gọi tên xấu',
        text: 'Có bạn hay gọi em là "đồ mập" trước mặt cả lớp. Em rất buồn và xấu hổ. Em sẽ làm gì?',
        options: [
            'Chửi lại bạn đó',
            'Khóc và không nói gì',
            'Nói: "Mình không thích!" và kể thầy cô'
        ],
        correct: 2,
        feedback: 'Nói rõ và kể thầy cô là đúng! Đây là bắt nạt bằng lời nói.'
    },
    {
        id: 4,
        title: 'Bạn không cho chơi',
        text: 'Giờ ra chơi, nhóm bạn nói: "Tao không chơi với mày!" rồi bỏ đi. Em buồn lắm. Em làm gì?',
        options: [
            'Van xin các bạn cho chơi',
            'Tìm nhóm bạn khác và kể bố mẹ',
            'Ngồi một mình khóc'
        ],
        correct: 1,
        feedback: 'Tìm bạn khác chơi và kể người lớn là tốt nhất!'
    },
    {
        id: 5,
        title: 'Thấy bạn bị đánh',
        text: 'Em thấy mấy anh lớn đang đánh bạn cùng lớp ở góc sân. Em sẽ làm gì?',
        options: [
            'Chạy đi tìm thầy cô ngay',
            'Nhảy vào đánh lại',
            'Đứng xem'
        ],
        correct: 0,
        feedback: 'Chạy báo thầy cô ngay! Nhảy vào có thể bị đánh theo.'
    },
    {
        id: 6,
        title: 'Về nhà muộn',
        text: 'Bố mẹ dặn về lúc 5 giờ nhưng em mải chơi đến 6 giờ. Bố mẹ đang lo. Em nói gì?',
        options: [
            'Nói dối cô giữ lại',
            'Xin lỗi và hứa lần sau về đúng giờ',
            'Im lặng không nói gì'
        ],
        correct: 1,
        feedback: 'Xin lỗi và hứa sửa là tốt nhất! Bố mẹ lo vì thương em.'
    },
    {
        id: 7,
        title: 'Bị dọa',
        text: 'Bạn lớn nói: "Nếu mày mách, tao đánh!" Em sợ lắm. Em sẽ làm gì?',
        options: [
            'Nghe lời, không nói ai',
            'Vẫn kể bố mẹ hoặc thầy cô',
            'Tự chịu đựng'
        ],
        correct: 1,
        feedback: 'Dù bị dọa, vẫn phải kể người lớn! Họ sẽ bảo vệ em.'
    },
    {
        id: 8,
        title: 'Tự chuẩn bị đồ',
        text: 'Mẹ đi công tác, bố bận. Mai em có thể dục. Em cần làm gì tối nay?',
        options: [
            'Không cần chuẩn bị gì',
            'Tự bỏ đồ thể dục vào cặp',
            'Gọi mẹ về giúp'
        ],
        correct: 1,
        feedback: 'Tự chuẩn bị là tuyệt vời! Em đang học cách tự lập.'
    },
    {
        id: 9,
        title: 'Giành đồ chơi',
        text: 'Em và bạn Hùng cùng muốn chơi một trò. Cả hai đều giận. Làm sao bây giờ?',
        options: [
            'Đẩy bạn ra để chơi trước',
            'Oẳn tù tì hoặc thay phiên chơi',
            'Bỏ đi không chơi nữa'
        ],
        correct: 1,
        feedback: 'Oẳn tù tì hoặc thay phiên là cách công bằng!'
    },
    {
        id: 10,
        title: 'Hay lo lắng',
        text: 'Gần đây em hay lo, sợ đi học vì có chuyện không vui ở trường. Em nên làm gì?',
        options: [
            'Giữ trong lòng',
            'Kể bố mẹ hoặc thầy cô',
            'Xin nghỉ học nhiều'
        ],
        correct: 1,
        feedback: 'Kể người lớn về cảm xúc rất quan trọng! Em không phải chịu một mình.'
    }
];

// ===== HUY HIỆU =====
const BADGES = [
    { id: 'lesson1', name: 'Tự Soạn Cặp', icon: '', condition: 'lesson-1' },
    { id: 'lesson2', name: 'Đúng Giờ', icon: '', condition: 'lesson-2' },
    { id: 'lesson3', name: 'Bình Tĩnh', icon: '', condition: 'lesson-3' },
    { id: 'lesson4', name: 'Hòa Giải', icon: '', condition: 'lesson-4' },
    { id: 'lesson5', name: 'Tinh Mắt', icon: '', condition: 'lesson-5' },
    { id: 'lesson6', name: 'Dũng Cảm', icon: '', condition: 'lesson-6' },
    { id: 'lesson7', name: 'Tin Tưởng', icon: '', condition: 'lesson-7' },
    { id: 'lesson8', name: 'Bạn Tốt', icon: '', condition: 'lesson-8' },
    { id: 'all-lessons', name: 'Siêu Sao', icon: '', condition: 'all-lessons' },
    { id: 'all-scenarios', name: 'Thông Minh', icon: '', condition: 'all-scenarios' }
];

// ===== CHATBOT RESPONSES - ENHANCED =====
const CHATBOT_RESPONSES = {
    // Hỏi tên
    askName: 'Chào bạn! Mình là Bông 🌸, người bạn tâm giao của bạn! Bạn tên gì vậy?',

    // Chào sau khi biết tên
    greetWithName: [
        'Xin chào {name}! Mình rất vui được làm quen với bạn! 🎉 Hôm nay {name} cảm thấy thế nào?',
        'Chào {name}! Tên bạn dễ thương quá! Mình là Bông, rất vui được nói chuyện với bạn! 🌸 Bạn có chuyện gì muốn kể không?',
        'Ôi, {name}! Tên hay quá! Hôm nay {name} thế nào? Có gì vui không? 🌈',
        'Wow {name}! Mình rất vui được gặp bạn! 💜 {name} muốn nói chuyện về gì nào?',
        'Chào {name} nè! Mình là Bông, bạn thân của tất cả các bạn nhỏ! 🌟 Kể mình nghe chuyện của bạn đi!'
    ],

    // Cảm xúc - BUỒN
    withName: {
        sad: [
            '{name} ơi, mình hiểu bạn đang buồn. Buồn là bình thường mà. 💙 Bạn muốn kể mình nghe chuyện gì làm bạn buồn không?',
            'Không sao đâu {name}, ai cũng có lúc buồn. Mình ở đây lắng nghe bạn nè! Chuyện gì vậy? 🌸',
            '{name} ơi, kể ra sẽ nhẹ lòng hơn đó! Mình hứa sẽ lắng nghe hết nhé! 💜',
            '{name} buồn vì chuyện gì vậy? Là chuyện ở trường, ở nhà, hay về bạn bè?',
            'Ôi {name}! Thấy bạn buồn mình cũng buồn theo! 😢 Nói mình nghe đi, biết đâu mình giúp được!',
            '{name} à, đừng giữ nỗi buồn một mình nhé. Chia sẻ với mình hoặc bố mẹ, thầy cô, bạn sẽ thấy nhẹ hơn! �',
            'Mình ở đây với {name}! 🌈 Bạn buồn vì bạn bè, điểm số, hay chuyện gì khác?'
        ],
        scared: [
            '{name} ơi, sợ hãi là bình thường. Bạn có thể nói mình nghe chuyện gì làm bạn sợ không? 💙',
            'Mình hiểu {name}. Khi sợ, bạn nên tìm người lớn tin tưởng như bố mẹ, thầy cô nhé! Họ sẽ bảo vệ bạn!',
            'Đừng lo {name}, bạn không cô đơn đâu. Mình đây và người lớn cũng sẵn sàng giúp bạn! 💚',
            '{name} à, mình hỏi nhé: Có ai làm bạn sợ không? Hay bạn sợ điều gì đó? Kể mình nghe! 🌸',
            '{name} sợ gì vậy? Là người, là việc, hay là điều gì đó sắp xảy ra? Kể mình nghe nhé!',
            'Ôi {name}! Đừng sợ! 💪 Hãy nhớ: Nói với người lớn = An toàn hơn! Bạn định kể ai nghe chưa?',
            '{name} ơi, khi sợ, bạn làm thế này nhé: 1) Hít thở sâu, 2) Tìm chỗ an toàn, 3) Tìm người lớn! 🛡️'
        ],
        angry: [
            '{name} ơi, khi giận, bạn thử hít thở sâu xem. Hít vào... thở ra... Đã bớt giận chưa? 🌬️',
            'Mình hiểu {name} đang bực. Bạn có muốn kể chuyện gì xảy ra không? Ai làm bạn giận vậy?',
            '{name} à, giận là bình thường. Nhưng đừng đánh hay mắng ai nhé. Nói chuyện bình tĩnh sẽ tốt hơn!',
            '{name} thử đếm từ 1 đến 10 nhé. 1... 2... 3... 4... 5... Đếm xong bớt giận chưa? 🌈',
            'Ôi {name}! Giận ai vậy? Bạn bè hay ai khác? Kể mình nghe đi! 💜',
            '{name} ơi, mình hiểu cảm giác tức giận. Nhưng nhớ: Bình tĩnh rồi nói chuyện sẽ giải quyết được! 💪',
            'Này {name}, khi giận thử làm thế này: 1) Đi chỗ khác, 2) Hít thở 5 lần, 3) Rồi hẵng nói chuyện! �'
        ],
        happy: [
            'Yay! Mình rất vui vì {name} vui! 🎉 Kể mình nghe chuyện vui đi!',
            'Thích ghê! {name} kể mình nghe chuyện vui đi nào! 😄',
            'Niềm vui của {name} cũng làm mình vui theo nè! 🌈 Chuyện gì hay vậy?',
            '{name} vui vì chuyện gì vậy? Điểm tốt? Được khen? Hay có bạn mới? Kể mình nghe! 🌟',
            'Wow {name} vui quá! 🎊 Khi vui thì chia sẻ với mọi người, niềm vui sẽ nhân đôi đó!',
            'Ôi {name}! Thấy bạn vui mình cũng phấn khởi! 💜 Có điều gì đặc biệt không?'
        ],
        lonely: [
            '{name} ơi, mình hiểu cảm giác cô đơn. Nhưng bạn có mình đây mà! 💙 Bạn muốn tâm sự gì không?',
            '{name} à, thử rủ một bạn trong lớp chơi cùng xem. Nói: "Chơi với mình nhé!" Mình tin sẽ có bạn đồng ý!',
            'Cô đơn thì buồn lắm, mình biết. {name} có bạn thân nào không? Thử nhắn tin cho bạn ấy đi! 📱',
            '{name} ơi, mình luôn ở đây với bạn! 🌸 Bạn thử tham gia nhóm bạn nào đó ở trường xem!',
            'Ôi {name}! Đừng buồn! Mình tin sẽ có bạn tốt dành cho {name}! Thử mỉm cười và rủ bạn chơi nhé! 😊',
            '{name} à, nếu cảm thấy cô đơn, kể bố mẹ hoặc cô giáo nghe. Họ sẽ giúp bạn kết bạn! 💚'
        ],
        worried: [
            '{name} ơi, lo lắng là bình thường. Bạn lo về chuyện gì vậy? Trường học? Bài kiểm tra? Hay chuyện khác?',
            'Mình hiểu {name} đang lo. Thử kể cho bố mẹ hoặc thầy cô nghe, họ sẽ giúp bạn! 💜',
            '{name} à, đừng ôm nỗi lo một mình nhé. Nói ra sẽ nhẹ nhõm hơn nhiều! Kể mình nghe đi! 💚',
            '{name} lo chuyện gì vậy? Mình ở đây lắng nghe và giúp bạn nghĩ cách nhé! 🌟',
            'Ôi {name}! Lo lắng nhiều quá không tốt cho sức khỏe đâu! Kể ra đi, mình nghe! 🌈',
            '{name} ơi, khi lo, bạn làm thế này: 1) Viết ra điều lo, 2) Nghĩ xem ai giúp được, 3) Nhờ họ! 💪'
        ],
        tired: [
            '{name} mệt hả? Bạn có ngủ đủ giấc không? Trẻ em cần ngủ 9-10 tiếng đó! 😴',
            'Mệt thì nghỉ ngơi đi {name}. Sức khỏe quan trọng lắm! Đừng thức khuya nhé! 🌙',
            '{name} ơi, nhớ ngủ đủ 9-10 tiếng mỗi ngày nhé! Ngủ dậy sẽ khỏe và học tốt hơn! ⭐',
            'Ôi {name} mệt hả? Uống nước, nghỉ ngơi một chút nhé! Đừng ráng quá! 💙',
            '{name} à, mệt thì đừng cố. Nghỉ ngơi xong mọi thứ sẽ dễ dàng hơn! �'
        ]
    },

    // Bắt nạt - Mở rộng
    bullying: [
        '{name} ơi, nếu bạn bị bắt nạt, đầu tiên hãy nói "Không! Mình không thích!" thật to nhé! Rồi đi chỗ khác và kể người lớn! 🗣️',
        '{name} à, bạn nên kể cho bố mẹ hoặc thầy cô nghe ngay. Họ sẽ giúp bạn! Không nên giữ trong lòng!',
        '{name} ơi, bị bắt nạt không phải lỗi của bạn. {name} xứng đáng được đối xử tốt! 💚',
        'Nhớ nhé {name}: Báo người lớn KHÔNG PHẢI mách lẻo. Đó là bảo vệ bản thân! Rất dũng cảm đó! 💪',
        '{name} bị bắt nạt kiểu nào vậy? Bị đánh, bị chửi, bị không cho chơi, hay bị đe dọa? Kể mình nghe!',
        'Ôi {name}! Mình rất lo cho bạn! 😢 Nhớ: 1) Nói "Không!", 2) Đi khỏi chỗ đó, 3) Tìm người lớn ngay! 🛡️',
        '{name} à, nếu đang bị bắt nạt, ĐỪNG đánh lại. Hãy tìm thầy cô hoặc bố mẹ. Họ sẽ xử lý! 👩‍🏫',
        '{name} ơi, bạn đã kể ai nghe chưa? Nếu chưa, tối nay về kể bố mẹ nhé! Họ sẽ bảo vệ bạn! 💜'
    ],

    // Học tập - Mở rộng
    school: [
        '{name} ơi, học khó thì từ từ thôi nhé! Không ai giỏi ngay được cả. Mỗi ngày tiến bộ một chút! 📚',
        'Nếu không hiểu bài, {name} cứ hỏi thầy cô nhé. Thầy cô rất vui khi được giúp em! Hỏi không xấu hổ đâu!',
        '{name} à, mỗi ngày cố gắng một chút thôi. Mình tin {name} sẽ tiến bộ! Cứ kiên trì nhé! 💪',
        'Bài khó mà {name} còn cố gắng làm là giỏi lắm rồi! Đừng nản, tiếp tục đi! 🌟',
        '{name} ơi, môn nào khó nhất với bạn? Thử nhờ bố mẹ hoặc bạn giỏi môn đó giúp xem! 📖',
        'Này {name}, khi học bài: 1) Tìm chỗ yên tĩnh, 2) Chia nhỏ bài ra, 3) Nghỉ 5 phút sau mỗi 25 phút học! ⭐',
        '{name} à, nếu điểm không cao, đừng buồn! Quan trọng là hiểu bài và tiến bộ mỗi ngày! 💙'
    ],

    // Bạn bè - Mở rộng
    friendship: [
        '{name} ơi, cãi nhau với bạn thì buồn lắm. Thử nói chuyện và làm hòa nhé! Nói: "Xin lỗi, mình muốn làm hòa!" 🤝',
        'Bạn bè đôi khi giận nhau là bình thường {name} à. Quan trọng là biết xin lỗi và tha thứ! ❤️',
        '{name} muốn có thêm bạn hả? Thử rủ bạn cùng lớp chơi xem! Mỉm cười, nói "Chơi cùng mình nhé!" 😊',
        'Nếu bạn không chơi với {name}, thử tìm nhóm bạn khác. Sẽ có bạn tốt dành cho bạn! 🌈',
        '{name} ơi, bạn bè tốt sẽ không bao giờ làm mình buồn nhiều. Nếu bạn đó hay làm bạn buồn, hãy tìm bạn khác! 💜',
        'Này {name}, muốn có bạn thì: 1) Mỉm cười, 2) Lắng nghe, 3) Chia sẻ! Bạn bè sẽ đến thôi! 🌟'
    ],

    // Gia đình - Mở rộng
    family: [
        '{name} ơi, bố mẹ la là vì thương bạn đó. Thử nói chuyện nhẹ nhàng với bố mẹ: "Con muốn nói chuyện với bố/mẹ!" 💕',
        'Chuyện gia đình đôi khi khó, mình hiểu {name}. Nhưng bố mẹ luôn yêu bạn nhất! Tin mình đi! ❤️',
        '{name} à, nếu buồn chuyện ở nhà, bạn có thể nói với thầy cô. Họ sẽ giúp bạn và nói chuyện với bố mẹ! 👩‍🏫',
        'Ôi {name}! Chuyện gia đình làm bạn buồn hả? Kể mình nghe! Đôi khi nói ra sẽ nhẹ hơn! 💙',
        '{name} ơi, nếu bố mẹ cãi nhau, đó không phải lỗi của bạn nhé! Bạn vẫn được yêu thương! 🌸'
    ],

    // Tự tin - Mở rộng
    confidence: [
        '{name} rất đặc biệt và tuyệt vời theo cách riêng của bạn! Không ai giống ai, đó là điều tuyệt vời! 🌟',
        'Mình tin {name} làm được! Cứ thử đi, sai thì học từ sai lầm thôi! Ai cũng từng sai mà! 💪',
        '{name} ơi, ai cũng có điểm mạnh riêng. Bạn giỏi gì nào? Vẽ? Hát? Chạy nhanh? Kể mình nghe đi! 🎨',
        'Đừng so sánh mình với ai khác nhé {name}. Bạn là duy nhất! Không ai thay thế được {name}! 💎',
        'Ôi {name}! Bạn có biết bạn đặc biệt thế nào không? Mình tin {name} có nhiều điểm tốt lắm! 🌈',
        '{name} ơi, đừng nói mình "xấu" hay "kém"! Mỗi người đều có giá trị riêng! Bạn tuyệt vời lắm! 💜'
    ],

    // Khuyến khích - Mở rộng
    encouragement: [
        '{name} giỏi lắm! Mình tin bạn làm được! Cứ tiếp tục cố gắng nhé! 💪',
        '{name} rất dũng cảm khi chia sẻ với mình! Mình rất vui được là bạn của {name}! 🌟',
        'Mình tự hào về {name}! Bạn đang làm rất tốt rồi! Đừng dừng lại nhé! ⭐',
        '{name} thật tuyệt vời! Đừng bao giờ quên điều đó nhé! Bạn xứng đáng được hạnh phúc! 🌈',
        'Cảm ơn {name} đã tin tưởng và chia sẻ với mình! Mình sẽ luôn ở đây lắng nghe bạn! 💜',
        '{name} ơi, mỗi ngày bạn đều đang tiến bộ! Dù có khó khăn, bạn vẫn rất dũng cảm! 🏆',
        'Yay {name}! Bạn đang làm tốt lắm! Mình tin tưởng {name}! Tiếp tục phát huy nhé! 🎉'
    ],

    // Mặc định - Mở rộng với follow-up
    default: [
        'Mình đang nghe {name} nè! 👂 Bạn có thể kể rõ hơn được không? Mình muốn hiểu bạn hơn!',
        'Ừm, mình hiểu. {name} còn muốn nói gì nữa không? Mình ở đây lắng nghe! 💙',
        'Cảm ơn {name} đã chia sẻ! Bạn đang cảm thấy thế nào? Vui, buồn, lo, hay sợ? 🌸',
        '{name} có thể kể mình nghe nhiều hơn không? Mình muốn giúp bạn! 💜',
        '{name} ơi, mình đang lắng nghe này! Chuyện gì làm bạn quan tâm nhất? �',
        'Mình hiểu {name}! Bạn muốn nói về cảm xúc của mình, hay về chuyện gì đó xảy ra? 🤔',
        '{name} à, bạn có thể nói thêm được không? Ví dụ như: Ai liên quan? Chuyện gì xảy ra? 🌈'
    ],

    // Phản hồi nhanh - Mở rộng
    quickReplies: [
        'Mình buồn quá 😢',
        'Mình bị bắt nạt',
        'Mình sợ lắm',
        'Mình giận lắm',
        'Mình vui! 🎉',
        'Mình cô đơn',
        'Mình lo lắng',
        'Mình mệt quá',
        'Bạn không chơi với mình',
        'Cho mình lời khuyên'
    ],

    // Chào tạm biệt
    goodbye: [
        'Tạm biệt {name}! Nhớ quay lại nói chuyện với mình nhé! Mình sẽ nhớ bạn! 👋',
        'Bye bye {name}! Chúc bạn một ngày vui vẻ và bình an! 🌈',
        '{name} đi nhé! Mình sẽ nhớ bạn! Quay lại chơi với mình nha! 🌸',
        'Tạm biệt {name}! Nhớ: Buồn thì nói, sợ thì kể, vui thì chia sẻ nhé! 💜',
        '{name} ơi, bye bye! Nhớ ăn uống đủ, ngủ đủ giấc nhé! Hẹn gặp lại! 🌟'
    ],

    // Cảm ơn
    thanks: [
        'Không có gì đâu {name}! Mình vui vì được nói chuyện với bạn! 😊',
        '{name} lịch sự quá! Mình cũng cảm ơn bạn vì đã chia sẻ với mình! 🌟',
        'Cảm ơn {name} đã nói chuyện với mình nè! Bạn rất dễ thương! 💜',
        '{name} ơi, mình nên cảm ơn bạn mới đúng! Vì bạn đã tin tưởng mình! 🌸',
        'Aw {name}! Bạn ngoan quá! Mình rất vui! Quay lại nói chuyện với mình nhé! 🎉'
    ],

    // Bị xô/đẩy/đánh nhưng chưa nói ai
    gotHurtNotTold: [
        '{name} ơi, mình rất tiếc khi nghe chuyện này! 💙 Bạn bị xô/đánh mà chưa nói ai thì bây giờ vẫn còn kịp nhé! Tối nay về kể bố mẹ nghe, họ sẽ giúp bạn.',
        'Ôi {name}! Mình hiểu bạn lo. Nhưng chưa muộn đâu! Bạn có thể: 1) Kể bố mẹ tối nay, hoặc 2) Mai kể cô giáo. Họ sẽ bảo vệ bạn! 💚',
        '{name} à, bạn không sai khi chưa nói. Nhưng bây giờ hãy kể cho người lớn nhé! Nói: "Con bị bạn xô/đánh". Bố mẹ sẽ không giận, họ sẽ thương bạn! ❤️',
        'Mình hiểu {name} sợ hoặc không biết phải làm sao. Không sao! Giờ bạn làm thế này nhé: Chờ lúc bố/mẹ rảnh, nói "Con có chuyện muốn kể...". Họ sẽ lắng nghe! 🌸',
        '{name} ơi, mình lo cho bạn lắm! Bạn có đau không? Bạn PHẢI kể người lớn để được bảo vệ nhé! Đó là điều đúng đắn! 💪'
    ],

    // Không biết phải làm sao
    whatToDo: [
        '{name} ơi, bạn đang lo không biết làm gì hả? Đầu tiên, hít thở sâu nhé. Sau đó kể cho người lớn tin tưởng nghe. Họ sẽ giúp bạn tìm cách! 💪',
        'Mình hiểu {name} đang bối rối. Bạn thử làm thế này: 1) Bình tĩnh, 2) Nghĩ xem ai có thể giúp (bố, mẹ, cô, thầy), 3) Kể họ nghe. Mình tin bạn làm được! 🌟',
        '{name} à, khi không biết làm gì, cách tốt nhất là HỎI NGƯỜI LỚN. Bố mẹ, thầy cô đều sẵn sàng giúp bạn. Đừng giữ một mình nhé! 💙',
        'Bạn {name} rất dũng cảm khi hỏi mình! Nếu có chuyện khó, bạn cứ nói với bố mẹ: "Con cần bố/mẹ giúp". Họ luôn yêu và bảo vệ bạn! ❤️',
        '{name} ơi, mình hỏi nhé: Bạn đang gặp chuyện gì vậy? Kể mình nghe, mình sẽ gợi ý cách xử lý! 🌈'
    ],

    // Bị đánh/xô/đẩy
    physicalHurt: [
        '{name} bị đánh/xô hả? Mình rất lo cho bạn! 😢 Trước hết, bạn có bị đau không? Nếu đau thì phải nói người lớn ngay nhé!',
        'Ôi không! {name} bị bạn xô/đánh là rất nghiêm trọng! Bạn PHẢI kể: 1) Ai làm, 2) Làm gì, 3) Ở đâu. Kể bố mẹ hoặc cô giáo nhé! 💚',
        '{name} ơi, bị đánh/xô là BẮT NẠT. Bạn không có lỗi! Hãy kể người lớn, họ sẽ bảo vệ bạn và không để chuyện này xảy ra nữa. 🛡️',
        'Mình thương {name}! Bị đánh thì đau lắm. Bạn nhớ: 1) Không đánh lại, 2) Tránh xa người đó, 3) Kể ngay cho thầy cô hoặc bố mẹ! 💪',
        '{name} à, bạn có vết thương không? Nếu có, phải nhờ người lớn kiểm tra nhé! Sức khỏe quan trọng lắm! 🏥'
    ],

    // Sợ bị trả thù
    afraidToTell: [
        '{name} sợ nói ra sẽ bị trả thù hả? Mình hiểu! Nhưng khi có người lớn biết, họ sẽ BẢO VỆ bạn. Bạn không còn một mình nữa! 💚',
        '{name} ơi, giữ trong lòng chỉ làm bạn buồn thêm. Người lớn sẽ giữ bí mật và giúp bạn AN TOÀN. Tin mình đi! 🌟',
        'Mình biết {name} lo. Nhưng nhé: Thầy cô và bố mẹ sẽ không để ai làm hại bạn. Họ sẽ xử lý để bạn yên tâm đi học! 🏫',
        '{name} à, dũng cảm lắm! Kể người lớn không phải mách lẻo. Đó là cách thông minh để bảo vệ mình. Mình tin bạn! 💪',
        '{name} ơi, nếu sợ người đó biết, bạn có thể xin thầy cô/bố mẹ giữ bí mật. Họ sẽ xử lý kín đáo! 🤫'
    ],

    // Bị trêu chọc
    teased: [
        '{name} bị trêu chọc hả? Mình hiểu rất khó chịu! Bạn thử nói: "Mình không thích! Dừng lại!" thật dõng dạc xem! 🗣️',
        'Bị trêu thì buồn lắm {name} nhỉ? Nếu bạn đó không dừng, kể cô giáo nhé. Cô sẽ nhắc bạn ấy! 👩‍🏫',
        '{name} ơi, người trêu bạn là sai, không phải {name} sai! Đừng tin những lời xấu. Bạn rất tuyệt vời! 🌟',
        'Mình thương {name}! Bị nói xấu thì đau lòng. Hãy: 1) Bỏ đi, không nghe, 2) Chơi với nhóm bạn khác, 3) Kể cô hoặc bố mẹ! 💜',
        '{name} à, bạn đó trêu gì vậy? Trêu về ngoại hình, điểm số, hay chuyện khác? Kể mình nghe! 🌸',
        'Ôi {name}! Đừng để lời trêu làm bạn buồn! Bạn tuyệt vời theo cách của bạn! Những người tốt sẽ thấy điều đó! 💚'
    ],

    // Không có ai chơi cùng
    noFriends: [
        '{name} không ai chơi cùng hả? Mình hiểu buồn lắm! 💙 Thử mỉm cười và rủ một bạn: "Chơi cùng mình nhé!" xem sao!',
        '{name} à, mình tin sẽ có bạn tốt dành cho bạn! Thử hỏi bạn ngồi cạnh: "Bạn thích chơi gì?" để làm quen nhé! 😊',
        'Đôi khi bạn bè cần thời gian {name} ơi. Cứ là chính mình, tử tế và vui vẻ. Bạn bè sẽ đến thôi! 🌈',
        '{name} ơi, nếu buồn vì không ai chơi, kể bố mẹ hoặc cô giáo nhé. Họ sẽ giúp bạn! Và mình luôn ở đây với bạn! 🌸',
        'Này {name}, thử tham gia nhóm hoạt động nào đó ở trường xem! Vẽ tranh, đá bóng, hay nhảy dây chẳng hạn! 🎨',
        '{name} à, bạn thích chơi gì? Tìm nhóm bạn có cùng sở thích, dễ kết bạn hơn đó! 🌟'
    ],

    // Muốn giúp bạn khác
    helpOthers: [
        '{name} muốn giúp bạn bị bắt nạt hả? Tuyệt vời! Bạn có thể: 1) Rủ bạn ấy chơi cùng, 2) Kể thầy cô, 3) Không đứng xem! 💚',
        'Woa {name} tốt bụng quá! Thấy bạn bị bắt nạt thì ĐỪNG đánh lại. Hãy dẫn bạn ấy đi và báo người lớn nhé! 🌟',
        '{name} ơi, giúp bạn là rất dũng cảm! Nói với bạn ấy: "Đi chơi với mình!" rồi dẫn bạn ra chỗ khác. Sau đó kể cô! 👍',
        'Mình rất tự hào về {name}! Bạn có trái tim nhân hậu! Giúp bạn khác là điều rất tốt! 💜',
        '{name} à, nếu thấy bạn bị bắt nạt: 1) Đừng tham gia bắt nạt, 2) Rủ bạn đi chỗ khác, 3) Báo người lớn. Bạn làm được! 🛡️'
    ]
};

// ===== TEACHER DATA =====
const TEACHER_MATERIALS = {
    // Giáo án chi tiết
    lessonPlans: [
        {
            icon: '📋',
            title: 'Giáo án: Kỹ năng tự lập',
            description: '4 bài: soạn cặp, quản lý thời gian, xử lý quên đồ, làm hòa',
            lessons: [
                { name: 'Bài 1: Chuẩn bị đồ đi học', time: '35 phút' },
                { name: 'Bài 2: Sắp xếp thời gian', time: '35 phút' },
                { name: 'Bài 3: Khi quên đồ ở nhà', time: '30 phút' },
                { name: 'Bài 4: Làm hòa với bạn', time: '35 phút' }
            ]
        },
        {
            icon: '🛡️',
            title: 'Giáo án: Phòng chống bắt nạt',
            description: '4 bài: nhận biết, từ chối, báo cáo, giúp bạn',
            lessons: [
                { name: 'Bài 5: Nhận biết bắt nạt', time: '35 phút' },
                { name: 'Bài 6: Nói "Không!" thật to', time: '35 phút' },
                { name: 'Bài 7: Kể cho người lớn', time: '30 phút' },
                { name: 'Bài 8: Giúp bạn bị bắt nạt', time: '35 phút' }
            ]
        }
    ],

    // Hoạt động nhóm
    activities: [
        {
            icon: '🎭',
            title: 'Đóng vai tình huống',
            desc: 'Học sinh đóng vai các tình huống và cách ứng xử',
            duration: '20 phút',
            steps: ['Chia nhóm 4-5 em', 'Phát thẻ tình huống', 'Nhóm thảo luận 5 phút', 'Đóng vai trước lớp', 'Cả lớp nhận xét']
        },
        {
            icon: '📝',
            title: 'Vẽ tranh "Bạn tốt"',
            desc: 'Vẽ và mô tả hành vi của bạn tốt',
            duration: '25 phút',
            steps: ['Phát giấy A4', 'Vẽ hình bạn tốt', 'Viết 3 hành vi tốt', 'Chia sẻ trước lớp', 'Treo tranh lên tường']
        },
        {
            icon: '🎲',
            title: 'Trò chơi "Chọn đúng"',
            desc: 'Dùng tình huống để chơi nhóm',
            duration: '15 phút',
            steps: ['Đọc tình huống', 'Đếm 1-2-3 giơ thẻ A/B/C', 'Giải thích đáp án', 'Tính điểm đội']
        },
        {
            icon: '💬',
            title: 'Vòng tròn chia sẻ',
            desc: 'Học sinh chia sẻ cảm xúc an toàn',
            duration: '15 phút',
            steps: ['Ngồi vòng tròn', 'Truyền "micro" (đồ chơi)', 'Ai cầm mic được nói', 'Không bình luận', 'Cảm ơn sau khi chia sẻ']
        },
        {
            icon: '🎨',
            title: 'Poster "Lớp an toàn"',
            desc: 'Thiết kế poster về lớp học không bắt nạt',
            duration: '30 phút',
            steps: ['Chia nhóm 5-6 em', 'Phát giấy A3', 'Vẽ và viết quy tắc', 'Trình bày', 'Bình chọn poster đẹp']
        }
    ],

    // Phiếu bài tập
    worksheets: [
        {
            icon: '📄',
            title: 'Phiếu: Chuẩn bị đồ dùng',
            desc: 'Danh sách kiểm tra đồ dùng hàng ngày',
            content: 'Học sinh tự đánh dấu những đồ đã chuẩn bị'
        },
        {
            icon: '📄',
            title: 'Phiếu: Thời gian biểu của em',
            desc: 'Lập kế hoạch ngày học',
            content: 'Chia ô thời gian từ 4h-9h chiều'
        },
        {
            icon: '📄',
            title: 'Phiếu: Nhận biết bắt nạt',
            desc: 'Phân loại hành vi tốt/xấu',
            content: 'Đánh dấu ✓ cho hành vi tốt, ✗ cho bắt nạt'
        },
        {
            icon: '📄',
            title: 'Phiếu: Người em tin tưởng',
            desc: 'Vẽ/viết tên người em có thể kể',
            content: 'Vẽ 3 người lớn em tin tưởng'
        }
    ],

    // Câu hỏi thảo luận
    discussionQuestions: [
        {
            topic: 'Tự lập',
            questions: [
                'Tại sao nên tự soạn cặp?',
                'Em làm gì khi quên vở?',
                'Làm sao để không làm bài muộn?',
                'Khi giận bạn, em nên làm gì?'
            ]
        },
        {
            topic: 'An toàn',
            questions: [
                'Thế nào là bắt nạt?',
                'Khi bị bắt nạt, em nói gì?',
                'Kể người lớn có phải mách không?',
                'Thấy bạn bị bắt nạt, em làm gì?'
            ]
        }
    ],

    // Tiêu chí đánh giá
    assessmentRubrics: [
        {
            skill: 'Tự chuẩn bị đồ dùng',
            levels: [
                { level: 'Giỏi', desc: 'Luôn tự soạn đúng, đủ' },
                { level: 'Khá', desc: 'Thường tự soạn, đôi khi thiếu' },
                { level: 'Đạt', desc: 'Cần nhắc nhở mới soạn' },
                { level: 'Cần cố gắng', desc: 'Chưa tự soạn được' }
            ]
        },
        {
            skill: 'Ứng xử khi bị bắt nạt',
            levels: [
                { level: 'Giỏi', desc: 'Biết từ chối và báo người lớn' },
                { level: 'Khá', desc: 'Biết từ chối, đôi khi quên báo' },
                { level: 'Đạt', desc: 'Cần hướng dẫn thêm' },
                { level: 'Cần cố gắng', desc: 'Chưa biết cách ứng xử' }
            ]
        }
    ],

    // Hướng dẫn xử lý tình huống bắt nạt
    handlingGuide: [
        {
            situation: 'HS báo cáo bị bắt nạt',
            steps: [
                '1. Lắng nghe không ngắt lời',
                '2. Tin tưởng, không đổ lỗi',
                '3. Hỏi: Ai? Ở đâu? Khi nào?',
                '4. Đảm bảo HS an toàn',
                '5. Thông báo phụ huynh 2 bên',
                '6. Theo dõi sau xử lý'
            ]
        },
        {
            situation: 'Phát hiện HS bị cô lập',
            steps: [
                '1. Quan sát giờ ra chơi',
                '2. Nói chuyện riêng với HS',
                '3. Tổ chức ghép nhóm',
                '4. Theo dõi thường xuyên',
                '5. Thông báo phụ huynh nếu cần'
            ]
        },
        {
            situation: 'HS có hành vi bắt nạt',
            steps: [
                '1. Nói chuyện riêng, không la mắng',
                '2. Giải thích tác hại',
                '3. Hỏi lý do hành vi',
                '4. Yêu cầu xin lỗi',
                '5. Thông báo phụ huynh',
                '6. Theo dõi hành vi sau'
            ]
        }
    ],

    // Mẫu thông báo phụ huynh
    parentLetters: [
        {
            title: 'Thư mời họp về kỹ năng sống',
            content: 'Kính mời phụ huynh tham dự buổi họp về rèn kỹ năng tự lập và an toàn cho HS lớp 3...'
        },
        {
            title: 'Thông báo chương trình học',
            content: 'Thông báo về chương trình giáo dục kỹ năng sống: Em Học Tự Lập dành cho HS lớp 3...'
        },
        {
            title: 'Phối hợp rèn kỹ năng tại nhà',
            content: 'Để hỗ trợ con rèn kỹ năng tự lập, xin phụ huynh phối hợp: 1) Cho con tự soạn cặp...'
        }
    ],

    // Dấu hiệu nhận biết HS bị bắt nạt
    warningSigns: [
        'Hay vắng học hoặc xin nghỉ',
        'Đồ dùng bị mất/hỏng thường xuyên',
        'Ngại tham gia hoạt động nhóm',
        'Thay đổi tính cách: thu mình, hay khóc',
        'Có vết thương không giải thích được',
        'Kết quả học tập giảm đột ngột',
        'Hay ở một mình giờ ra chơi'
    ]
};
