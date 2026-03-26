const BASE = '';

export const IMAGES = {
  heroBg: `${BASE}/images/hero-bg.png`,
  facility: `${BASE}/images/facility.png`,
  activities: `${BASE}/images/activities.png`,
  careService: `${BASE}/images/care-service.png`,
  roomInterior: `${BASE}/images/room-interior.png`,
  vanLangLogo: `${BASE}/images/van-lang-logo.png`,
};

export const NAV_LINKS = [
  { id: 'about', vi: 'Giới thiệu', en: 'About' },
  { id: 'services', vi: 'Dịch vụ', en: 'Services' },
  { id: 'facility', vi: 'Cơ sở vật chất', en: 'Facility' },
  { id: 'pricing', vi: 'Bảng giá', en: 'Pricing' },
  { id: 'team', vi: 'Đội ngũ', en: 'Team' },
  { id: 'contact', vi: 'Liên hệ', en: 'Contact' },
];

export const STATS = [
  { value: 80, suffix: '+', vi: 'Giường chăm sóc', en: 'Care Beds' },
  { value: 41, suffix: '+', vi: 'Nhân viên chuyên nghiệp', en: 'Professional Staff' },
  { value: 24, suffix: '/7', vi: 'Theo dõi sức khỏe', en: 'Health Monitoring' },
  { value: 3, suffix: '', vi: 'Gói dịch vụ linh hoạt', en: 'Flexible Packages' },
];

export const SERVICES = [
  {
    icon: '🏥',
    vi: { title: 'Chăm sóc Y tế', desc: 'Theo dõi sức khỏe định kỳ, khám tổng quát, quản lý bệnh mạn tính và sử dụng sổ sức khỏe điện tử E-health.' },
    en: { title: 'Medical Care', desc: 'Regular health monitoring, general check-ups, chronic disease management, and electronic health records.' },
  },
  {
    icon: '🍽️',
    vi: { title: 'Dinh dưỡng cá thể hóa', desc: 'Thực đơn khoa học, thiết kế riêng theo tình trạng sức khỏe và bệnh lý của từng người.' },
    en: { title: 'Personalized Nutrition', desc: 'Scientific menus, individually designed based on each person\'s health condition and medical history.' },
  },
  {
    icon: '🏋️',
    vi: { title: 'Phục hồi chức năng', desc: 'Vật lý trị liệu, tập vận động, duy trì khả năng tự lập và phòng ngừa biến chứng.' },
    en: { title: 'Rehabilitation', desc: 'Physical therapy, exercise programs, maintaining independence and preventing complications.' },
  },
  {
    icon: '🛁',
    vi: { title: 'Chăm sóc sinh hoạt', desc: 'Hỗ trợ ăn uống, vệ sinh cá nhân, nghỉ ngơi cho người mất khả năng tự chăm sóc.' },
    en: { title: 'Daily Living Care', desc: 'Assistance with meals, personal hygiene, and rest for those who need support in daily activities.' },
  },
  {
    icon: '🧘',
    vi: { title: 'Chăm sóc tinh thần', desc: 'Sinh hoạt nhóm, thể dục nhẹ, âm nhạc, thiền, tư vấn tâm lý giảm cô đơn.' },
    en: { title: 'Mental Wellness', desc: 'Group activities, light exercise, music, meditation, psychological counseling to reduce loneliness.' },
  },
  {
    icon: '📱',
    vi: { title: 'Công nghệ thông minh', desc: 'Thiết bị theo dõi nhịp tim, huyết áp, SpO₂, cảnh báo té ngã và giám sát an toàn 24/7.' },
    en: { title: 'Smart Technology', desc: 'Heart rate, blood pressure, SpO₂ monitoring, fall alerts, and 24/7 safety surveillance.' },
  },
];

export const PRICING = [
  {
    tier: 'basic',
    vi: {
      name: 'Gói Cơ Bản',
      price: '15,000,000',
      unit: 'VNĐ/tháng',
      features: [
        'Phòng tập thể',
        'Theo dõi sức khỏe 1-2 lần/tuần',
        'Chăm sóc cá nhân cơ bản',
        'Thực đơn chung',
        'Phục hồi chức năng nhẹ',
        'Hoạt động tinh thần cơ bản',
        'Kết nối gia đình định kỳ',
      ],
    },
    en: {
      name: 'Basic Plan',
      price: '15,000,000',
      unit: 'VND/month',
      features: [
        'Shared room',
        'Health monitoring 1-2 times/week',
        'Basic personal care',
        'Standard meal plan',
        'Light rehabilitation',
        'Basic recreational activities',
        'Periodic family connection',
      ],
    },
  },
  {
    tier: 'standard',
    featured: true,
    vi: {
      name: 'Gói Trung Bình',
      price: '20,000,000',
      unit: 'VNĐ/tháng',
      badge: 'Phổ biến nhất',
      features: [
        'Phòng 2-3 người',
        'Theo dõi sức khỏe hằng ngày',
        'Chăm sóc cá nhân toàn phần',
        'Thực đơn theo bệnh lý',
        'Phục hồi chức năng theo kế hoạch',
        'Hoạt động tinh thần đa dạng',
        'Kết nối gia đình thường xuyên',
        'Theo dõi đặc biệt cơ bản',
      ],
    },
    en: {
      name: 'Standard Plan',
      price: '20,000,000',
      unit: 'VND/month',
      badge: 'Most Popular',
      features: [
        'Semi-private room (2-3 people)',
        'Daily health monitoring',
        'Full personal care',
        'Medical diet plan',
        'Scheduled rehabilitation',
        'Diverse recreational activities',
        'Frequent family connection',
        'Basic special monitoring',
      ],
    },
  },
  {
    tier: 'premium',
    vi: {
      name: 'Gói Cao Cấp',
      price: '25,000,000',
      unit: 'VNĐ/tháng',
      features: [
        'Phòng riêng VIP',
        'Theo dõi sức khỏe 24/7',
        'Chăm sóc toàn diện',
        'Dinh dưỡng cá thể hóa',
        'Phục hồi chức năng chuyên sâu',
        'Hoạt động cá nhân hóa',
        'Kết nối gia đình Realtime',
        'Thiết bị thông minh giám sát',
      ],
    },
    en: {
      name: 'Premium Plan',
      price: '25,000,000',
      unit: 'VND/month',
      features: [
        'Private VIP room',
        '24/7 health monitoring',
        'Comprehensive care',
        'Personalized nutrition',
        'Advanced rehabilitation',
        'Personalized activities',
        'Real-time family connection',
        'Smart monitoring devices',
      ],
    },
  },
];

export const TEAM = [
  { name: 'Phạm Hoàng Tâm Như', vi: { role: 'Trưởng nhóm' }, en: { role: 'Team Leader' } },
  { name: 'Hoàng Thị Quỳnh Như', vi: { role: 'Thành viên' }, en: { role: 'Member' } },
  { name: 'Lê Ngọc Anh', vi: { role: 'Thành viên' }, en: { role: 'Member' } },
  { name: 'Nguyễn Tiến Hào', vi: { role: 'Thành viên' }, en: { role: 'Member' } },
];
