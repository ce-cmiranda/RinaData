const coreValues = [
    // Personal Growth and Development
    {
      key: "self-improvement",
      icon: "chart-line", // Represents continuous improvement
      group: "Personal Growth and Development",
      translations: {
        en: {
          title: "Self-Improvement",
          description: "The drive to consistently better oneself in skills, habits, and character.",
        },
        es: {
          title: "Mejora Personal",
          description: "El impulso de mejorar continuamente habilidades, hábitos y carácter.",
        },
        "pt-br": {
          title: "Autodesenvolvimento",
          description: "O desejo de melhorar continuamente habilidades, hábitos e caráter.",
        },
      },
    },
    {
      key: "curiosity",
      icon: "question-circle", // Represents a quest for knowledge
      group: "Personal Growth and Development",
      translations: {
        en: {
          title: "Curiosity",
          description: "A deep desire to explore, understand, and seek out new experiences and knowledge.",
        },
        es: {
          title: "Curiosidad",
          description: "Un deseo profundo de explorar, entender y buscar nuevas experiencias y conocimientos.",
        },
        "pt-br": {
          title: "Curiosidade",
          description: "Um desejo profundo de explorar, entender e buscar novas experiências e conhecimentos.",
        },
      },
    },
    {
      key: "learning",
      icon: "book", // Represents the acquisition of knowledge
      group: "Personal Growth and Development",
      translations: {
        en: {
          title: "Learning",
          description: "The commitment to acquiring new knowledge, skills, and insights for personal growth.",
        },
        es: {
          title: "Aprendizaje",
          description: "El compromiso de adquirir nuevos conocimientos, habilidades e ideas para el crecimiento personal.",
        },
        "pt-br": {
          title: "Aprendizado",
          description: "O compromisso de adquirir novos conhecimentos, habilidades e ideias para o crescimento pessoal.",
        },
      },
    },
    {
      key: "wisdom",
      icon: "lightbulb", // Represents insight and sound judgment
      group: "Personal Growth and Development",
      translations: {
        en: {
          title: "Wisdom",
          description: "The ability to apply knowledge and experience with sound judgment and insight.",
        },
        es: {
          title: "Sabiduría",
          description: "La capacidad de aplicar conocimientos y experiencia con juicio e intuición.",
        },
        "pt-br": {
          title: "Sabedoria",
          description: "A habilidade de aplicar conhecimentos e experiências com bom senso e percepção.",
        },
      },
    },
    {
      key: "discipline",
      icon: "check-circle", // Represents self-control and consistency
      group: "Personal Growth and Development",
      translations: {
        en: {
          title: "Discipline",
          description: "The practice of self-control and consistency in pursuing goals and values.",
        },
        es: {
          title: "Disciplina",
          description: "La práctica del autocontrol y la consistencia en la búsqueda de metas y valores.",
        },
        "pt-br": {
          title: "Disciplina",
          description: "A prática do autocontrole e da consistência na busca de objetivos e valores.",
        },
      },
    },
      // Relationships and Community
  {
    key: "love",
    icon: "heart",
    group: "Relationships and Community",
    translations: {
      en: {
        title: "Love",
        description: "A deep affection and care for others, fostering connection and understanding.",
      },
      es: {
        title: "Amor",
        description: "Un afecto profundo y cuidado por los demás, fomentando conexión y comprensión.",
      },
      "pt-br": {
        title: "Amor",
        description: "Um afeto profundo e cuidado pelos outros, promovendo conexão e entendimento.",
      },
    },
  },
  {
    key: "compassion",
    icon: "hands-helping",
    group: "Relationships and Community",
    translations: {
      en: {
        title: "Compassion",
        description: "A desire to alleviate others' suffering and show kindness.",
      },
      es: {
        title: "Compasión",
        description: "Un deseo de aliviar el sufrimiento de otros y mostrar bondad.",
      },
      "pt-br": {
        title: "Compaixão",
        description: "O desejo de aliviar o sofrimento dos outros e demonstrar bondade.",
      },
    },
  },
  {
    key: "trust",
    icon: "handshake",
    group: "Relationships and Community",
    translations: {
      en: {
        title: "Trust",
        description: "Reliance on the integrity and reliability of others.",
      },
      es: {
        title: "Confianza",
        description: "Confianza en la integridad y fiabilidad de los demás.",
      },
      "pt-br": {
        title: "Confiança",
        description: "Confiança na integridade e confiabilidade dos outros.",
      },
    },
  },
  {
    key: "empathy",
    icon: "users",
    group: "Relationships and Community",
    translations: {
      en: {
        title: "Empathy",
        description: "The ability to understand and share the feelings of others.",
      },
      es: {
        title: "Empatía",
        description: "La capacidad de comprender y compartir los sentimientos de los demás.",
      },
      "pt-br": {
        title: "Empatia",
        description: "A capacidade de entender e compartilhar os sentimentos dos outros.",
      },
    },
  },
  {
    key: "loyalty",
    icon: "thumbs-up",
    group: "Relationships and Community",
    translations: {
      en: {
        title: "Loyalty",
        description: "A steadfast commitment to people or principles.",
      },
      es: {
        title: "Lealtad",
        description: "Un compromiso firme con las personas o los principios.",
      },
      "pt-br": {
        title: "Lealdade",
        description: "Um compromisso firme com pessoas ou princípios.",
      },
    },
  },
  // Work and Achievement
  {
    key: "integrity",
    icon: "balance-scale",
    group: "Work and Achievement",
    translations: {
      en: {
        title: "Integrity",
        description: "Adhering to strong moral principles and honesty.",
      },
      es: {
        title: "Integridad",
        description: "Adherirse a principios morales fuertes y honestidad.",
      },
      "pt-br": {
        title: "Integridade",
        description: "Aderir a princípios morais fortes e honestidade.",
      },
    },
  },
  {
    key: "excellence",
    icon: "trophy",
    group: "Work and Achievement",
    translations: {
      en: {
        title: "Excellence",
        description: "Striving for the highest standards in work and performance.",
      },
      es: {
        title: "Excelencia",
        description: "Esforzarse por alcanzar los estándares más altos en el trabajo y el desempeño.",
      },
      "pt-br": {
        title: "Excelência",
        description: "Buscar os mais altos padrões no trabalho e desempenho.",
      },
    },
  },
  {
    key: "accountability",
    icon: "clipboard-check",
    group: "Work and Achievement",
    translations: {
      en: {
        title: "Accountability",
        description: "Accepting responsibility for actions and decisions.",
      },
      es: {
        title: "Responsabilidad",
        description: "Aceptar la responsabilidad por las acciones y decisiones.",
      },
      "pt-br": {
        title: "Responsabilidade",
        description: "Aceitar responsabilidade pelas ações e decisões.",
      },
    },
  },
  {
    key: "dedication",
    icon: "flag",
    group: "Work and Achievement",
    translations: {
      en: {
        title: "Dedication",
        description: "Committed effort and focus toward goals and tasks.",
      },
      es: {
        title: "Dedicación",
        description: "Esfuerzo y enfoque comprometidos hacia metas y tareas.",
      },
      "pt-br": {
        title: "Dedicação",
        description: "Esforço e foco comprometidos para objetivos e tarefas.",
      },
    },
  },
  {
    key: "leadership",
    icon: "star",
    group: "Work and Achievement",
    translations: {
      en: {
        title: "Leadership",
        description: "Inspiring and guiding others toward shared goals.",
      },
      es: {
        title: "Liderazgo",
        description: "Inspirar y guiar a otros hacia objetivos comunes.",
      },
      "pt-br": {
        title: "Liderança",
        description: "Inspirar e guiar outros em direção a objetivos comuns.",
      },
    },
  },
  // Spiritual and Emotional Values
  {
    key: "gratitude",
    icon: "hands-clapping",
    group: "Spiritual and Emotional Values",
    translations: {
      en: {
        title: "Gratitude",
        description: "Appreciation for the kindness and blessings in life.",
      },
      es: {
        title: "Gratitud",
        description: "Apreciación por la bondad y las bendiciones en la vida.",
      },
      "pt-br": {
        title: "Gratidão",
        description: "Apreciação pela bondade e as bênçãos na vida.",
      },
    },
  },
  {
    key: "hope",
    icon: "sun",
    group: "Spiritual and Emotional Values",
    translations: {
      en: {
        title: "Hope",
        description: "Believing in the possibility of positive outcomes.",
      },
      es: {
        title: "Esperanza",
        description: "Creer en la posibilidad de resultados positivos.",
      },
      "pt-br": {
        title: "Esperança",
        description: "Acreditar na possibilidade de resultados positivos.",
      },
    },
  },
  {
    key: "joy",
    icon: "smile-beam",
    group: "Spiritual and Emotional Values",
    translations: {
      en: {
        title: "Joy",
        description: "Experiencing deep happiness and contentment.",
      },
      es: {
        title: "Alegría",
        description: "Experimentar profunda felicidad y satisfacción.",
      },
      "pt-br": {
        title: "Alegria",
        description: "Experimentar profunda felicidade e contentamento.",
      },
    },
  },
  {
    key: "authenticity",
    icon: "user-check",
    group: "Spiritual and Emotional Values",
    translations: {
      en: {
        title: "Authenticity",
        description: "Living true to one's values and genuine self.",
      },
      es: {
        title: "Autenticidad",
        description: "Vivir fiel a los valores propios y al ser genuino.",
      },
      "pt-br": {
        title: "Autenticidade",
        description: "Viver fiel aos próprios valores e ao ser genuíno.",
      },
    },
  },
  {
    key: "purpose",
    icon: "bullseye",
    group: "Spiritual and Emotional Values",
    translations: {
      en: {
        title: "Purpose",
        description: "A sense of meaning and direction in life.",
      },
      es: {
        title: "Propósito",
        description: "Un sentido de significado y dirección en la vida.",
      },
      "pt-br": {
        title: "Propósito",
        description: "Um senso de significado e direção na vida.",
      },
    },
  },
    // Social and Civic Responsibility
    {
        key: "justice",
        icon: "balance-scale",
        group: "Social and Civic Responsibility",
        translations: {
          en: {
            title: "Justice",
            description: "The commitment to fairness, equity, and the protection of rights.",
          },
          es: {
            title: "Justicia",
            description: "El compromiso con la equidad y la protección de los derechos.",
          },
          "pt-br": {
            title: "Justiça",
            description: "O compromisso com a equidade e a proteção dos direitos.",
          },
        },
      },
      {
        key: "equality",
        icon: "equals",
        group: "Social and Civic Responsibility",
        translations: {
          en: {
            title: "Equality",
            description: "Ensuring equal treatment and opportunity for all.",
          },
          es: {
            title: "Igualdad",
            description: "Garantizar el trato y las oportunidades equitativas para todos.",
          },
          "pt-br": {
            title: "Igualdade",
            description: "Garantir tratamento e oportunidades iguais para todos.",
          },
        },
      },
      {
        key: "freedom",
        icon: "flag",
        group: "Social and Civic Responsibility",
        translations: {
          en: {
            title: "Freedom",
            description: "The right to live, act, and think without undue restraint.",
          },
          es: {
            title: "Libertad",
            description: "El derecho a vivir, actuar y pensar sin restricciones indebidas.",
          },
          "pt-br": {
            title: "Liberdade",
            description: "O direito de viver, agir e pensar sem restrições indevidas.",
          },
        },
      },
      {
        key: "sustainability",
        icon: "leaf",
        group: "Social and Civic Responsibility",
        translations: {
          en: {
            title: "Sustainability",
            description: "Protecting the environment and promoting long-term ecological balance.",
          },
          es: {
            title: "Sostenibilidad",
            description: "Proteger el medio ambiente y promover el equilibrio ecológico a largo plazo.",
          },
          "pt-br": {
            title: "Sustentabilidade",
            description: "Proteger o meio ambiente e promover o equilíbrio ecológico a longo prazo.",
          },
        },
      },
      {
        key: "advocacy",
        icon: "bullhorn",
        group: "Social and Civic Responsibility",
        translations: {
          en: {
            title: "Advocacy",
            description: "Championing causes and supporting the rights of others.",
          },
          es: {
            title: "Defensa",
            description: "Abogar por causas y apoyar los derechos de otros.",
          },
          "pt-br": {
            title: "Defesa",
            description: "Defender causas e apoiar os direitos dos outros.",
          },
        },
      },
      // Health and Well-Being
      {
        key: "balance",
        icon: "yin-yang",
        group: "Health and Well-Being",
        translations: {
          en: {
            title: "Balance",
            description: "Maintaining harmony between different aspects of life.",
          },
          es: {
            title: "Equilibrio",
            description: "Mantener la armonía entre los diferentes aspectos de la vida.",
          },
          "pt-br": {
            title: "Equilíbrio",
            description: "Manter harmonia entre diferentes aspectos da vida.",
          },
        },
      },
      {
        key: "safety",
        icon: "shield-alt",
        group: "Health and Well-Being",
        translations: {
          en: {
            title: "Safety",
            description: "Ensuring physical and emotional security and protection.",
          },
          es: {
            title: "Seguridad",
            description: "Garantizar la seguridad física y emocional.",
          },
          "pt-br": {
            title: "Segurança",
            description: "Garantir segurança física e emocional.",
          },
        },
      },
      {
        key: "wellness",
        icon: "heartbeat",
        group: "Health and Well-Being",
        translations: {
          en: {
            title: "Wellness",
            description: "Promoting overall physical, mental, and emotional health.",
          },
          es: {
            title: "Bienestar",
            description: "Promover la salud física, mental y emocional en general.",
          },
          "pt-br": {
            title: "Bem-estar",
            description: "Promover a saúde física, mental e emocional em geral.",
          },
        },
      },
      {
        key: "energy",
        icon: "bolt",
        group: "Health and Well-Being",
        translations: {
          en: {
            title: "Energy",
            description: "Cultivating vitality and motivation for an active lifestyle.",
          },
          es: {
            title: "Energía",
            description: "Cultivar vitalidad y motivación para un estilo de vida activo.",
          },
          "pt-br": {
            title: "Energia",
            description: "Cultivar vitalidade e motivação para um estilo de vida ativo.",
          },
        },
      },
      {
        key: "moderation",
        icon: "scale-balanced",
        group: "Health and Well-Being",
        translations: {
          en: {
            title: "Moderation",
            description: "Practicing self-restraint and avoiding extremes.",
          },
          es: {
            title: "Moderación",
            description: "Practicar el autocontrol y evitar los extremos.",
          },
          "pt-br": {
            title: "Moderação",
            description: "Praticar autocontrole e evitar extremos.",
          },
        },
      },
      // Adventure and Exploration
      {
        key: "courage",
        icon: "lion",
        group: "Adventure and Exploration",
        translations: {
          en: {
            title: "Courage",
            description: "Facing challenges and fears with bravery and resilience.",
          },
          es: {
            title: "Coraje",
            description: "Enfrentar desafíos y miedos con valentía y resiliencia.",
          },
          "pt-br": {
            title: "Coragem",
            description: "Enfrentar desafios e medos com coragem e resiliência.",
          },
        },
      },
      {
        key: "risk-taking",
        icon: "dice",
        group: "Adventure and Exploration",
        translations: {
          en: {
            title: "Risk-Taking",
            description: "Stepping outside comfort zones to pursue new opportunities.",
          },
          es: {
            title: "Tomar Riesgos",
            description: "Salir de la zona de confort para buscar nuevas oportunidades.",
          },
          "pt-br": {
            title: "Assumir Riscos",
            description: "Sair da zona de conforto para buscar novas oportunidades.",
          },
        },
      },
      {
        key: "discovery",
        icon: "compass",
        group: "Adventure and Exploration",
        translations: {
          en: {
            title: "Discovery",
            description: "Exploring the unknown and embracing curiosity.",
          },
          es: {
            title: "Descubrimiento",
            description: "Explorar lo desconocido y abrazar la curiosidad.",
          },
          "pt-br": {
            title: "Descoberta",
            description: "Explorar o desconhecido e abraçar a curiosidade.",
          },
        },
      },
      {
        key: "openness",
        icon: "door-open",
        group: "Adventure and Exploration",
        translations: {
          en: {
            title: "Openness",
            description: "Being receptive to new ideas, experiences, and perspectives.",
          },
          es: {
            title: "Apertura",
            description: "Ser receptivo a nuevas ideas, experiencias y perspectivas.",
          },
          "pt-br": {
            title: "Abertura",
            description: "Estar receptivo a novas ideias, experiências e perspectivas.",
          },
        },
      },
      {
        key: "flexibility",
        icon: "arrows-alt",
        group: "Adventure and Exploration",
        translations: {
          en: {
            title: "Flexibility",
            description: "Adapting to change and embracing the unexpected.",
          },
          es: {
            title: "Flexibilidad",
            description: "Adaptarse al cambio y aceptar lo inesperado.",
          },
          "pt-br": {
            title: "Flexibilidade",
            description: "Adaptar-se às mudanças e aceitar o inesperado.",
          },
        },
      },
        // Creativity and Expression
  {
    key: "imagination",
    icon: "lightbulb",
    group: "Creativity and Expression",
    translations: {
      en: {
        title: "Imagination",
        description: "The ability to think creatively and envision possibilities beyond the present.",
      },
      es: {
        title: "Imaginación",
        description: "La capacidad de pensar creativamente y visualizar posibilidades más allá del presente.",
      },
      "pt-br": {
        title: "Imaginação",
        description: "A habilidade de pensar criativamente e visualizar possibilidades além do presente.",
      },
    },
  },
  {
    key: "vision",
    icon: "eye",
    group: "Creativity and Expression",
    translations: {
      en: {
        title: "Vision",
        description: "The ability to see a clear and compelling future direction.",
      },
      es: {
        title: "Visión",
        description: "La capacidad de ver una dirección futura clara y convincente.",
      },
      "pt-br": {
        title: "Visão",
        description: "A habilidade de enxergar uma direção futura clara e convincente.",
      },
    },
  },
  {
    key: "originality",
    icon: "palette",
    group: "Creativity and Expression",
    translations: {
      en: {
        title: "Originality",
        description: "Creating unique and innovative ideas or expressions.",
      },
      es: {
        title: "Originalidad",
        description: "Crear ideas o expresiones únicas e innovadoras.",
      },
      "pt-br": {
        title: "Originalidade",
        description: "Criar ideias ou expressões únicas e inovadoras.",
      },
    },
  },
  {
    key: "humor",
    icon: "grin",
    group: "Creativity and Expression",
    translations: {
      en: {
        title: "Humor",
        description: "The ability to find and express amusement, bringing joy to oneself and others.",
      },
      es: {
        title: "Humor",
        description: "La capacidad de encontrar y expresar diversión, trayendo alegría a uno mismo y a los demás.",
      },
      "pt-br": {
        title: "Humor",
        description: "A capacidade de encontrar e expressar diversão, trazendo alegria a si e aos outros.",
      },
    },
  },
  {
    key: "expression",
    icon: "comment-dots",
    group: "Creativity and Expression",
    translations: {
      en: {
        title: "Expression",
        description: "The ability to share thoughts, emotions, and ideas openly and authentically.",
      },
      es: {
        title: "Expresión",
        description: "La capacidad de compartir pensamientos, emociones e ideas de manera abierta y auténtica.",
      },
      "pt-br": {
        title: "Expressão",
        description: "A capacidade de compartilhar pensamentos, emoções e ideias de maneira aberta e autêntica.",
      },
    },
  },
  // Moral and Ethical Values
  {
    key: "honesty",
    icon: "key",
    group: "Moral and Ethical Values",
    translations: {
      en: {
        title: "Honesty",
        description: "Upholding truthfulness and sincerity in actions and words.",
      },
      es: {
        title: "Honestidad",
        description: "Mantener la veracidad y sinceridad en acciones y palabras.",
      },
      "pt-br": {
        title: "Honestidade",
        description: "Manter a veracidade e a sinceridade nas ações e palavras.",
      },
    },
  },
  {
    key: "fairness",
    icon: "scale-balanced",
    group: "Moral and Ethical Values",
    translations: {
      en: {
        title: "Fairness",
        description: "Ensuring impartiality and justice in decisions and treatment of others.",
      },
      es: {
        title: "Equidad",
        description: "Garantizar la imparcialidad y la justicia en decisiones y el trato hacia los demás.",
      },
      "pt-br": {
        title: "Justiça",
        description: "Garantir a imparcialidade e a justiça nas decisões e no tratamento com os outros.",
      },
    },
  },
  {
    key: "responsibility",
    icon: "tasks",
    group: "Moral and Ethical Values",
    translations: {
      en: {
        title: "Responsibility",
        description: "Being accountable for actions and their consequences.",
      },
      es: {
        title: "Responsabilidad",
        description: "Ser responsable de las acciones y sus consecuencias.",
      },
      "pt-br": {
        title: "Responsabilidade",
        description: "Ser responsável pelas ações e suas consequências.",
      },
    },
  },
  {
    key: "kindness",
    icon: "hands-helping",
    group: "Moral and Ethical Values",
    translations: {
      en: {
        title: "Kindness",
        description: "Demonstrating compassion and goodwill toward others.",
      },
      es: {
        title: "Amabilidad",
        description: "Demostrar compasión y buena voluntad hacia los demás.",
      },
      "pt-br": {
        title: "Gentileza",
        description: "Demonstrar compaixão e boa vontade para com os outros.",
      },
    },
  },
  {
    key: "tolerance",
    icon: "handshake",
    group: "Moral and Ethical Values",
    translations: {
      en: {
        title: "Tolerance",
        description: "Respecting and accepting differing views, beliefs, and practices.",
      },
      es: {
        title: "Tolerancia",
        description: "Respetar y aceptar diferentes puntos de vista, creencias y prácticas.",
      },
      "pt-br": {
        title: "Tolerância",
        description: "Respeitar e aceitar pontos de vista, crenças e práticas diferentes.",
      },
    },
  },
  // Cultural and Identity Values
  {
    key: "diversity",
    icon: "globe",
    group: "Cultural and Identity Values",
    translations: {
      en: {
        title: "Diversity",
        description: "Embracing differences in culture, identity, and perspective.",
      },
      es: {
        title: "Diversidad",
        description: "Abrazar diferencias en cultura, identidad y perspectiva.",
      },
      "pt-br": {
        title: "Diversidade",
        description: "Abraçar diferenças de cultura, identidade e perspectiva.",
      },
    },
  },
  {
    key: "tradition",
    icon: "scroll",
    group: "Cultural and Identity Values",
    translations: {
      en: {
        title: "Tradition",
        description: "Honoring cultural practices and values passed through generations.",
      },
      es: {
        title: "Tradición",
        description: "Honrar prácticas y valores culturales transmitidos a través de generaciones.",
      },
      "pt-br": {
        title: "Tradição",
        description: "Honrar práticas e valores culturais transmitidos ao longo das gerações.",
      },
    },
  },
  {
    key: "family",
    icon: "home",
    group: "Cultural and Identity Values",
    translations: {
      en: {
        title: "Family",
        description: "Placing importance on relationships and bonds within the family unit.",
      },
      es: {
        title: "Familia",
        description: "Dar importancia a las relaciones y vínculos dentro de la unidad familiar.",
      },
      "pt-br": {
        title: "Família",
        description: "Dar importância aos relacionamentos e laços dentro da unidade familiar.",
      },
    },
  },
  {
    key: "heritage",
    icon: "landmark",
    group: "Cultural and Identity Values",
    translations: {
      en: {
        title: "Heritage",
        description: "Appreciating and preserving cultural history and legacies.",
      },
      es: {
        title: "Herencia",
        description: "Apreciar y preservar la historia y los legados culturales.",
      },
      "pt-br": {
        title: "Herança",
        description: "Apreciar e preservar a história e os legados culturais.",
      },
    },
  },
  {
    key: "inclusion",
    icon: "users",
    group: "Cultural and Identity Values",
    translations: {
      en: {
        title: "Inclusion",
        description: "Promoting equal opportunities and representation for all.",
      },
      es: {
        title: "Inclusión",
        description: "Promover oportunidades iguales y representación para todos.",
      },
      "pt-br": {
        title: "Inclusão",
        description: "Promover oportunidades iguais e representação para todos.",
      },
    },
  },
  ];
  
  export default coreValues;
  