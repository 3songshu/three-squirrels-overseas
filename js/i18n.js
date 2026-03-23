// ─── i18n translations ─────────────────────────────────────────────────────────
const T = {
  en: {
    nav_home: "Home", nav_products: "Products", nav_about: "About", nav_contact: "Contact",
    hero_badge: "Trusted by Distributors in 20+ Countries",
    hero_title1: "Premium Chinese Snacks",
    hero_title2: "for Global Markets",
    hero_desc: "Three Squirrels — China's #1 nut & snack brand, listed on Shenzhen Stock Exchange. From premium cashews to festive gift sets, we deliver consistent quality and competitive pricing to distributors worldwide.",
    hero_btn1: "Browse Products", hero_btn2: "Our Story",
    stats_found: "Year Founded", stats_stock: "SSE Stock Code",
    stats_sku: "Product SKUs", stats_exp: "Export Countries",
    stats_found_v: "2012", stats_stock_v: "300783", stats_sku_v: "100+", stats_exp_v: "20+",
    cat_title: "Product Categories",
    cat_desc: "Premium Chinese snacks for every market — retail, wholesale, and foodservice",
    cat_nuts: "Nuts & Seeds", cat_nuts_p: "Premium roasted cashews, almonds, pistachios, sunflower & pumpkin seeds",
    cat_dried: "Dried Fruits", cat_dried_p: "Hand-picked dried goji berries, longan, red dates, tropical fruits",
    cat_sea: "Sea Snacks", cat_sea_p: "Dried shrimp, seaweed snacks, roasted sea cucumber, fish floss",
    cat_sweets: "Traditional Sweets", cat_sweets_p: "Chinese-style candy, melon seeds, rice crackers, nostalgic treats",
    cat_gift: "Gift Sets", cat_gift_p: "Luxury holiday gift boxes and festive snack collections",
    cat_all: "View All Products",
    why_title: "Why Distributors Choose Three Squirrels",
    why_desc: "Trusted by importers and wholesalers in 20+ countries",
    why_q1_t: "Certified Quality", why_q1_d: "ISO 9001, ISO 22000, HACCP, HALAL, and FDA registered. Every batch comes with CoA and full traceability.",
    why_q2_t: "Flexible MOQ", why_q2_d: "Trial orders from 100 units welcome. Scale to full containers with consistent pricing. EXW, FOB, CIF, DDP available.",
    why_q3_t: "International Compliance", why_q3_d: "Custom labels in any language, bilingual packaging, compliant with US FDA, EU, and Middle East regulations.",
    why_q4_t: "Competitive Pricing", why_q4_d: "Direct-from-factory pricing with no middlemen. Volume discounts and long-term distributor agreements available.",
    why_q5_t: "Dedicated Account Manager", why_q5_d: "Every distributor gets a dedicated English-speaking account manager for smooth communication and fast support.",
    why_q6_t: "Fast Sample Turnaround", why_q6_d: "Sample orders ship within 5 business days. We understand the pace of international trade.",
    steps_title: "How It Works", steps_desc: "From discovery to delivery — 4 simple steps",
    step1_t: "Browse & Select", step1_d: "Explore our catalog and add items to your inquiry list — no account needed.",
    step2_t: "Submit Inquiry", step2_d: "Download your inquiry as an image and send it to our team via WhatsApp or email.",
    step3_t: "Receive Quotation", step3_d: "Our team responds within 24 hours with a detailed price proposal for your market.",
    step4_t: "Order & Ship", step4_d: "Confirm your order and we'll arrange production and shipping on your preferred Incoterms.",
    cta_h: "Start Your Sourcing Journey Today",
    cta_p: "Browse our catalog and submit your first inquiry. Our team responds within 24 hours.",
    cta_btn1: "Browse Products", cta_btn2: "Contact Sales",
    footer_rights: "All rights reserved.",
    cart_my_quote: "My Quote",
    add_to_quote: "Add to Quote",
    added: "Added",
    moq_label: "MOQ:",
    filter_all: "All Products", filter_nuts: "Nuts & Seeds",
    filter_dried: "Dried Fruits", filter_sea: "Sea Snacks",
    filter_sweets: "Sweets", filter_gift: "Gift Sets",
    prod_page_title: "Our Product Catalog",
    prod_page_desc: "100+ premium Chinese snacks — sourced direct from our 5 production bases",
    about_title: "Our Story",
    about_subtitle: "From a small apartment in Hefei to 20+ countries — a decade of bold moves",
    about_timeline_title: "Company Timeline",
    tl12_y: "2012", tl12_t: "The Spark — Hefei, Anhui",
    tl12_d: "Zhang Liaoyuan founded Three Squirrels in a small apartment with 5 employees and a big vision: to build China's own world-class snack brand.",
    tl14_y: "2014", tl14_t: "First Million — Tmall Record",
    tl14_d: "Just 2 years after launch, Three Squirrels became the first nut brand on Tmall to exceed 100 million RMB in annual sales.",
    tl15_y: "2015", tl15_t: "National Expansion",
    tl15_d: "Opened 5 regional distribution centers across China. Expanded product line to 30+ SKUs including dried fruits and sea snacks.",
    tl16_y: "2016", tl16_t: "Overseas Ambitions Begin",
    tl16_d: "First export orders to Southeast Asia. Obtained ISO 22000 and HACCP food safety certifications.",
    tl19_y: "2019", tl19_t: "Listed on Shenzhen Stock Exchange",
    tl19_d: "July 12, 2019 — Three Squirrels went public on the Shenzhen ChiNext Board. Stock Code: 300783. Raised ~$100M in the IPO.",
    tl20_y: "2020–Today", tl20_t: "Global Growth",
    tl20_d: "5 production bases, 200,000+ sqm, 3,000+ employees. Exporting to 20+ countries. FDA registered, HALAL certified for international markets.",
    atgl_title: "Three Squirrels at a Glance",
    cert_title: "Certifications & Compliance",
    founder_title: "Message from Our Founder",
    founder_quote: '"When we started in 2012, everyone said the Chinese snack market was dominated by giants. We believed that with the right products, the right team, and the right values, we could build something truly global. Today, Three Squirrels is in millions of homes across China and around the world — and we're just getting started."',
    founder_sig: "— Zhang Liaoyuan, Founder & CEO",
    contact_title: "Contact Our Export Team",
    contact_subtitle: "We reply to all distributor inquiries within 24 hours on business days",
    cont_email_t: "Email", cont_email_p1: "Best for: detailed product specs, sample requests, custom label inquiries",
    cont_phone_t: "Phone", cont_phone_p: "Business hours: Mon–Fri 9:00–18:00 CST (UTC+8)",
    cont_hq_t: "Headquarters", cont_hq_p: "No. 2888 Chengbei Avenue, Hefei, Anhui Province 230000, China",
    cont_stock_t: "Stock Information", cont_stock_p: "Shenzhen Stock Exchange | Stock Code: 300783",
    cont_form_t: "Send us a message",
    form_name: "Full Name *", form_company: "Company / Business Name *",
    form_country: "Country / Region *", form_email: "Email Address *",
    form_type: "Inquiry Type",
    form_type_opts: ["Request product catalog","Sample order","Custom label / packaging","Shipping & logistics","Distributor partnership","Other"],
    form_msg: "Message", form_msg_ph: "Tell us about your business and what products you're interested in...",
    form_send: "Send Inquiry →",
    inq_title: "My Inquiry List",
    inq_empty: "Your inquiry list is empty. Browse products and add items to get started.",
    inq_col_product: "Product", inq_col_price: "Unit Price",
    inq_col_qty: "Quantity", inq_col_action: "Action",
    inq_total: "Total",
    inq_download: "Download as Image",
    inq_email: "Send via Email",
    inq_csv: "Download CSV",
    inq_whatsapp: "Send via WhatsApp",
    inq_submit: "Submit Inquiry",
    inq_clear: "Clear All",
    thanks_title: "Thank You!",
    thanks_msg: "Our export team will reply within 24 hours on business days.",
    back_home: "Back to Home"
  },
  zh: {
    nav_home: "首页", nav_products: "产品", nav_about: "关于我们", nav_contact: "联系我们",
    hero_badge: "产品出口20+国家，服务全球经销商",
    hero_title1: "优质中国零食",
    hero_title2: "出口全球市场",
    hero_desc: "三只松鼠——中国坚果零食领导品牌，深交所上市企业。从优质腰果到节日礼盒，我们以稳定品质和竞争力价格为全球经销商提供可靠供应。",
    hero_btn1: "浏览产品", hero_btn2: "了解我们",
    stats_found: "成立年份", stats_stock: "股票代码",
    stats_sku: "产品 SKU", stats_exp: "出口国家",
    stats_found_v: "2012", stats_stock_v: "300783", stats_sku_v: "100+", stats_exp_v: "20+",
    cat_title: "产品分类",
    cat_desc: "精选中国零食，涵盖零售、批发、餐饮等多个渠道",
    cat_nuts: "坚果炒货", cat_nuts_p: "优质腰果、杏仁、开心果、葵花籽、南瓜子",
    cat_dried: "果干蜜饯", cat_dried_p: "枸杞、桂圆、红枣、各类热带果干",
    cat_sea: "海味零食", cat_sea_p: "虾皮、海苔、烤海参、鱼松等海产零食",
    cat_sweets: "传统糖果", cat_sweets_p: "瓜子、锅巴、米饼、怀旧零食",
    cat_gift: "礼盒套装", cat_gift_p: "节日豪华礼盒、精选零食礼包",
    cat_all: "查看全部产品",
    why_title: "为什么全球经销商选择三只松鼠",
    why_desc: "20多个国家的进口商和批发商信赖之选",
    why_q1_t: "国际认证品质", why_q1_d: "通过ISO 9001、ISO 22000、HACCP、HALAL认证及FDA注册，每批次提供检测报告和全程溯源。",
    why_q2_t: "灵活起订量", why_q2_d: "100件起试单，支持按柜出货。EXW、FOB、CIF、DDP多种贸易方式可选。",
    why_q3_t: "符合各国法规", why_q3_d: "支持多语言标签、双语包装，符合美国FDA、欧盟及中东地区法规要求。",
    why_q4_t: "厂家直供价格", why_q4_d: "无中间商赚差价，工厂直发。量大可签长期经销协议，享受更优价格。",
    why_q5_t: "专属客户经理", why_q5_d: "每位经销商配备专属英语客户经理，沟通高效、响应迅速。",
    why_q6_t: "快速样品周转", why_q6_d: "样品订单5个工作日内发货，我们理解国际贸易的节奏。",
    steps_title: "合作流程", steps_desc: "从选择到交货，4步轻松完成",
    step1_t: "浏览选购", step1_d: "浏览产品目录，将所需商品加入询价清单，无需注册账户。",
    step2_t: "提交询价", step2_d: "将询价单导出为图片，通过微信或邮件发送给我们的团队。",
    step3_t: "收到报价", step3_d: "我们的团队将在24小时内回复，提供针对您市场的详细报价。",
    step4_t: "订单与发货", step4_d: "确认订单后，我们按您指定的贸易条款安排生产和物流。",
    cta_h: "立即开始您的采购之旅",
    cta_p: "浏览产品目录并提交第一次询价，我们的团队24小时内回复。",
    cta_btn1: "浏览产品", cta_btn2: "联系销售",
    footer_rights: "版权所有",
    cart_my_quote: "我的询价",
    add_to_quote: "加入询价", added: "已添加",
    moq_label: "起订量：",
    filter_all: "全部产品", filter_nuts: "坚果炒货",
    filter_dried: "果干蜜饯", filter_sea: "海味零食",
    filter_sweets: "传统糖果", filter_gift: "礼盒套装",
    prod_page_title: "产品目录",
    prod_page_desc: "100+款优质中国零食，来自五大自有生产基地",
    about_title: "关于我们",
    about_subtitle: "从合肥一间公寓到20+国家——十年的敢想敢做",
    about_timeline_title: "公司发展历程",
    tl12_y: "2012年", tl12_t: "创业起步——安徽合肥",
    tl12_d: "章燎源在合肥一间公寓里创立三只松鼠，5名员工，一个宏大愿景：打造中国自己的世界级零食品牌。",
    tl14_y: "2014年", tl14_t: "千万突破——天猫纪录",
    tl14_d: "创业仅2年，三只松鼠成为天猫首个年销售额突破1亿元的坚果品牌。",
    tl15_y: "2015年", tl15_t: "全国布局",
    tl15_d: "成立5大区域配送中心，产品线扩展至30余款，涵盖果干和海味零食。",
    tl16_y: "2016年", tl16_t: "海外起步",
    tl16_d: "首批出口东南亚订单落地。通过ISO 22000和HACCP食品安全认证。",
    tl19_y: "2019年", tl19_t: "深交所上市",
    tl19_d: "2019年7月12日，三只松鼠在深圳证券交易所创业板上市，股票代码：300783，IPO融资约7亿元人民币。",
    tl20_y: "2020年至今", tl20_t: "全球拓展",
    tl20_d: "5大生产基地、20万+平方米、3000+员工。产品出口20+国家。通过FDA注册和HALAL认证。",
    atgl_title: "三只松鼠概览",
    cert_title: "资质认证",
    founder_title: "创始人寄语",
    founder_quote: '"2012年创业时，所有人都说中国零食市场已被巨头垄断。但我们相信，有了好的产品、好的团队、好的价值观，我们就能打造真正全球化的企业。如今，三只松鼠已走进中国乃至全球数百万家庭——而这只是开始。"',
    founder_sig: "——章燎源，创始人兼CEO",
    contact_title: "联系出口团队",
    contact_subtitle: "工作日24小时内回复所有经销商询盘",
    cont_email_t: "电子邮箱", cont_email_p1: "适用于：产品规格咨询、样品申请、定制标签等",
    cont_phone_t: "电话", cont_phone_p: "办公时间：周一至周五 9:00–18:00（北京时间 UTC+8）",
    cont_hq_t: "总部地址", cont_hq_p: "安徽省合肥市经开区繁华大道2888号 230000",
    cont_stock_t: "上市信息", cont_stock_p: "深圳证券交易所 | 股票代码：300783",
    cont_form_t: "给我们留言",
    form_name: "姓名 *", form_company: "公司名称 *",
    form_country: "国家/地区 *", form_email: "电子邮箱 *",
    form_type: "询价类型",
    form_type_opts: ["索取产品目录","样品订单","定制标签/包装","物流与发货","经销合作","其他"],
    form_msg: "留言内容", form_msg_ph: "请介绍您的公司及感兴趣的产品...",
    form_send: "发送询价 →",
    inq_title: "我的询价单",
    inq_empty: "询价单是空的，快去浏览产品并添加商品吧！",
    inq_col_product: "产品", inq_col_price: "单价",
    inq_col_qty: "数量", inq_col_action: "操作",
    inq_total: "合计",
    inq_download: "导出图片", inq_email: "邮件发送",
    inq_csv: "下载CSV", inq_whatsapp: "WhatsApp发送",
    inq_submit: "提交询价", inq_clear: "清空",
    thanks_title: "感谢您的询价！",
    thanks_msg: "我们的出口团队将在24小时内（工作日）回复您。",
    back_home: "返回首页"
  }
};

// ─── Language Switcher ─────────────────────────────────────────────────────────
let currentLang = localStorage.getItem('lang') || 'en';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  applyTranslations();
  // Update toggle button
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}

function applyTranslations() {
  if (!T[currentLang]) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (T[currentLang][key] !== undefined) {
      el.textContent = T[currentLang][key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (T[currentLang][key] !== undefined) {
      el.placeholder = T[currentLang][key];
    }
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.dataset.i18nTitle;
    if (T[currentLang][key] !== undefined) {
      el.title = T[currentLang][key];
    }
  });
  // re-render Lucide icons after language switch
  if (window.lucide) lucide.createIcons();
  // re-init cart badge
  if (window.updateCartBadge) updateCartBadge();
}

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
});
