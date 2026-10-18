// Toàn bộ nội dung của trang (sửa chữ, giá, đánh giá… tại đây)

export const APP = {
  brand: 'AutoFlow AI',
  name: 'AutoFlow AI: Chatbot & Automation',
  pricing: 'Có gói miễn phí',
  rating: 4.6,
  developer: 'AutoFlow AI',
  launched: '20 tháng 6, 2025',
  location: 'TP. Hồ Chí Minh, Việt Nam',
  // TODO: thay bằng video giới thiệu thật
  videoUrl: 'https://www.youtube.com/watch?v=nrJtHemSPW4',
  videoTitle: 'Khám phá Chatbot AI & Workflow tự động cùng AutoFlow AI',
  videoChannel: 'AutoFlow AI · Tự động hoá bán hàng & CSKH',
};

// Ảnh chụp màn hình (16:9). Lưu file vào public/uploads/showcase/ với đúng tên.
export const SHOTS = [
  { src: '/uploads/showcase/shot-1.png', label: 'Chatbot AI đa kênh' },
  { src: '/uploads/showcase/shot-2.png', label: 'Kịch bản chăm sóc khách hàng' },
  { src: '/uploads/showcase/shot-3.png', label: 'Theo dõi doanh số theo thời gian thực' },
  { src: '/uploads/showcase/shot-4.png', label: 'Workflow kéo-thả' },
  { src: '/uploads/showcase/shot-5.png', label: 'Báo cáo & phân tích' },
];

export const HEADLINE =
  'Chatbot AI & workflow tự động cho bán hàng và CSKH. Kết nối Messenger, Zalo OA, Website chỉ trong 5 phút.';

export const DESCRIPTION =
  'AutoFlow AI giúp shop online và doanh nghiệp trả lời khách hàng nhanh hơn bằng chatbot AI hiểu sản phẩm của bạn. ' +
  'Tự động tư vấn, báo giá, chốt đơn và chăm sóc lại khách cũ trên mọi kênh. Kéo-thả để tạo quy trình tự động, ' +
  'đồng bộ dữ liệu khách hàng về Google Sheets hoặc CRM và nhận báo cáo hiệu quả mỗi tuần. Hoạt động cùng ' +
  'Facebook Messenger, Zalo OA, Telegram, Shopee, TikTok Shop, HubSpot và hơn 500 ứng dụng khác.';

export const FEATURES = [
  'Chatbot AI đa kênh: trả lời khách tức thì trên Messenger, Zalo OA, Website, Telegram.',
  'Huấn luyện AI: nạp tài liệu, website, bảng giá để AI trả lời đúng như nhân viên.',
  'Workflow kéo-thả: tự động phân loại khách, tạo đơn, nhắc lịch hẹn không cần code.',
  'Gửi tin chăm sóc: gửi tin cá nhân hoá hàng loạt theo hành vi khách hàng.',
  'Báo cáo: theo dõi hội thoại, tỉ lệ chuyển đổi và doanh số theo thời gian thực.',
];

export const META = [
  { label: 'Ngôn ngữ', values: ['Tiếng Việt, English'] },
  { label: 'Hoạt động với', values: ['Facebook Messenger, Zalo OA, Google Sheets, Shopee, TikTok Shop, HubSpot'] },
  { label: 'Danh mục', links: ['Chatbot & CSKH', 'Tự động hoá marketing'] },
];

export const PLANS = [
  { name: 'Miễn phí', price: 'Miễn phí', features: ['Hỗ trợ chat 24/7'] },
  {
    name: 'Starter',
    price: '490K',
    unit: '/ tháng',
    features: [
      '2.000 hội thoại/tháng (Chatbot AI)',
      '1 chatbot (Đa kênh)',
      '5 workflow (Tự động hoá)',
      '2 kênh kết nối (Messenger, Website)',
      '1.000 liên hệ (CRM)',
      '1.000 tin gửi/tháng (Chăm sóc)',
    ],
  },
  {
    name: 'Professional',
    price: '990K',
    unit: '/ tháng',
    save: 'hoặc 9.900K/năm, tiết kiệm 17%',
    features: [
      '10.000 hội thoại/tháng (Chatbot AI)',
      '5 chatbot (Đa kênh)',
      'Không giới hạn workflow (Tự động hoá)',
      'Tất cả kênh (Zalo OA, Telegram…)',
      '10.000 liên hệ (CRM)',
      '10.000 tin gửi/tháng (Chăm sóc)',
    ],
  },
  {
    name: 'Enterprise',
    price: '2.490K',
    unit: '/ tháng',
    save: 'hoặc 24.900K/năm, tiết kiệm 17%',
    features: [
      '50.000 hội thoại/tháng (Chatbot AI)',
      'Không giới hạn chatbot (Đa kênh)',
      'API & Webhook riêng (Tích hợp)',
      'Huấn luyện dữ liệu riêng (AI)',
      'Không giới hạn liên hệ (CRM)',
      'Chuyên viên đồng hành (Hỗ trợ)',
    ],
  },
];

export const REVIEWS = [
  {
    name: 'Hoa Mộc Shop', place: 'Hà Nội', used: '2 ngày sử dụng ứng dụng', stars: 3, date: '9 tháng 10, 2026',
    text: 'Làm sao để liên hệ đội ngũ hỗ trợ qua email ạ? Mình muốn hỏi thêm về cách kết nối Zalo OA.',
    replyDate: '10 tháng 10, 2026',
    reply: 'Chào anh/chị! Cảm ơn anh/chị đã để lại đánh giá. Đội ngũ hỗ trợ đã gửi email hướng dẫn chi tiết cách kết nối Zalo OA, đồng thời chuyên viên sẽ gọi điện để hỗ trợ cài đặt trực tiếp. Anh/chị có thể liên hệ bất kỳ lúc nào qua hello@autoflow.vn hoặc nút chat ngay trong ứng dụng.',
  },
  {
    name: 'Minh Anh Fashion', place: 'TP. Hồ Chí Minh', used: '3 tháng sử dụng ứng dụng', stars: 5, date: '5 tháng 9, 2026',
    text: 'Tính năng nào cũng tốt nhưng chatbot AI trả lời inbox mới là thứ khiến mình quyết định mua. Trước đây shop bỏ lỡ rất nhiều tin nhắn buổi tối, giờ bot trả lời ngay trong vài giây, tư vấn size, báo giá và chốt đơn luôn. Doanh thu từ inbox tăng 38% chỉ sau 2 tháng. Riêng tính năng này đã đáng tiền gói hàng tháng. Nếu bạn đang đuối vì trả lời tin nhắn thì đây chính là giải pháp.',
    replyDate: '6 tháng 9, 2026',
    reply: 'Cảm ơn Minh Anh Fashion rất nhiều vì đánh giá tuyệt vời này! 🙌 Thật vui khi chatbot AI giúp shop không còn bỏ lỡ khách lúc nửa đêm. Đội ngũ sẽ tiếp tục cập nhật thêm kịch bản chăm sóc khách cũ để shop tăng tỉ lệ mua lại nhé.',
  },
  {
    name: 'Spa Lam Thảo', place: 'Đà Nẵng', used: '1 tháng sử dụng ứng dụng', stars: 5, date: '27 tháng 8, 2026',
    text: 'Là người mới hoàn toàn với tự động hoá, lúc đầu mình khá lo vì không biết code. Nhưng AutoFlow AI có sẵn kịch bản mẫu cho ngành spa, chỉ cần sửa lại tên dịch vụ và giá là chạy được. Workflow nhắc lịch hẹn tự động gửi tin Zalo trước 1 ngày giúp tỉ lệ khách huỷ lịch giảm hẳn. Mình còn chưa dùng hết tính năng mà riêng phần này đã xứng đáng. Rất khuyến khích các chủ spa nên thử.',
    replyDate: '27 tháng 8, 2026',
    reply: 'Cảm ơn Spa Lam Thảo đã chia sẻ trải nghiệm! Rất vui khi kịch bản mẫu và workflow nhắc lịch giúp spa vận hành nhẹ nhàng hơn. Nếu cần, chuyên viên của chúng tôi có thể hỗ trợ thiết lập thêm chương trình chăm sóc sau liệu trình hoàn toàn miễn phí.',
  },
  {
    name: 'Anh ngữ Bright Kids', place: 'Hải Phòng', used: '5 tháng sử dụng ứng dụng', stars: 5, date: '12 tháng 8, 2026',
    text: 'Chỉ sau một tuần, đội ngũ đã giúp chúng tôi dựng xong kịch bản tư vấn tuyển sinh trên Zalo OA và đồng bộ toàn bộ học viên tiềm năng về Google Sheets. Nhân viên tư vấn giờ chỉ cần gọi cho những phụ huynh đã được bot phân loại là quan tâm cao.',
    replyDate: '13 tháng 8, 2026',
    reply: 'Cảm ơn Bright Kids! Chúc trung tâm có một mùa tuyển sinh thật thành công. Đội ngũ luôn sẵn sàng hỗ trợ khi trung tâm muốn mở rộng thêm kênh Messenger.',
  },
  {
    name: 'Nhà Đất Phú Long', place: 'Bình Dương', used: '4 tháng sử dụng ứng dụng', stars: 4, date: '30 tháng 7, 2026',
    text: 'Mọi khách tiềm năng từ Facebook, Zalo, website đều tự đổ về CRM kèm nhãn phân loại, đội sale không phải nhập tay nữa. Trừ 1 sao vì phần báo cáo mong có thêm bộ lọc theo dự án.',
    replyDate: '31 tháng 7, 2026',
    reply: 'Cảm ơn anh Long đã góp ý rất cụ thể! Bộ lọc báo cáo theo dự án/chiến dịch đang được phát triển và dự kiến ra mắt trong bản cập nhật tháng tới. Chúng tôi sẽ thông báo ngay khi có.',
  },
  {
    name: 'Mộc Cosmetics', place: 'Cần Thơ', used: '6 tháng sử dụng ứng dụng', stars: 5, date: '18 tháng 7, 2026',
    text: 'Chatbot học từ tài liệu sản phẩm của chúng tôi và trả lời chính xác đến bất ngờ, kể cả các câu hỏi về thành phần và cách dùng. Khách còn tưởng đang chat với nhân viên thật.',
    replyDate: '18 tháng 7, 2026',
    reply: 'Cảm ơn Mộc Cosmetics! Đó chính là mục tiêu của chúng tôi: AI hiểu sản phẩm như nhân viên giỏi nhất của bạn.',
  },
  {
    name: 'Cà phê Đồng Xanh', place: 'Hà Nội', used: '8 tháng sử dụng ứng dụng', stars: 5, date: '2 tháng 7, 2026',
    text: 'Chi phí chỉ bằng một phần nhỏ lương một nhân viên nhưng hệ thống làm việc 24/7, nhận đặt bàn, gửi ưu đãi sinh nhật và không bao giờ quên chăm sóc khách cũ.',
    replyDate: '3 tháng 7, 2026',
    reply: 'Cảm ơn Đồng Xanh đã đồng hành suốt 8 tháng qua! Chúc chuỗi cửa hàng ngày càng đông khách.',
  },
  {
    name: 'Shop Bé Yêu', place: 'Nghệ An', used: '2 tháng sử dụng ứng dụng', stars: 5, date: '20 tháng 6, 2026',
    text: 'Kết nối Shopee và Messenger rất nhanh, khách hỏi tình trạng đơn là bot tra cứu và trả lời ngay. Hỗ trợ kỹ thuật phản hồi nhanh, nhiệt tình.',
    replyDate: '21 tháng 6, 2026',
    reply: 'Cảm ơn Shop Bé Yêu! Rất vui được hỗ trợ shop. Chúc shop luôn đắt hàng!',
  },
];

export const MORE_APPS = [
  { icon: 'Z', color: '#0068ff', name: 'AutoFlow Zalo Connect', rating: '4,9', count: '1.284', plan: 'Có gói miễn phí', desc: 'Kết nối Zalo OA, gửi tin ZNS và chăm sóc khách tự động' },
  { icon: 'S', color: '#16a34a', name: 'AutoFlow Sheets Sync', rating: '4,8', count: '936', plan: 'Miễn phí', desc: 'Đồng bộ khách hàng, đơn hàng 2 chiều với Google Sheets' },
  { icon: 'V', color: '#e8590c', name: 'AutoFlow Voice AI', rating: '4,7', count: '412', plan: 'Dùng thử 14 ngày', desc: 'Tổng đài AI tự gọi, nghe và trả lời khách bằng giọng nói' },
];

export const CATEGORIES = [
  { title: 'Chatbot & CSKH', desc: 'Trả lời khách 24/7 trên Messenger, Zalo OA, website, live chat, Telegram' },
  { title: 'Tự động hoá bán hàng', desc: 'Tư vấn, báo giá, chốt đơn, nhắc thanh toán, chăm sóc sau bán' },
  { title: 'Marketing tự động', desc: 'Gửi tin cá nhân hoá, phân nhóm khách hàng, ưu đãi, nhắc lịch hẹn' },
  { title: 'Tích hợp dữ liệu', desc: 'Đồng bộ Google Sheets, CRM, Shopee, TikTok Shop, Webhook, API' },
  { title: 'Huấn luyện AI', desc: 'Dạy AI bằng tài liệu, website, bảng giá, câu hỏi thường gặp' },
  { title: 'Báo cáo & vận hành', desc: 'Phân tích hội thoại, doanh số, phân quyền nhân viên, bảo mật' },
  { title: 'Workflow kéo-thả', desc: 'Tự động phân loại khách, tạo đơn, chuyển tiếp nhân viên không cần code' },
];

export const STORIES = [
  { title: 'Chatbot AI: lối tắt để không bỏ lỡ khách hàng', tag: 'Hướng dẫn' },
  { title: '10 workflow tự động cho shop online 2026', tag: 'Hướng dẫn' },
];

export const FOOTER_COLUMNS = [
  { title: 'Giải pháp', links: ['Chatbot CSKH', 'Automation bán hàng', 'AI Agent doanh nghiệp', 'Gửi tin hàng loạt', 'Báo cáo & phân tích', 'Huấn luyện AI'] },
  { title: 'Tích hợp', links: ['Facebook Messenger', 'Zalo OA', 'Website Live chat', 'Telegram', 'Google Sheets', 'Shopee', 'TikTok Shop', 'HubSpot CRM'] },
  { title: 'Tài nguyên', links: ['Trung tâm trợ giúp', 'Tài liệu API', 'Cộng đồng', 'Sự kiện', 'Blog'] },
  { title: 'AutoFlow AI', links: ['Giới thiệu', 'Tuyển dụng', 'Đối tác', 'Liên hệ', 'Điều khoản', 'Trạng thái hệ thống'] },
];

export const FOOTER_LEGAL = ['Đăng nhập nhà phát triển', 'Điều khoản dịch vụ', 'Chính sách bảo mật', 'Sơ đồ trang'];
