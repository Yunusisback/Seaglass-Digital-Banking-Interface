// Kart bilgileri
export const cardInfo = {
  name: "SeaCard Premium",
  tagline: "Tatil Hayalleriniz, Ayrıcalıklarımız",
  description: "Deniz kenarı tatillerinizde özel indirimler ve ayrıcalıklar sunan premium kredi kartı"
};

// Avantajlar
export const benefits = [
  {
    icon: "Hotel",
    title: "Otellerde %20 İndirim",
    description: "Anlaşmalı 500+ otelde konaklama indirimi"
  },
  {
    icon: "Waves",
    title: "Beach Club Ücretsiz",
    description: "Seçili plaj kulüplerine ücretsiz giriş hakkı"
  },
  {
    icon: "UtensilsCrossed",
    title: "Restoranlarda %15",
    description: "Deniz ürünleri restoranlarında özel indirim"
  },
  {
    icon: "Plane",
    title: "Uçuşlarda Mil",
    description: "Her harcamada 2x mil kazanın, uçuşlarda kullanın"
  },
  {
    icon: "Sailboat",
    title: "Su Sporlarında Cashback",
    description: "Dalış, sörf, tekne turlarında %10 para iadesi"
  },
  {
    icon: "Crown",
    title: "VIP Lounge",
    description: "Havalimanı VIP lounge'larına sınırsız erişim"
  }
];

// Tatil yerleri

export const destinations = [
  {
    name: "Maldivler",
    image: "https://cdn.forevervacation.com/uploads/blog/everything-you-need-to-know-about-the-maldives-the-vacationer-by-forevervacation-2003.jpeg?w=800",
    discount: "%45",
    hotels: 45,
    description: "Turkuaz lagünler ve su üstü villalar"
  },
  {
    name: "Bahamalar",
    image: "https://www.bahamalar.tr/wp-content/uploads/2024/11/bahamalar-nassau.jpg?w=800",
    discount: "%40",
    hotels: 120,
    description: "Pembe kumlu plajlar ve kristal sular"
  },
  {
    name: "Antalya",
    image: "https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt21155ac1ca63f676/687f9d115903b3a04b04e07c/BCC-2024-EXPLORER-ANTALYA-FREE_THINGS_TO_DO-HEADER-MOBILE.jpg?format=webp&quality=60&width=1440?w=800",
    discount: "%50",
    hotels: 38,
    description: "Antik kentler ve masmavi Akdeniz kıyıları"
  },
  {
  name: "Marsilya",
  image: "https://www.buseterim.com.tr/upload/default/2024/10/11/6801.jpg?w=800",
  discount: "%30",
  hotels: 67,
  description: "Akdeniz limanı, tarihi eski şehir ve deniz ürünleri"
},
  {
    name: "Marmaris",
    image: "https://www.yachttogo.com/wp-content/cache/seraphinite-accelerator/s/m/d/img/8a66bd41b264c342b90ed3efdfb06d17.1f2f6.jpeg?w=800",
    discount: "%20",
    hotels: 89,
    description: "Canlı gece hayatı ve muhteşem koylar"
  },
  {
    name: "Bali",
    image: "https://www.royaltur.com/images/tour/1308_vitrin_725911.jpg?w=800",
    discount: "%35",
    hotels: 24,
    description: "Tapınaklar, pirinç tarlaları ve sörf cenneti"
  }
];

// Kart tipleri
export const cardTiers = [
  {
    name: "Classic",
    price: "Ücretsiz",
    color: "from-blue-400 to-cyan-400",
    features: [
      "Otellerde %10 indirim",
      "Restoranlarda %5 indirim",
      "Yıllık 50.000₺ harcama limiti",
      "Temel sigorta paketi"
    ],
    popular: false
  },
  {
    name: "Gold",
    price: "₺5599/yıl",
    color: "from-amber-400 to-yellow-500",
    features: [
      "Otellerde %40 indirim",
      "Beach club ücretsiz giriş",
      "Restoranlarda %25 indirim",
      "Yıllık 200.000₺ harcama limiti",
      "Seyahat sigortası",
      "Havalimanı lounge 6 kez/yıl"
    ],
    popular: true
  },
  {
    name: "Platinum",
    price: "₺9599/yıl",
    color: "from-slate-300 to-slate-500",
    features: [
      "Otellerde %60 indirim",
      "Beach club premium üyelik",
      "Restoranlarda %40 indirim",
      "Sınırsız harcama limiti",
      "Premium seyahat sigortası",
      "Sınırsız VIP lounge",
      "Özel concierge hizmeti",
      "Yat kiralama %25 indirim"
    ],
    popular: false
  }
];

// Başvuru adımları
export const applySteps = [
  {
    step: "1",
    title: "Online Başvuru",
    description: "Formu doldurun ve gerekli bilgileri sağlayın"
  },
  {
    step: "2",
    title: "Onay Süreci",
    description: "24 saat içinde başvurunuz değerlendirilir"
  },
  {
    step: "3",
    title: "Kartınızı Alın",
    description: "7 iş günü içinde kartınız kapınızda"
  }
];

// Sosyal medya linkleri
export const socialLinks = [
  { name: "Instagram", url: "#", icon: "Instagram" },
  { name: "Twitter", url: "#", icon: "Twitter" },
  { name: "Facebook", url: "#", icon: "Facebook" },
  { name: "LinkedIn", url: "#", icon: "Linkedin" }
];