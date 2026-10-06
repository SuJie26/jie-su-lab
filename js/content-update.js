(function () {
  const data = window.siteData;
  Object.assign(window.siteContent.en, {selectedTitle: "Selected publications", profileLink: "Meet the team →", homePi: "College of the Environment and Ecology and Institute for Ocean and Coastal Development, Xiamen University.", allNews: "All news →"});
  Object.assign(window.siteContent.zh, {selectedTitle: "代表性成果", profileLink: "了解团队 →", homePi: "厦门大学环境与生态学院、海洋与海岸带发展研究院。", allNews: "全部动态 →"});

  data.piBio = {
    en: [
      "Jie Su is a professor at the College of the Environment and Ecology and the Institute for Ocean and Coastal Development, Xiamen University. She is affiliated with the State Key Laboratory of Marine Environmental Science; the Key Laboratory of the Coastal and Wetland Ecosystem, Ministry of Education; the National Observation and Research Station for the Taiwan Strait Marine Ecosystem; and the Fujian Provincial Key Laboratory for Coastal Ecology and Environmental Studies. She is also a Visiting Researcher at the Institute for Future Initiatives, The University of Tokyo.",
      "Her research applies social-ecological systems and ecological economics approaches to examine interactions between human societies and natural ecosystems under global environmental change. It develops integrated solutions for coastal conservation and restoration, particularly in mangrove ecosystems, linking biodiversity conservation, climate action, economic development, and human well-being.",
      "She serves as a review editor for the IPBES Spatial Planning and Connectivity Assessment and an editor of Sustainability Science. In 2024, she reviewed proposals for the European Partnership BIODIVERSA+."
    ],
    zh: [
      "苏婕，厦门大学环境与生态学院、海洋与海岸带发展研究院教授、博士生导师，海洋生物地球化学全国重点实验室、福建台湾海峡生态系统国家野外科学观测研究站和福建省海陆界面生态环境重点实验室固定科研人员，东京大学未来愿景研究中心客座研究员。",
      "她的研究运用社会—生态系统与生态经济学方法，探究全球环境变化背景下人类社会与自然生态系统之间复杂的相互作用。研究旨在构建海岸带保护与修复的综合解决方案，尤其聚焦红树林生态系统，通过统筹生物多样性保护、气候变化减缓与适应、经济发展和人类福祉，实现可持续发展。",
      "她现任生物多样性和生态系统服务政府间科学政策平台（IPBES）空间规划与连通性评估评审编辑，以及 Sustainability Science 期刊编辑。2024年，她担任欧盟生物多样性跨国多边合作计划（BIODIVERSA+）项目评审专家。"
    ]
  };

  data.researchThemes = [
  {
    "en": {
      "title": "Coastal Social–Ecological Dynamics",
      "tag": "Coastal dynamics",
      "summary": "We study how coastal ecosystems and human societies shape one another, and how land use, livelihoods, and management influence change, stability, and recovery.",
      "details": [
        "Human–ecosystem interactions",
        "Drivers of coastal change",
        "System resilience and recovery"
      ],
      "image": "assets/theme-social-ecological-systems-2026.jpeg",
      "imagePosition": "50% 55%",
      "imageAlt": "Aerial view of coastal ponds and adjacent mangroves"
    },
    "zh": {
      "title": "海岸带社会—生态系统动态",
      "tag": "系统动态",
      "summary": "研究海岸带生态系统与人类社会的相互作用，探究土地利用、生计活动与管理措施如何影响系统变化、稳定性和恢复。",
      "details": [
        "人与生态系统的相互作用",
        "海岸带变化的驱动因素",
        "系统韧性与恢复"
      ],
      "image": "assets/theme-social-ecological-systems-2026.jpeg",
      "imagePosition": "50% 55%",
      "imageAlt": "海岸带池塘与相邻红树林的航拍景观"
    }
  },
  {
    "en": {
      "title": "Coupled Systems and Feedbacks",
      "tag": "Coupled systems",
      "summary": "We examine interactions and feedbacks between mangroves, aquaculture, and livelihoods, combining evidence synthesis, field research, and modelling to understand how ecological, economic, and social benefits persist.",
      "details": [
        "Human–ecosystem feedbacks",
        "Integrated mangrove–aquaculture systems",
        "System dynamics and agent-based models"
      ],
      "image": "assets/theme-ecological-economics-puffins-2026.jpeg",
      "imagePosition": "50% 100%",
      "imageAlt": "Two puffins standing on a grassy coastal cliff"
    },
    "zh": {
      "title": "耦合系统与反馈过程",
      "tag": "耦合系统",
      "summary": "结合证据综合、实地研究与模型模拟，探究红树林、养殖活动和社区生计之间的相互作用及反馈，理解生态、经济和社会效益如何持续。",
      "details": [
        "人与生态系统之间的反馈",
        "红树林种养耦合系统",
        "系统动力学与基于主体的模型"
      ],
      "image": "assets/theme-ecological-economics-puffins-2026.jpeg",
      "imagePosition": "50% 100%",
      "imageAlt": "两只海鹦站在海岸草坡上"
    }
  },
  {
    "en": {
      "title": "Conservation and Restoration Planning",
      "tag": "Conservation planning",
      "summary": "We use cost-minimisation and multi-objective spatial optimisation to identify coastal conservation and restoration priorities, balancing benefits and costs under changing climate and socioeconomic conditions.",
      "details": [
        "Conservation and restoration priorities",
        "Opportunity costs and multiple objectives",
        "Spatial optimisation under uncertainty"
      ],
      "image": "assets/theme-coastal-spatial-turtle-2026.jpeg",
      "imagePosition": "50% 52%",
      "imageAlt": "Sea turtle on a dark beach beside a KEEP OUT sign and breaking waves"
    },
    "zh": {
      "title": "保护与修复规划",
      "tag": "保护规划",
      "summary": "运用成本最小化与多目标空间优化方法，识别海岸带保护和修复的优先区域，并在气候与社会经济条件变化的背景下权衡效益与成本。",
      "details": [
        "保护与修复优先区域",
        "机会成本与多重目标",
        "不确定性下的空间优化"
      ],
      "image": "assets/theme-coastal-spatial-turtle-2026.jpeg",
      "imagePosition": "50% 52%",
      "imageAlt": "黑色沙滩上的海龟、禁止进入标志与海浪"
    }
  },
  {
    "en": {
      "title": "Nature-based Solutions",
      "tag": "Nature-based solutions",
      "summary": "We study how protecting, restoring, and sustainably managing coastal ecosystems can support biodiversity, climate mitigation and adaptation, and human well-being. We assess their effectiveness and the conditions needed for implementation.",
      "details": [
        "Ecosystem conservation and restoration",
        "Climate mitigation and adaptation",
        "Barriers and enabling conditions"
      ],
      "image": "assets/theme-climate-rocky-coast-2026.jpeg",
      "imagePosition": "50% 55%",
      "imageAlt": "Waves breaking against rocky coastal cliffs and a natural rock arch"
    },
    "zh": {
      "title": "基于自然的解决方案",
      "tag": "基于自然的解决方案",
      "summary": "研究海岸带生态系统的保护、修复与可持续管理如何促进生物多样性保护、气候变化减缓与适应及人类福祉，并评估这些措施的成效与实施条件。",
      "details": [
        "生态系统保护与修复",
        "气候变化减缓与适应",
        "实施障碍与促进条件"
      ],
      "image": "assets/theme-climate-rocky-coast-2026.jpeg",
      "imagePosition": "50% 55%",
      "imageAlt": "海浪拍打岩石海岸、峭壁与天然岩拱"
    }
  }
];

  const person = (nameEn, nameZh, roleEn, roleZh, majorEn, majorZh, directionEn, directionZh, bioEn, bioZh, image) => ({ nameEn, nameZh, roleEn, roleZh, majorEn, majorZh, directionEn, directionZh, bioEn, bioZh, image, portrait: { scale: "1.42", origin: "50% 30%" } });
  data.peopleGroups = [
    { en: "Postdoctoral researcher", zh: "博士后", members: [person("Fan Yang", "杨帆", "Postdoctoral researcher", "博士后", "Resources and Environment", "资源与环境", "Environmental remote sensing", "环境遥感", "Fan Yang received her PhD in Resources and Environment from Sun Yat-sen University. Her work examines vegetation remote sensing, urban ecology, and disaster-related studies, with a focus on vegetation resilience in tropical and subtropical urban regions.", "杨帆毕业于中山大学资源与环境专业，获博士学位。她主要从事环境遥感研究，关注植被遥感、城市生态与灾害事件，重点探究热带—亚热带城市植被恢复力的时空变化及其气候变化和人类活动驱动机制。", "assets/fan-yang-2026.jpeg")] },
    { en: "Research assistants", zh: "研究助理", members: [
      person("Jinhao Li", "李锦豪", "Research assistant", "研究助理", "Environmental Management", "环境管理", "Fisheries sustainability and climate economics", "渔业可持续发展与气候经济学", "Jinhao Li holds a master's degree in Environmental Management from Xiamen University and is preparing for doctoral studies. His current research examines fuel substitution and low-carbon transition pathways in fisheries.", "李锦豪拥有厦门大学环境管理硕士学位，现正准备攻读博士学位。他关注渔业可持续发展与气候变化经济学，当前研究渔船燃料替代和渔业低碳转型路径。", "assets/jinhao-li-2026.jpeg"),
      person("Yuhang Peng", "彭宇航", "Research assistant", "研究助理", "Marine Resources and Environment", "海洋资源与环境", "Marine ecological-product valuation", "海洋生态产品价值核算", "Yuhang Peng holds a master's degree in Marine Resources and Environment from Guangdong Ocean University. He supports lab administration and works with ArcGIS and marine ecological-product valuation.", "彭宇航拥有广东海洋大学海洋资源与环境硕士学位。他负责课题组日常事务管理，熟悉 ArcGIS 和海洋生态产品价值核算。", "assets/yuhang-peng-2026.jpeg")
    ] },
    { en: "PhD students", zh: "博士研究生", members: [
      person("Huilin Lai", "赖慧琳", "PhD student (2025 intake)", "2025级博士研究生", "Environmental Management", "环境管理", "Mangrove social-ecological systems", "红树林社会—生态系统", "Huilin Lai holds a master's degree in Economics from Ningbo University. Her research examines mangrove ecosystems, coastal livelihoods, environmental governance, ecosystem services, and social-ecological resilience.", "赖慧琳拥有宁波大学经济学硕士学位。她关注红树林生态系统、沿海生计与环境治理之间的相互作用，重点研究人类活动和管理干预对生态系统服务、生计福祉及社会—生态系统韧性的影响。", "assets/huilin-lai-2026.jpeg"),
      person("Zelong Ma", "马泽龙", "PhD student (2026 intake)", "2026级博士研究生", "Environmental Management", "环境管理", "Human-environment coupling across the land-sea interface", "陆海界面人地耦合系统", "Zelong Ma received his master's degree from the Guangzhou Institute of Geochemistry, Chinese Academy of Sciences. He studies human-environment coupling and telecoupling across the land-sea interface, with a focus on the Jiulong River-Xiamen Bay region.", "马泽龙毕业于中国科学院广州地球化学研究所，获硕士学位。他关注陆海界面人地耦合系统与远程耦合，重点研究九龙江—厦门湾区域社会经济系统与生态环境系统的耦合关系。", "assets/zelong-ma-2026.jpeg"),
      person("Shouxiang Sun", "孙守祥", "PhD student (2026 intake)", "2026级博士研究生", "Marine Affairs", "海洋事务", "Coastal blue-carbon ecosystem management", "海岸带蓝碳生态系统管理", "Shouxiang Sun holds a BSc in Economics from Xiamen University and completed a Statistics minor at WISE. His research focuses on climate change, environmental economics, and management strategies for coastal blue-carbon ecosystem conservation and restoration.", "孙守祥本科毕业于厦门大学经济学专业，并完成王亚南经济研究院统计学（数理）辅修课程。他关注气候变化、环境经济学和海岸带综合管理，当前聚焦以经济学视角探索兼顾生态效益与经济效率的蓝碳生态系统保护修复方案。", "assets/shouxiang-sun-2026.jpeg")
    ] },
    { en: "Master’s students", zh: "硕士研究生", members: [
      person("Yixin Chen", "陈奕欣", "Master’s student (2025 intake)", "2025级硕士研究生", "Marine Affairs", "海洋事务", "Integrated mangrove-aquaculture systems", "红树林—水产养殖耦合系统", "Yixin Chen studies integrated mangrove-aquaculture systems, coastal environmental policy, and governance. Her work compares ecological and socioeconomic outcomes across aquaculture and restoration models.", "陈奕欣关注红树林—水产养殖耦合系统、海岸带环境政策与治理，重点比较不同种养耦合、传统养殖和红树林修复模式的生态与社会经济效应。", "assets/yixin-chen-2026.jpeg"),
      person("Qingcheng Liu", "刘青成", "Master’s student (2025 intake)", "2025级硕士研究生", "Environmental Management", "环境管理", "Social dimensions of ecological restoration", "生态修复的社会维度", "Qingcheng Liu studies ecological restoration, social-ecological systems, nature conservation, and community well-being. His current work examines restoration assessment and livelihoods around the Zhangjiang Estuary Mangrove National Nature Reserve.", "刘青成关注生态修复、社会—生态系统、自然保护与社区福祉。当前研究从社会—生态视角理解和评估修复行动，并以漳江口红树林国家级自然保护区及周边社区为案例探讨社区生计与福祉。", "assets/qingcheng-liu-2026.jpeg"),
      person("Feibin Huang", "黄沸彬", "Master’s student (2026 intake)", "2026级硕士研究生", "Marine Affairs", "海洋事务", "Ecosystem-service valuation", "生态系统服务价值评估", "Feibin Huang holds a Bachelor of Management from Nanjing University of Finance and Economics. His interests include ecosystem-service valuation, marine resource management, and sustainable development.", "黄沸彬毕业于南京财经大学，获管理学学士学位，曾开展生态系统服务价值评估研究。他关注生态系统服务价值、海洋资源管理及其与可持续发展的交叉领域。", "assets/feibin-huang-2026.jpeg"),
      person("Tianlei Pu", "蒲田雷", "Master’s student (2026 intake)", "2026级硕士研究生", "Environmental Management", "环境管理", "Coastal wetland ecology and cultural ecosystem services", "滨海湿地生态与文化生态系统服务", "Tianlei Pu holds a BSc in Artificial Intelligence from Hunan University of Technology and Business. His current work examines the spatiotemporal patterns of mangrove cultural ecosystem services and human well-being.", "蒲田雷本科毕业于湖南工商大学人工智能专业。他关注滨海湿地生态、人地耦合系统与生态系统服务，当前研究红树林文化生态系统服务与人类福祉的时空分异特征。", "assets/tianlei-pu-2026.jpeg"),
      person("Huiru Qiang", "强慧如", "Master’s student (2026 intake)", "2026级硕士研究生", "Environmental Management", "环境管理", "Mangrove ecotourism and human well-being", "红树林生态旅游与人类福祉", "Huiru Qiang holds a bachelor's degree in Tourism Management from Dalian University. Her research explores mangrove cultural ecosystem services, ecotourism, local livelihoods, and coastal community well-being.", "强慧如本科毕业于大连大学旅游管理专业。她关注红树林文化生态系统服务、人类福祉和生态旅游，重点探讨红树林保护、社区生计、可持续旅游和沿海社区福祉之间的关系。", "assets/huiru-qiang-2026.jpeg"),
      person("Sherlon Sulapas", "Sherlon Sulapas", "Master’s student (2026 intake)", "2026级硕士研究生", "Marine Affairs", "海洋事务", "Marine and coastal conservation", "海洋与海岸带保护", "He holds a BSc in Biology, majoring in Ecology, from Visayas State University, Philippines. He studies marine and coastal conservation, blue carbon, climate change, biodiversity, and sustainable coastal management.", "他本科毕业于菲律宾维萨亚斯大学生态学专业。他关注海洋与海岸带保护、蓝碳、气候变化、生物多样性、海洋政策与可持续海岸带管理。", "assets/sherlon-sulapas-2026.jpeg"),
      person("Yuwei Zhang", "张玉玮", "Master’s student (2026 intake)", "2026级硕士研究生", "Environmental Management", "环境管理", "Ecological restoration and biodiversity", "生态修复与生物多样性", "Yuwei Zhang holds a BSc (Hons) in Applied Economics from The Chinese University of Hong Kong, Shenzhen. She studies ecological restoration, biodiversity conservation, and the costs and economic benefits of mangrove restoration.", "张玉玮本科毕业于香港中文大学（深圳）应用经济学专业，获经济学荣誉学士学位。她关注生态修复、红树林社会经济效益和生物多样性保护，重点研究修复成效、成本与经济效益。", "assets/yuwei-zhang-2026.jpeg")
    ] },
    { en: "Undergraduate students", zh: "本科生", members: [
      person("Mingzhe Li", "李明哲", "Undergraduate student (2024 intake)", "2024级本科生", "Environmental Science", "环境科学", "Mangrove social-ecological-economic assessment", "红树林社会—生态—经济评估", "Mingzhe Li studies coastal mangrove ecosystems and social-ecological-economic coupled-system assessment. He leads a university Student Innovation Training Program on integrated mangrove-aquaculture systems.", "李明哲关注滨海红树林生态系统及社会—生态—经济耦合系统评估，现主持校级大学生创新训练计划，开展红树林种养耦合模式的生态、经济和社会效益综合评估。", "assets/mingzhe-li-2026.jpeg"),
      person("Ruiyang Zhong", "钟瑞阳", "Undergraduate student (2024 intake)", "2024级本科生", "Ecology", "生态学", "Blue carbon and ecological planning", "蓝碳与生态规划", "Ruiyang Zhong is an undergraduate in the Ecology Excellence Program at Xiamen University. He studies ecosystem carbon sinks, blue carbon, urban ecological planning, environmental economics, and integrated mangrove-aquaculture systems.", "钟瑞阳是厦门大学生态学强基班本科生。他关注生态系统碳汇、蓝碳、城市生态规划与环境经济，以及红树林种养耦合模式中生态、经济和社会效益的协同与权衡。", "assets/ruiyang-zhong-2026.jpeg"),
      person("Haochen Yang", "杨昊宸", "Undergraduate student (2025 intake)", "2025级本科生", "Ecology", "生态学", "Ecosystem management and sustainability", "生态系统管理与可持续发展", "Haochen Yang is an undergraduate student in Ecology at Xiamen University. His current work assesses the ecological, economic, and social outcomes of integrated mangrove-aquaculture systems.", "杨昊宸是厦门大学生态学专业本科生。他关注生态系统管理、可持续发展，以及红树林种养耦合模式的生态、经济与社会效益评估。", "assets/haochen-yang-2026.jpeg")
    ] }
  ];

  data.projects = [
    { category: "restoration", period: "2027-2030", roleEn: "PI", roleZh: "主持", titleEn: "Assessing net benefits and instability mechanisms for spatial optimization of mangrove restoration", titleZh: "典型红树林修复模式净效益、不稳定机制与空间优化路径", funderEn: "NSFC Science Fund General Program", funderZh: "国家自然科学基金面上项目", summaryEn: "This project examines the net benefits, instability mechanisms, and spatial optimization pathways of representative mangrove restoration models in Fujian, China. It will develop an integrated framework for evaluating social-ecological outcomes and support spatial prioritization, adaptive planning, and governance.", summaryZh: "本项目以福建省典型红树林修复模式为对象，研究其社会—生态净效益、不稳定机制与空间优化路径。项目将构建综合评估与模拟框架，为红树林修复的空间优先排序、适应性规划与治理决策提供科学依据和模型工具。" },
    { category: "bluecarbon", period: "2026-2028", roleEn: "Co-I", roleZh: "参与", titleEn: "Zhangjiang Estuary Mangrove Carbon Sink Enhancement and Ecological Health Synergistic Demonstration", titleZh: "漳江口红树林增汇与生态健康协同增效示范", funderEn: "Key Project, State Key Laboratory of Marine Biogeochemistry", funderZh: "厦门大学海洋生物地球化学全国重点实验室揭榜挂帅重点项目", summaryEn: "This project evaluates the social-ecological outcomes of mangrove restoration in the Zhangjiang Estuary, with particular attention to carbon-sink enhancement and ecosystem health. It examines how invasive-plant removal and ecological restoration can improve ecosystem services and community well-being.", summaryZh: "本项目评估漳江口红树林修复的社会—生态效益，重点关注红树林增汇与生态健康的协同提升。研究将探讨入侵植物清除与生态恢复工程如何改善生态系统服务，并进一步影响周边社区的环境福祉感知与多维福祉水平。" },
    { category: "aquaculture", period: "2025-2027", roleEn: "PI", roleZh: "主持", titleEn: "Integrated social-ecological approaches to coastal ecosystem restoration and sustainability", titleZh: "人地耦合的海岸带生态修复与可持续发展", funderEn: "NSFC Science Fund Program for Excellent Young Scientists Overseas", funderZh: "国家高层次人才青年项目", summaryEn: "This project investigates human-nature coupling mechanisms in coastal ecosystem restoration and sustainable development. It compares ecological, economic, and social outcomes across alternative mangrove conservation, restoration, and pond-aquaculture scenarios to identify pathways that balance ecosystem protection with local livelihoods.", summaryZh: "本项目研究海岸带生态修复与可持续发展中的人地耦合机制，比较不同红树林保护修复与围塘养殖发展情景下的生态、经济和社会效益，识别兼顾生态保护与地方生计的协同发展路径和最优模式。" },
    { category: "ecotourism", period: "2025-2027", roleEn: "PI", roleZh: "主持", titleEn: "Ecological-Social Coupling Mechanisms and Optimized Pathways for Mangrove Ecosystems in the Minnan Delta", titleZh: "闽三角红树林生态—社会耦合机制与优化路径构建", funderEn: "President Foundation of Xiamen University", funderZh: "厦门大学校长基金", summaryEn: "This project investigates ecological-social coupling in mangrove ecosystems across the Minnan Delta, integrating ecological characteristics with cultural ecosystem services. It develops an assessment framework to identify coupling mechanisms, synergistic development pathways, and their spatial patterns.", summaryZh: "本项目以闽三角为研究区域，探究红树林生态系统的生态—社会耦合机制，统筹生态特征与文化生态系统服务。研究将构建评估框架，识别不同类型红树林的耦合机制、协同增效路径及其空间分布特征。" }
  ];

  data.news = [
    { dateEn: "August 23–29, 2026", dateZh: "2026年8月23—29日", categoryEn: "Author meeting", categoryZh: "评估作者会议", titleEn: "Jie Su attends the second author meeting of the IPBES spatial planning and connectivity assessment", titleZh: "苏婕参加 IPBES 空间规划与连通性评估第二次作者会议", summaryEn: "From 23 to 29 August 2026, Professor Jie Su attended the second author meeting of the IPBES Spatial Planning and Connectivity Assessment in Monteverde, Costa Rica, in her capacity as a review editor. Participants reviewed more than 5,000 comments from governments and stakeholders on the first-order draft and discussed revisions for the second draft of the assessment.", summaryZh: "2026年8月23—29日，苏婕以评审编辑身份赴哥斯达黎加蒙特韦尔德参加 IPBES 空间规划与连通性评估第二次作者会议。与会专家集中审阅了各国政府和利益相关方针对评估报告一稿提交的5,000余条意见，并就报告二稿的修订方向进行了讨论。", images: ["assets/news-ipbes-author-meeting-1.jpeg", "assets/news-ipbes-author-meeting-2.jpeg", "assets/news-ipbes-author-meeting-3.jpeg"], anchor: "ipbes-author-meeting", galleryClass: "ipbes-gallery", imageAlts: { en: ["Group posing on stone steps outside a wooden building", "Participants discussing around a table with laptops", "Large group standing on a lawn outside a building"], zh: ["木屋外石阶上的集体合影", "围桌使用电脑讨论的参会者", "建筑前草地上的集体合影"] } },
    { dateEn: "August 9–16, 2026", dateZh: "2026年8月9—16日", categoryEn: "Summer School", categoryZh: "暑期学校", titleEn: "Zelong Ma attends the Summer School on Geography and Sustainability 2026", titleZh: "马泽龙参加2026年地理学与可持续性暑期学堂", summaryEn: "From 9 to 16 August 2026, Zelong Ma attended the 2026 Summer School on Geography and Sustainability at Beijing Normal University. The programme focused on frontiers in telecoupling and metacoupling research for global sustainability challenges; as a group leader, he also organised the project Understanding Cross-Regional Flood Impacts through the Telecoupling Framework.", summaryZh: "2026年8月9—16日，马泽龙参加了北京师范大学地理科学学部主办的2026年地理学与可持续性暑期学堂。学堂聚焦远程耦合与全程耦合研究前沿及全球可持续发展挑战；他作为小组组长，组织开展了跨区域洪水影响远程耦合框架项目。", images: ["assets/news-geography-summer-1.jpeg", "assets/news-geography-summer-2.jpeg", "assets/news-geography-summer-5.jpeg", "assets/news-geography-summer-6.jpeg"] },
    { dateEn: "July 27–31, 2026", dateZh: "2026年7月27—31日", categoryEn: "Summer School", categoryZh: "暑期学校", titleEn: "Huilin Lai attends the 2026 International Summer School on Methodology of Computational Social Science", titleZh: "赖慧琳参加2026年计算社会科学方法论国际暑期学校", summaryEn: "From 27 to 31 July 2026, Huilin Lai attended the International Summer School on Methodology of Computational Social Science at Ningxia University. Through lectures, behavioural games, group projects, and discussions, she received systematic training in complex social systems, agent-based modelling, NetLogo, spatial ABM, participatory modelling, machine learning, and CGE models.", summaryZh: "2026年7月27—31日，赖慧琳参加了在宁夏大学举办的计算社会科学方法论国际暑期学校。通过专题讲座、行为实验、小组项目和交流讨论，她系统学习了复杂社会系统、基于主体的建模、NetLogo、空间 ABM、参与式建模、机器学习和 CGE 模型等方法。", images: ["assets/news-computational-summer-1.jpeg", "assets/news-computational-summer-2.jpeg", "assets/news-computational-summer-3.jpeg", "assets/news-computational-summer-4.jpeg"] },
    { dateEn: "July 15, 2026", dateZh: "2026年7月15日", categoryEn: "Academic Lecture", categoryZh: "学术讲座", titleEn: "SESuS Lab hosts an academic lecture on evolving perspectives and reflections in conservation practice", titleZh: "课题组举办保护实践中的认知变化与思考学术讲座", summaryEn: "On 15 July 2026, SESuS Lab hosted an academic lecture by Zhiqin Zhou, Chair of the Haikou Datan Wetland Research Institute. Drawing on wetland conservation and protected-area management experience, the lecture examined restoration goals, ecological monitoring, tourism and harvesting pressures, community livelihoods, benefit-sharing, and adaptive conservation governance.", summaryZh: "2026年7月15日，课题组邀请海口畓榃湿地研究所理事长周志琴开展保护实践中的认知变化与思考学术讲座。讲座结合湿地保护和保护地管理实践，围绕修复目标、生态监测、旅游与赶海压力、社区生计和利益共享等议题展开，并探讨更加适应性、有效和包容的保护治理路径。", images: ["assets/news-conservation-lecture-1.jpeg", "assets/news-conservation-lecture-2.jpeg", "assets/news-conservation-lecture-3.jpeg", "assets/news-conservation-lecture-4.jpeg"] },
    {"dateEn": "July 4–9, 2026", "dateZh": "2026年7月4—9日", "categoryEn": "Summer School", "categoryZh": "暑期学校", "dateLabelEn": "Summer school", "dateLabelZh": "暑期学校日期", "titleEn": "Shouxiang Sun attends the 2026 Future Ocean Summer School", "titleZh": "孙守祥参加2026 Future Ocean 暑期学校", "summaryEn": "Shouxiang Sun, a member of SESuS Lab, visited City University of Hong Kong from July 7 to 9, 2026, to attend the 2026 Future Ocean Summer School, jointly hosted by City University of Hong Kong, Xiamen University, Peking University, Tongji University, and Ocean University of China. As a participant, he presented a poster entitled “Where is the Most Cost-effective Place to Protect? The Cost-Optimal Strategy for Natural Shoreline Conservation in China” and received the Outstanding Honor for the Poster Presentation.", "summaryZh": "课题组成员孙守祥于2026年7月7—9日前往香港城市大学，参加了由香港城市大学、厦门大学、北京大学、同济大学、中国海洋大学五所高校联合主办的2026 Future Ocean 暑期学校。作为受邀学员之一，以“Where is the Most Cost-effective Place to Protect? The Cost-Optimal Strategy for Natural Shoreline Conservation in China”为题进行了海报展示，并获评优秀海报奖。", "images": ["assets/news-future-ocean-1.jpeg", "assets/news-future-ocean-2.jpeg"], "anchor": "future-ocean-summer-school", "galleryClass": "complete-gallery", "imageAlts": {"en": ["Group photograph in a classroom beneath the Future Ocean Summer School screen", "Three people presenting an award and certificate before the summer school screen"], "zh": ["Future Ocean 暑期学校课堂内的集体合影", "暑期学校背景屏幕前的颁奖与证书展示"]}},
    { dateEn: "June 22–July 1, 2026", dateZh: "2026年6月22日—7月1日", categoryEn: "Field Research", categoryZh: "野外调研", titleEn: "SESuS Lab conducts field research on mangrove conservation, restoration, and integrated aquaculture across coastal China", titleZh: "课题组开展中国沿海红树林保护修复与种养耦合野外调研", summaryEn: "From 22 June to 1 July 2026, Professor Jie Su and SESuS Lab members conducted field research in Beihai, Zhanjiang, Fuding, Yueqing, and Zhoushan. The team compared mangrove restoration and integrated aquaculture practices, with attention to restoration approaches, pond-forest configurations, water and species management, coastal livelihoods, community participation, governance, and ecological value realisation.", summaryZh: "2026年6月22日至7月1日，苏婕老师与课题组成员赴北海、湛江、福鼎、乐清和舟山开展野外调研。团队通过实地考察、访谈和座谈交流，比较不同地区的红树林保护修复与种养耦合实践，重点关注修复模式、林塘空间配置、水体与物种管理、沿海生计、社区参与、项目治理和生态价值转化。", images: ["assets/news-coastal-fieldwork-1.jpeg", "assets/news-coastal-fieldwork-2.jpeg", "assets/news-coastal-fieldwork-3.jpeg", "assets/news-coastal-fieldwork-4.jpeg", "assets/news-coastal-fieldwork-5.jpeg", "assets/news-coastal-fieldwork-6.jpeg"] },
    { dateEn: "June 8–17, 2026", dateZh: "2026年6月8—17日", categoryEn: "Workshop", categoryZh: "研修班", titleEn: "Jie Su attends the IMC workshop on mangrove conservation and restoration for the Asia-Pacific region", titleZh: "苏婕参加国际红树林中心亚太地区红树林保护与修复研修班", summaryEn: "From 8 to 17 June 2026, Professor Jie Su attended the Workshop on Mangrove Conservation and Restoration for the Asia-Pacific Region in Shenzhen. The workshop, jointly organised by the International Mangrove Center and the Urban Planning and Natural Resources Bureau of Shenzhen Municipality, brought together 24 representatives from 10 economies for lectures and field activities in Shenzhen and Hainan.", summaryZh: "2026年6月8—17日，苏婕参加了在深圳举办的亚太地区红树林保护与修复研修班。研修班由国际红树林中心和深圳市规划和自然资源局共同组织，来自10个经济体的24位代表参加了在深圳和海南开展的课程学习与野外考察。", images: ["assets/news-imc-1.jpeg", "assets/news-imc-2.jpeg", "assets/news-imc-3.jpeg", "assets/news-imc-4.jpeg"], anchor: "imc-workshop", galleryClass: "complete-gallery", imageAlts: {"en": ["Group photograph inside a building beneath an International Mangrove Center sign", "Two people holding a certificate before a blue screen", "Participants presenting beside a flip chart", "Group posing outdoors beside a metal observation tower"], "zh": ["国际红树林中心标志前的室内集体合影", "蓝色屏幕前两人展示证书", "参会者在纸板旁进行小组汇报", "金属观测塔旁的户外集体合影"]} },
    { dateEn: "June 7, 2026", dateZh: "2026年6月7日", categoryEn: "Field Study", categoryZh: "实地调研", titleEn: "SESuS Lab conducts a preliminary study on community livelihoods and well-being under mangrove conservation in Zhuta Village", titleZh: "课题组赴漳江口红树林国家级自然保护区云霄县竹塔村开展红树林保护下的社区生计与福祉预调研", summaryEn: "On 7 June 2026, Professor Jie Su and SESuS Lab members conducted a preliminary field study in Zhuta Village and its surrounding mangroves, aquaculture ponds, and retired aquaculture areas. The team examined conservation, wetland restoration, community livelihoods, ecotourism potential, and the local applicability and acceptance of mangrove-aquaculture coupling models.", summaryZh: "2026年6月7日，苏婕老师与课题组成员赴云霄县竹塔村及其周边红树林、养殖塘和退养区域开展预调研。团队通过实地踏查和访谈，了解红树林保护、退养还湿、社区生计、生态旅游潜力，以及红树林—养殖耦合模式的本地适用性与接受意愿。", images: ["assets/news-zhuta-1.jpeg", "assets/news-zhuta-2.jpeg", "assets/news-zhuta-3.jpeg"] },
    { dateEn: "May 21–24, 2026", dateZh: "2026年5月21—24日", categoryEn: "Academic Meeting", categoryZh: "学术研讨会", titleEn: "Jie Su attends and presents at the 2026 Academic Symposium of the Mangrove Ecology Committee", titleZh: "苏婕参加中国生态学会红树林生态专业委员会2026年学术研讨会暨中国红树林保护高级研讨会并作学术汇报", summaryEn: "From 21 to 24 May 2026, Professor Jie Su attended and delivered a presentation at the 2026 Academic Symposium of the Mangrove Ecology Committee of the Ecological Society of China and the Advanced Seminar on Mangrove Conservation in China.", summaryZh: "2026年5月21—24日，苏婕参加了由中国生态学会红树林生态专业委员会主办、浙江海洋大学承办的中国生态学会红树林生态专业委员会2026年学术研讨会暨中国红树林保护高级研讨会，并作学术汇报。", images: ["assets/news-symposium-1.jpeg", "assets/news-symposium-2.jpeg"], anchor: "mangrove-ecology-symposium", galleryClass: "complete-gallery", imageAlts: {"en": ["Speaker presenting research slides in a lecture hall", "Group posing on steps outside a building"], "zh": ["报告厅内的研究汇报现场", "建筑门前台阶上的集体合影"]} },
    { dateEn: "May 9–10, 2026", dateZh: "2026年5月9—10日", categoryEn: "Conference", categoryZh: "学术会议", titleEn: "SESuS Lab attends the 2026 Chinese Journal of Environmental Science Youth Academic Conference", titleZh: "课题组参加2026年中国环境科学青年学术会议", summaryEn: "From 9 to 10 May 2026, Professor Jie Su, Huilin Lai, and Shouxiang Sun attended the 2026 Chinese Journal of Environmental Science Youth Academic Conference. Professor Su served as a session convener and presented on spatial optimisation simulation for mangrove restoration; Huilin Lai and Shouxiang Sun also presented research on wetland buffering under typhoon shocks and natural shoreline conservation planning.", summaryZh: "2026年5月9—10日，苏婕老师、赖慧琳和孙守祥参加了2026年中国环境科学青年学术会议。苏婕老师作为分会场召集人之一，作社会—生态耦合视角下的红树林修复空间优化模拟报告；赖慧琳和孙守祥分别汇报了台风冲击下湿地缓冲作用和基于成本—效益分析的中国自然岸线保护规划研究。", images: ["assets/news-ces-youth-conference-group.jpeg", "assets/news-ces-youth-conference-talk-1.jpeg", "assets/news-ces-youth-conference-talk-2.jpeg", "assets/news-ces-youth-conference-talk-3.jpeg"] },
    {"dateEn": "April 10–13, 2026", "dateZh": "2026年4月10—13日", "categoryEn": "Conference", "categoryZh": "学术会议", "titleEn": "SESuS Lab attends the 11th Youth Geoscience Forum 2026", "titleZh": "课题组参加第11届青年地学论坛", "summaryEn": "Professor Jie Su, Huilin Lai, Shouxiang Sun, Zelong Ma, Qingcheng Liu, and Yixin Chen attended the 11th Youth Geoscience Forum 2026, hosted by the Council of the Youth Forum on Geosciences, from April 10 to 13, 2026. Professor Su served as a session convener and chaired sessions on Spatial Planning for Marine and Coastal Areas under Human-Ocean Coupling & Processes and Evolution of Coupled Human-Marine Systems. Shouxiang Sun gave a presentation on natural shoreline conservation planning based on cost-benefit analysis.", "summaryZh": "课题组成员苏婕老师、赖慧琳、孙守祥、马泽龙、刘青成与陈奕欣，于2026年4月10—13日参加了由青年地学论坛理事会主办的第11届青年地学论坛。苏婕老师作为分会场召集人之一，主持了人海耦合的海洋与海岸带空间规划与人海系统耦合过程与演化的专题会议，孙守祥报告了《基于成本-效益分析的中国自然岸线保护规划研究》。", "images": ["assets/news-youth-geoscience-1.jpeg", "assets/news-youth-geoscience-2.jpeg", "assets/news-youth-geoscience-3.jpeg"], "anchor": "youth-geoscience-forum", "galleryClass": "complete-gallery", "imageAlts": {"en": ["Conference participants posing in a meeting room", "Participants posing before the 11th Youth Geoscience Forum backdrop", "Speaker presenting research beside a projection screen"], "zh": ["会议室内的参会者合影", "第11届青年地学论坛背景板前的合影", "投影屏幕旁的研究汇报现场"]}},
    {"dateEn": "November 22, 2025", "dateZh": "2025年11月22日", "categoryEn": "Conference", "categoryZh": "学术会议", "titleEn": "Jie Su attends and presents at the 24th Pacific Science Congress", "titleZh": "苏婕参加第24届太平洋科学大会并作邀请报告", "summaryEn": "Professor Jie Su was invited to attend the 24th Pacific Science Congress (PSC-24) at Shantou University in Shantou, China, and gave an invited presentation. Under the theme “Towards a Sustainable Future”, the multidisciplinary conference brought together roughly 800 researchers from around the world to discuss climate change, biodiversity loss, and ocean health.", "summaryZh": "苏婕受邀参加了在中国汕头大学举行的第24届太平洋科学大会（PSC-24），并作邀请报告。大会以“迈向可持续未来”为主题，汇聚约800名来自全球各地的研究人员，共同探讨气候变化、生物多样性丧失及海洋健康等关键区域性挑战。", "images": ["assets/news-pacific-science-congress-1.jpeg", "assets/news-pacific-science-congress-2.jpeg"], "anchor": "pacific-science-congress", "galleryClass": "complete-gallery", "imageAlts": {"en": ["Conference participants posing before the 24th Pacific Science Congress screen", "Speaker presenting mangrove restoration research to an audience"], "zh": ["第24届太平洋科学大会背景屏幕前的参会者合影", "会议现场的红树林修复研究汇报"]}},
    {"dateEn": "November 5, 2025", "dateZh": "2025年11月5日", "categoryEn": "Workshop", "categoryZh": "研讨会", "titleEn": "SESuS Lab hosts the Xiangshan Workshop on Coastal Social-Ecological Systems Sustainability", "titleZh": "课题组主办海岸带社会—生态系统可持续性香山论坛", "summaryEn": "On 5 November 2025, SESuS Lab hosted the Xiangshan Workshop on “Coastal Social-Ecological Systems Sustainability: Change, Impacts and Responses” at Xiamen University. Led by Professor Jie Su, the workshop programme featured contributions from researchers at Xiamen University, the University of Tokyo and the Swedish University of Agricultural Sciences. Topics included coastal resilience, ecosystem services, water quality management, mangrove restoration, sustainable aquaculture, and public preferences for ecosystem-based coastal adaptation.", "summaryZh": "2025年11月5日，课题组在厦门大学主办了“海岸带社会—生态系统可持续性：变化、影响与响应”香山论坛。论坛由苏婕教授主持，议程涵盖厦门大学、东京大学及瑞典农业科学大学研究人员的学术报告，主题包括海岸带韧性、生态系统服务、水质管理、红树林修复、可持续水产养殖，以及公众对基于生态系统的海岸带适应措施的偏好。", "images": ["assets/news-xiangshan-workshop-1.jpeg", "assets/news-xiangshan-workshop-2.jpeg"], "anchor": "xiangshan-workshop", "galleryClass": "complete-gallery", "imageAlts": {"en": ["Workshop participants posing in a meeting room before the Xiangshan Workshop screens", "Group posing outdoors beside a stone pagoda and statue"], "zh": ["香山论坛背景屏幕前的会议室集体合影", "石塔与雕像旁的户外集体合影"]}},
    {"dateEn": "October 11–18, 2025", "dateZh": "2025年10月11—18日", "categoryEn": "Conference", "categoryZh": "学术会议", "titleEn": "Jie Su attends the Adaptation Futures Conference 2025", "titleZh": "苏婕参加2025年 Adaptation Futures 大会", "summaryEn": "From 11 to 18 October 2025, Professor Jie Su attended the Adaptation Futures Conference 2025 (AF2025), the eighth international edition of the climate change adaptation conference series and a flagship event of the United Nations World Adaptation Science Programme (WASP). She participated in the session “Food, Water and Biodiversity Nexus – Insights from Fisheries, Aquaculture and Deltas” and presented “Differentiated Climatic Impacts, Diverse Adaptation Pathways and Multiple Adaptation Barriers for Global Inland Aquaculture”.", "summaryZh": "2025年10月11—18日，苏婕教授参加了2025年 Adaptation Futures 大会（AF2025）。这是该国际气候变化适应大会系列的第八届会议，也是联合国世界适应科学计划（WASP）的旗舰活动。她参加了“食物、水与生物多样性关联：来自渔业、水产养殖与三角洲的启示”专题会议，并作题为“全球内陆水产养殖的差异化气候影响、多样化适应路径与多重适应障碍”的报告。", "images": ["assets/news-adaptation-futures-1.jpeg", "assets/news-adaptation-futures-2.jpeg"], "anchor": "adaptation-futures-2025", "galleryClass": "complete-gallery", "imageAlts": {"en": ["Panel discussion before an Adaptation Futures 2025 screen with an audience", "Speaker presenting research charts from a lectern beside a projection screen"], "zh": ["Adaptation Futures 2025 背景屏幕前的专题讨论与听众", "讲台旁展示研究图表的学术报告现场"]}},
    {"categoryEn": "Author meeting", "categoryZh": "评估作者会议", "titleEn": "Jie Su attends the first author meeting of the IPBES spatial planning and connectivity assessment", "titleZh": "苏婕参加 IPBES 空间规划与连通性评估第一次作者会议", "summaryEn": "From 22 to 26 September 2025, Professor Jie Su attended the first author meeting of the IPBES Spatial Planning and Connectivity Assessment in Laxenburg, Austria, in her capacity as a review editor. The meeting brought together experts from around the world to launch work on assessing knowledge and methods for integrated spatial planning and ecological connectivity in support of the Kunming–Montreal Global Biodiversity Framework.", "summaryZh": "2025年9月22—26日，苏婕以评审编辑身份赴奥地利拉克森堡参加 IPBES 空间规划与连通性评估第一次作者会议。会议汇聚来自全球各地的专家，启动对综合空间规划与生态连通性相关知识和方法的评估工作，为《昆明—蒙特利尔全球生物多样性框架》的实施提供支持。", "images": ["assets/news-ipbes-first-author-meeting-1.jpeg", "assets/news-ipbes-first-author-meeting-2.jpeg", "assets/news-ipbes-first-author-meeting-3.jpeg", "assets/news-ipbes-first-author-meeting-4.jpeg"], "anchor": "ipbes-first-author-meeting", "galleryClass": "complete-gallery", "imageAlts": {"en": ["Meeting participants posing along an indoor staircase and balcony", "Meeting participants posing together in a conference room", "Projection screen announcing the first IPBES spatial planning author meeting", "IPBES banner beside a row of flags inside a building"], "zh": ["室内楼梯与阳台上的参会者合影", "会议室内的参会者合影", "IPBES 空间规划评估第一次作者会议的背景投影", "建筑内一排旗帜旁的 IPBES 展示牌"]}, "dateEn": "September 22–26, 2025", "dateZh": "2025年9月22—26日"}
  ];

  data.publications = [
    {
      year: 2026,
      type: "paper",
      text: "Su, J.*, Tigchelaar, M., Belton, B., Wang, Q., Rossignoli, C. M., Allison, E. H., Troell, M., Gasparatos, A.*. (2026). A systematic review of the climatic impacts, diverse adaptation pathways and multiple adaptation barriers for inland aquaculture. Nature Food, 7, 917–929."
    },
    {
      year: 2026,
      type: "paper",
      text: "Dompreh, E.B., Wang, Q., Su, J., Dam Lam, R., Barman, B.K., Rossignoli, C., Gasparatos, A. (2026). Differentiated characteristics, sustainability performance and preferences among small-scale aquaculture producers: implications for sustainable intensification. Sustainability Science, 21, 325-346."
    },
    ...data.publications.filter((publication) => !publication.text.includes("Differentiated characteristics, sustainability performance"))
  ];

  const publicationLinks = {
    "Perceptions about mangrove restoration and ecosystem services to inform ecosystem-based restoration in Large Xiamen Bay, China": "https://doi.org/10.1016/j.landurbplan.2023.104763",
    "Systematizing ecosystem change in coastal social-ecological systems: Perspectives from a multi-stakeholder approach in Nakatsu mudflat, Japan": "https://doi.org/10.1016/j.ocecoaman.2023.106729",
    "Sustainable intensification of small-scale aquaculture production in Myanmar through diversification and better management practices": "https://doi.org/10.1088/1748-9326/acab16",
    "Developing biodiversity-based solutions for sustainable food systems through transdisciplinary Sustainable Development Goals Labs (SDG-Labs)": "https://doi.org/10.3389/fsufs.2023.1144506",
    "Linking the nonmaterial dimensions of human-nature relations and human well-being through cultural ecosystem services": "https://doi.org/10.1126/sciadv.abn8042",
    "Evaluating the trade-offs between alternative coastal policies": "https://doi.org/10.1016/j.ocecoaman.2018.05.012",
    "Mangrove forests: their status": "https://doi.org/10.1016/B978-0-323-90798-9.00031-7",
    "Diversification strategies have a stabilizing effect for income and food availability during livelihood shocks: Evidence from small-scale aquaculture-agriculture systems in Myanmar during the COVID-19 pandemic": "https://doi.org/10.1016/j.agsy.2024.103935",
    "Priority areas for mixed-species mangrove restoration: the suitable species in the right sites": "https://doi.org/10.1088/1748-9326/ac6b48",
    "A systematic review of the climatic impacts": "https://doi.org/10.1038/s43016-026-01410-4",
    "Dataset of production characteristics": "https://doi.org/10.3389/fsufs.2025.1646381",
    "Pathways to sustainability or collapse in inland small-scale aquaculture systems: insights from a social–ecological systems model": "https://doi.org/10.1016/j.ecolmodel.2025.111416",
    "Applying the social-ecological systems (SES) framework for sustainable mangrove management: A case study of Quanzhou Bay, China": "https://doi.org/10.1016/j.ocecoaman.2025.107860",
    "Differentiated trajectories of ecosystem-based adaptation for urban coastal defence in the Asian-Pacific region: A biodiversity–climate–society nexus perspective": "https://doi.org/10.1016/j.ocecoaman.2025.107799",
    "Differentiated characteristics, sustainability performance": "https://doi.org/10.1007/s11625-025-01703-w",
    "Meta-analysis indicates better climate adaptation and mitigation performance of hybrid engineering-natural coastal defence measures": "https://doi.org/10.1038/s41467-024-46970-w",
    "Assessing the heterogeneity of public acceptability for mangrove restoration through a choice experiment": "https://doi.org/10.1016/j.ecolecon.2024.108126",
    "Mixed diets can meet nutrient requirements": "https://doi.org/10.1126/sciadv.adh1077",
    "A meta-analysis of the ecological and economic": "https://doi.org/10.1038/s41467-021-25349-1"
  };
  data.publications = data.publications.map((publication) => ({ ...publication, url: Object.entries(publicationLinks).find(([title]) => publication.text.includes(title))?.[1] || "" }));
})();
