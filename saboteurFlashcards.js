const saboteurFlashcards = [
  // Self-Sabotaging Saboteurs
  {
    key: "the-judge",
    icon: "gavel", // Represents judgment and criticism
    group: "Self-Sabotaging Saboteurs",
    translations: {
      en: {
        title: "The Judge",
        description: "An internal self-critical voice that harshly evaluates one's actions and worth.",
      },
      es: {
        title: "El Juez",
        description: "Una voz interna autocrítica que evalúa duramente las acciones y el valor propio.",
      },
      "pt-br": {
        title: "O Juiz",
        description: "Uma voz interna autocrítica que avalia duramente as ações e o valor próprio.",
      },
    },
  },
  {
    key: "the-victim",
    icon: "sad-tear", // Symbolizes sadness or feeling overwhelmed
    group: "Self-Sabotaging Saboteurs",
    translations: {
      en: {
        title: "The Victim",
        description: "Feels overwhelmed by suffering and focuses on personal pain.",
      },
      es: {
        title: "La Víctima",
        description: "Se siente abrumada por el sufrimiento y se centra en el dolor personal.",
      },
      "pt-br": {
        title: "A Vítima",
        description: "Sente-se sobrecarregada pelo sofrimento e foca na dor pessoal.",
      },
    },
  },
  {
    key: "the-perfectionist",
    icon: "check-circle", // Reflects obsession with flawlessness
    group: "Self-Sabotaging Saboteurs",
    translations: {
      en: {
        title: "The Perfectionist",
        description: "Fixates on flawlessness and becomes overly critical of imperfections.",
      },
      es: {
        title: "El Perfeccionista",
        description: "Se obsesiona con la perfección y es demasiado crítico con las imperfecciones.",
      },
      "pt-br": {
        title: "O Perfeccionista",
        description: "Fixa-se na perfeição e torna-se excessivamente crítico com as imperfeições.",
      },
    },
  },
  {
    key: "the-overthinker",
    icon: "brain", // Represents analysis and overthinking
    group: "Self-Sabotaging Saboteurs",
    translations: {
      en: {
        title: "The Overthinker",
        description: "Paralyzed by analysis and indecision, delaying actions unnecessarily.",
      },
      es: {
        title: "El Sobrepensador",
        description: "Paralizado por el análisis y la indecisión, retrasando acciones innecesariamente.",
      },
      "pt-br": {
        title: "O Pensador Excessivo",
        description: "Paralisado pela análise e indecisão, adiando ações desnecessariamente.",
      },
    },
  },
  {
    key: "the-impostor",
    icon: "mask", // Symbolizes hiding true identity or fear of exposure
    group: "Self-Sabotaging Saboteurs",
    translations: {
      en: {
        title: "The Impostor",
        description: "Lives in fear of being exposed as a fraud, despite achievements.",
      },
      es: {
        title: "El Impostor",
        description: "Vive con miedo de ser expuesto como un fraude, a pesar de los logros.",
      },
      "pt-br": {
        title: "O Impostor",
        description: "Vive com medo de ser exposto como uma fraude, apesar das conquistas.",
      },
    },
  },
  {
    key: "the-procrastinator",
    icon: "clock", // Represents delay and hesitation
    group: "Self-Sabotaging Saboteurs",
    translations: {
      en: {
        title: "The Procrastinator",
        description: "Delays tasks out of fear or discomfort.",
      },
      es: {
        title: "El Procrastinador",
        description: "Retrasa las tareas por miedo o incomodidad.",
      },
      "pt-br": {
        title: "O Procrastinador",
        description: "Adia tarefas por medo ou desconforto.",
      },
    },
  },
  {
    key: "the-overachiever",
    icon: "trophy", // Reflects seeking worth through accomplishments
    group: "Self-Sabotaging Saboteurs",
    translations: {
      en: {
        title: "The Overachiever",
        description: "Seeks worth through accomplishments, often at the expense of well-being.",
      },
      es: {
        title: "El Sobreexitoso",
        description: "Busca valor a través de logros, a menudo a costa del bienestar.",
      },
      "pt-br": {
        title: "O Super Realizador",
        description: "Busca valor por meio de conquistas, muitas vezes às custas do bem-estar.",
      },
    },
  },
  {
    key: "the-pessimist",
    icon: "cloud",
    group: "Self-Sabotaging Saboteurs",
    translations: {
      en: {
        title: "The Pessimist",
        description: "Expects the worst outcomes and resists optimism.",
      },
      es: {
        title: "El Pesimista",
        description: "Espera los peores resultados y resiste el optimismo.",
      },
      "pt-br": {
        title: "O Pessimista",
        description: "Espera os piores resultados e resiste ao otimismo.",
      },
    },
  },
  {
    key: "the-overcontroller",
    icon: "hand-holding",
    group: "Self-Sabotaging Saboteurs",
    translations: {
      en: {
        title: "The Overcontroller",
        description: "Driven by a fear of losing control over situations.",
      },
      es: {
        title: "El Sobrecontrolador",
        description: "Impulsado por el miedo a perder el control sobre las situaciones.",
      },
      "pt-br": {
        title: "O Controlador Excessivo",
        description: "Movido pelo medo de perder o controle sobre situações.",
      },
    },
  },
  {
    key: "the-underminer",
    icon: "question-circle", // Represents self-doubt
    group: "Self-Sabotaging Saboteurs",
    translations: {
      en: {
        title: "The Underminer",
        description: "Doubts their own capability and undermines self-confidence.",
      },
      es: {
        title: "El Minador",
        description: "Duda de su propia capacidad y socava la confianza en sí mismo.",
      },
      "pt-br": {
        title: "O Minador",
        description: "Dúvida da própria capacidade e mina a autoconfiança.",
      },
    },
  },
    // Interpersonal Saboteurs
    {
      key: "the-critic",
      icon: "gavel", // Symbolizes judgment
      group: "Interpersonal Saboteurs",
      translations: {
        en: {
          title: "The Critic",
          description: "Overly judgmental of others, focusing on faults and flaws.",
        },
        es: {
          title: "El Crítico",
          description: "Demasiado crítico con los demás, centrado en defectos y fallas.",
        },
        "pt-br": {
          title: "O Crítico",
          description: "Excessivamente crítico com os outros, focando em falhas e defeitos.",
        },
      },
    },
    {
      key: "the-people-pleaser",
      icon: "smile", // Represents seeking approval
      group: "Interpersonal Saboteurs",
      translations: {
        en: {
          title: "The People-Pleaser",
          description: "Sacrifices self to gain approval from others.",
        },
        es: {
          title: "El Complaciente",
          description: "Se sacrifica a sí mismo para obtener la aprobación de los demás.",
        },
        "pt-br": {
          title: "O Agradador",
          description: "Sacrifica a si mesmo para obter a aprovação dos outros.",
        },
      },
    },
    {
      key: "the-avoider",
      icon: "ban", // Symbolizes avoidance
      group: "Interpersonal Saboteurs",
      translations: {
        en: {
          title: "The Avoider",
          description: "Shuns conflict or difficult conversations to avoid discomfort.",
        },
        es: {
          title: "El Evitador",
          description: "Evita conflictos o conversaciones difíciles para no sentir incomodidad.",
        },
        "pt-br": {
          title: "O Evitador",
          description: "Evita conflitos ou conversas difíceis para evitar desconforto.",
        },
      },
    },
    {
      key: "the-martyr",
      icon: "cross", // Represents sacrifice
      group: "Interpersonal Saboteurs",
      translations: {
        en: {
          title: "The Martyr",
          description: "Plays the hero while secretly resenting others.",
        },
        es: {
          title: "El Mártir",
          description: "Se hace el héroe mientras resiente en secreto a los demás.",
        },
        "pt-br": {
          title: "O Mártir",
          description: "Faz-se de herói enquanto guarda ressentimentos pelos outros.",
        },
      },
    },
    {
      key: "the-clinger",
      icon: "hand-holding-heart", // Represents dependency
      group: "Interpersonal Saboteurs",
      translations: {
        en: {
          title: "The Clinger",
          description: "Overly dependent on others for validation and emotional support.",
        },
        es: {
          title: "El Dependiente",
          description: "Demasiado dependiente de los demás para validación y apoyo emocional.",
        },
        "pt-br": {
          title: "O Dependente",
          description: "Excessivamente dependente dos outros para validação e apoio emocional.",
        },
      },
    },
    {
      key: "the-manipulator",
      icon: "chess", // Symbolizes strategy and exploitation
      group: "Interpersonal Saboteurs",
      translations: {
        en: {
          title: "The Manipulator",
          description: "Uses others for self-gain, often through deceit or coercion.",
        },
        es: {
          title: "El Manipulador",
          description: "Utiliza a los demás para beneficio propio, a menudo mediante engaño o coerción.",
        },
        "pt-br": {
          title: "O Manipulador",
          description: "Usa os outros para ganho pessoal, muitas vezes por meio de engano ou coerção.",
        },
      },
    },
    {
      key: "the-gossiper",
      icon: "comment", // Represents spreading information
      group: "Interpersonal Saboteurs",
      translations: {
        en: {
          title: "The Gossiper",
          description: "Breaks trust to feel connected by spreading information about others.",
        },
        es: {
          title: "El Chismoso",
          description: "Rompe la confianza para sentirse conectado al difundir información sobre los demás.",
        },
        "pt-br": {
          title: "O Fofoqueiro",
          description: "Quebra a confiança para se sentir conectado ao espalhar informações sobre os outros.",
        },
      },
    },
    {
      key: "the-know-it-all",
      icon: "book", // Symbolizes knowledge and dismissiveness
      group: "Interpersonal Saboteurs",
      translations: {
        en: {
          title: "The Know-It-All",
          description: "Dismisses others' input, assuming superior knowledge.",
        },
        es: {
          title: "El Sabelotodo",
          description: "Descarta las opiniones de los demás, asumiendo un conocimiento superior.",
        },
        "pt-br": {
          title: "O Sabe-Tudo",
          description: "Desconsidera as opiniões dos outros, assumindo conhecimento superior.",
        },
      },
    },
    {
      key: "the-competitor",
      icon: "trophy", // Represents rivalry
      group: "Interpersonal Saboteurs",
      translations: {
        en: {
          title: "The Competitor",
          description: "Views relationships as rivalries, constantly seeking to outdo others.",
        },
        es: {
          title: "El Competidor",
          description: "Ve las relaciones como rivalidades, buscando superar a los demás.",
        },
        "pt-br": {
          title: "O Competidor",
          description: "Vê os relacionamentos como rivalidades, buscando superar os outros.",
        },
      },
    },
    {
      key: "the-distracter",
      icon: "random", // Represents diversion
      group: "Interpersonal Saboteurs",
      translations: {
        en: {
          title: "The Distracter",
          description: "Avoids issues with diversions or unrelated topics.",
        },
        es: {
          title: "El Distractor",
          description: "Evita problemas con distracciones o temas no relacionados.",
        },
        "pt-br": {
          title: "O Distraidor",
          description: "Evita problemas com distrações ou tópicos não relacionados.",
        },
      },
    },
      // Emotional Saboteurs
  {
    key: "the-fearmonger",
    icon: "exclamation-triangle", // Represents fear and uncertainty
    group: "Emotional Saboteurs",
    translations: {
      en: {
        title: "The Fearmonger",
        description: "Crippled by fear of uncertainty, often paralyzed by worst-case scenarios.",
      },
      es: {
        title: "El Alarmista",
        description: "Paralizado por el miedo a la incertidumbre, a menudo imaginando los peores escenarios.",
      },
      "pt-br": {
        title: "O Alarmista",
        description: "Paralisado pelo medo da incerteza, frequentemente imaginando os piores cenários.",
      },
    },
  },
  {
    key: "the-resentful",
    icon: "grudge", // Represents holding grudges
    group: "Emotional Saboteurs",
    translations: {
      en: {
        title: "The Resentful",
        description: "Holds onto grudges, allowing past wrongs to dominate their emotions.",
      },
      es: {
        title: "El Resentido",
        description: "Guarda rencores, permitiendo que los errores del pasado dominen sus emociones.",
      },
      "pt-br": {
        title: "O Ressentido",
        description: "Guarda rancores, permitindo que os erros do passado dominem suas emoções.",
      },
    },
  },
  {
    key: "the-guilt-tripper",
    icon: "hand-point-up", // Represents guilt and manipulation
    group: "Emotional Saboteurs",
    translations: {
      en: {
        title: "The Guilt-Tripper",
        description: "Uses guilt as a justification for inaction or manipulation.",
      },
      es: {
        title: "El Manipulador de Culpa",
        description: "Usa la culpa como justificación para la inacción o manipulación.",
      },
      "pt-br": {
        title: "O Culpabilizador",
        description: "Usa a culpa como justificativa para a inação ou manipulação.",
      },
    },
  },
  {
    key: "the-shame-bearer",
    icon: "mask-sad", // Represents internalized inadequacy
    group: "Emotional Saboteurs",
    translations: {
      en: {
        title: "The Shame-Bearer",
        description: "Internalizes feelings of inadequacy and avoids vulnerability.",
      },
      es: {
        title: "El Portador de Vergüenza",
        description: "Internaliza sentimientos de insuficiencia y evita la vulnerabilidad.",
      },
      "pt-br": {
        title: "O Portador da Vergonha",
        description: "Internaliza sentimentos de inadequação e evita a vulnerabilidade.",
      },
    },
  },
  {
    key: "the-angry-avenger",
    icon: "angry", // Represents lashing out
    group: "Emotional Saboteurs",
    translations: {
      en: {
        title: "The Angry Avenger",
        description: "Lashes out to feel in control, often fueled by unresolved anger.",
      },
      es: {
        title: "El Vengador Enfurecido",
        description: "Reacciona con ira para sentirse en control, a menudo impulsado por enojo no resuelto.",
      },
      "pt-br": {
        title: "O Vingador Furioso",
        description: "Reage com raiva para se sentir no controle, frequentemente impulsionado por raiva não resolvida.",
      },
    },
  },
  {
    key: "the-hopeless",
    icon: "sad-tear", // Represents despair
    group: "Emotional Saboteurs",
    translations: {
      en: {
        title: "The Hopeless",
        description: "Succumbs to despair and believes things will never improve.",
      },
      es: {
        title: "El Desesperado",
        description: "Se rinde ante la desesperación y cree que las cosas nunca mejorarán.",
      },
      "pt-br": {
        title: "O Desesperado",
        description: "Sucumbe ao desespero e acredita que as coisas nunca vão melhorar.",
      },
    },
  },
  {
    key: "the-jealous-guardian",
    icon: "eye", // Represents possessiveness
    group: "Emotional Saboteurs",
    translations: {
      en: {
        title: "The Jealous Guardian",
        description: "Possessive and insecure, struggles to trust others.",
      },
      es: {
        title: "El Guardián Celoso",
        description: "Posesivo e inseguro, tiene dificultades para confiar en los demás.",
      },
      "pt-br": {
        title: "O Guardião Ciumento",
        description: "Possessivo e inseguro, tem dificuldade em confiar nos outros.",
      },
    },
  },
  {
    key: "the-self-doubter",
    icon: "question-circle", // Represents undermined confidence
    group: "Emotional Saboteurs",
    translations: {
      en: {
        title: "The Self-Doubter",
        description: "Undermines personal confidence and avoids taking risks.",
      },
      es: {
        title: "El Inseguro",
        description: "Socava su confianza personal y evita tomar riesgos.",
      },
      "pt-br": {
        title: "O Inseguro",
        description: "Mina a confiança pessoal e evita correr riscos.",
      },
    },
  },
  {
    key: "the-emotional-flooder",
    icon: "water", // Represents being overwhelmed
    group: "Emotional Saboteurs",
    translations: {
      en: {
        title: "The Emotional Flooder",
        description: "Overwhelmed by feelings, making clear thinking difficult.",
      },
      es: {
        title: "El Desbordado Emocional",
        description: "Abrumado por sentimientos, lo que dificulta pensar con claridad.",
      },
      "pt-br": {
        title: "O Inundado Emocional",
        description: "Dominado por sentimentos, dificultando o pensamento claro.",
      },
    },
  },
  {
    key: "the-avoidant-escapist",
    icon: "gamepad", // Represents distraction
    group: "Emotional Saboteurs",
    translations: {
      en: {
        title: "The Avoidant Escapist",
        description: "Numbs emotions by turning to distractions or avoidance.",
      },
      es: {
        title: "El Evitador Escapista",
        description: "Adormece las emociones recurriendo a distracciones o evitación.",
      },
      "pt-br": {
        title: "O Escapista Evitador",
        description: "Dorme as emoções recorrendo a distrações ou fuga.",
      },
    },
  },
  // Behavioral Saboteurs
  {
    key: "the-overcommitter",
    icon: "tasks", // Represents taking on too much
    group: "Behavioral Saboteurs",
    translations: {
      en: {
        title: "The Overcommitter",
        description: "Takes on too many tasks to prove worth, often leading to burnout.",
      },
      es: {
        title: "El Comprometido en Exceso",
        description: "Asume demasiadas tareas para demostrar su valía, lo que a menudo lleva al agotamiento.",
      },
      "pt-br": {
        title: "O Sobrecarregado",
        description: "Assume tarefas demais para provar valor, frequentemente levando ao esgotamento.",
      },
    },
  },
  {
    key: "the-loner",
    icon: "user-slash", // Represents avoiding teamwork
    group: "Behavioral Saboteurs",
    translations: {
      en: {
        title: "The Loner",
        description: "Avoids teamwork to stay 'safe,' often missing collaborative benefits.",
      },
      es: {
        title: "El Solitario",
        description: "Evita el trabajo en equipo para mantenerse 'seguro', perdiendo beneficios colaborativos.",
      },
      "pt-br": {
        title: "O Solitário",
        description: "Evita trabalho em equipe para se manter 'seguro,' muitas vezes perdendo benefícios colaborativos.",
      },
    },
  },
  {
    key: "the-perfectionist-doer",
    icon: "clipboard-check", // Represents doing everything themselves
    group: "Behavioral Saboteurs",
    translations: {
      en: {
        title: "The Perfectionist Doer",
        description: "Refuses to delegate tasks, believing no one can match their standards.",
      },
      es: {
        title: "El Perfeccionista Hacedor",
        description: "Se niega a delegar tareas, creyendo que nadie puede igualar sus estándares.",
      },
      "pt-br": {
        title: "O Fazedor Perfeccionista",
        description: "Recusa delegar tarefas, acreditando que ninguém pode igualar seus padrões.",
      },
    },
  },
  {
    key: "the-shortcut-seeker",
    icon: "fast-forward", // Represents shortcuts
    group: "Behavioral Saboteurs",
    translations: {
      en: {
        title: "The Shortcut Seeker",
        description: "Sacrifices quality for ease, often compromising outcomes.",
      },
      es: {
        title: "El Buscador de Atajos",
        description: "Sacrifica la calidad por la facilidad, comprometiendo los resultados.",
      },
      "pt-br": {
        title: "O Buscador de Atalhos",
        description: "Sacrifica a qualidade pela facilidade, frequentemente comprometendo os resultados.",
      },
    },
  },
  {
    key: "the-time-waster",
    icon: "clock", // Represents inefficiency
    group: "Behavioral Saboteurs",
    translations: {
      en: {
        title: "The Time Waster",
        description: "Sabotages efficiency by indulging in distractions and unproductive activities.",
      },
      es: {
        title: "El Desperdiciador de Tiempo",
        description: "Sabotea la eficiencia al distraerse con actividades improductivas.",
      },
      "pt-br": {
        title: "O Desperdiçador de Tempo",
        description: "Sabota a eficiência ao se distrair com atividades improdutivas.",
      },
    },
  },
  {
    key: "the-repeater",
    icon: "redo", // Represents repeating mistakes
    group: "Behavioral Saboteurs",
    translations: {
      en: {
        title: "The Repeater",
        description: "Relives past mistakes instead of learning and moving forward.",
      },
      es: {
        title: "El Repetidor",
        description: "Revive errores pasados en lugar de aprender y avanzar.",
      },
      "pt-br": {
        title: "O Repetidor",
        description: "Revive erros passados em vez de aprender e seguir em frente.",
      },
    },
  },
  {
    key: "the-risk-avoider",
    icon: "umbrella", // Represents avoiding risk
    group: "Behavioral Saboteurs",
    translations: {
      en: {
        title: "The Risk Avoider",
        description: "Misses opportunities due to fear of taking risks.",
      },
      es: {
        title: "El Evitador de Riesgos",
        description: "Pierde oportunidades por miedo a asumir riesgos.",
      },
      "pt-br": {
        title: "O Evitador de Riscos",
        description: "Perde oportunidades por medo de assumir riscos.",
      },
    },
  },
  {
    key: "the-rule-breaker",
    icon: "ban", // Represents rejecting rules
    group: "Behavioral Saboteurs",
    translations: {
      en: {
        title: "The Rule Breaker",
        description: "Ignores structures and rules that provide order.",
      },
      es: {
        title: "El Rompedor de Reglas",
        description: "Ignora estructuras y reglas que aportan orden.",
      },
      "pt-br": {
        title: "O Quebra-Regras",
        description: "Ignora estruturas e regras que trazem ordem.",
      },
    },
  },
  {
    key: "the-rebel-without-cause",
    icon: "bolt", // Represents defiance
    group: "Behavioral Saboteurs",
    translations: {
      en: {
        title: "The Rebel Without Cause",
        description: "Rejects authority reflexively, even without justification.",
      },
      es: {
        title: "El Rebelde Sin Causa",
        description: "Rechaza la autoridad de manera reflexiva, incluso sin justificación.",
      },
      "pt-br": {
        title: "O Rebelde Sem Causa",
        description: "Rejeita autoridade reflexivamente, mesmo sem justificativa.",
      },
    },
  },
  {
    key: "the-rigid-planner",
    icon: "calendar-alt", // Represents inflexibility
    group: "Behavioral Saboteurs",
    translations: {
      en: {
        title: "The Rigid Planner",
        description: "Inflexible when faced with unexpected changes.",
      },
      es: {
        title: "El Planificador Rígido",
        description: "Inflexible frente a cambios inesperados.",
      },
      "pt-br": {
        title: "O Planejador Rígido",
        description: "Inflexível diante de mudanças inesperadas.",
      },
    },
  },
  // Cultural and Social Saboteurs
  {
    key: "the-status-chaser",
    icon: "award", // Represents pursuit of status
    group: "Cultural and Social Saboteurs",
    translations: {
      en: {
        title: "The Status Chaser",
        description: "Overly concerned with appearances and societal approval.",
      },
      es: {
        title: "El Perseguidor de Estatus",
        description: "Demasiado preocupado por las apariencias y la aprobación social.",
      },
      "pt-br": {
        title: "O Caçador de Status",
        description: "Excessivamente preocupado com aparências e aprovação social.",
      },
    },
  },
  {
    key: "the-stereotype-enforcer",
    icon: "users", // Represents societal roles and expectations
    group: "Cultural and Social Saboteurs",
    translations: {
      en: {
        title: "The Stereotype Enforcer",
        description: "Self-limits based on societal expectations or identity.",
      },
      es: {
        title: "El Refuerzo de Estereotipos",
        description: "Se autolimita según expectativas sociales o identidad.",
      },
      "pt-br": {
        title: "O Reforçador de Estereótipos",
        description: "Se limita com base em expectativas sociais ou identidade.",
      },
    },
  },
  {
    key: "the-group-conformer",
    icon: "people-arrows", // Represents fitting in with the group
    group: "Cultural and Social Saboteurs",
    translations: {
      en: {
        title: "The Group Conformer",
        description: "Follows the crowd to avoid standing out or being different.",
      },
      es: {
        title: "El Conformista del Grupo",
        description: "Sigue a la multitud para evitar destacar o ser diferente.",
      },
      "pt-br": {
        title: "O Conformista do Grupo",
        description: "Segue a multidão para evitar se destacar ou ser diferente.",
      },
    },
  },
  {
    key: "the-comparison-junkie",
    icon: "balance-scale", // Represents comparison
    group: "Cultural and Social Saboteurs",
    translations: {
      en: {
        title: "The Comparison Junkie",
        description: "Measures self-worth against others' achievements.",
      },
      es: {
        title: "El Adicto a la Comparación",
        description: "Mide su propio valor en función de los logros de otros.",
      },
      "pt-br": {
        title: "O Viciado em Comparação",
        description: "Mede o próprio valor com base nas conquistas dos outros.",
      },
    },
  },
  {
    key: "the-label-wearer",
    icon: "tag", // Represents external labels
    group: "Cultural and Social Saboteurs",
    translations: {
      en: {
        title: "The Label Wearer",
        description: "Defines identity through external labels and titles.",
      },
      es: {
        title: "El Portador de Etiquetas",
        description: "Define su identidad a través de etiquetas y títulos externos.",
      },
      "pt-br": {
        title: "O Portador de Rótulos",
        description: "Define a identidade por meio de rótulos e títulos externos.",
      },
    },
  },
  {
    key: "the-workaholic",
    icon: "briefcase", // Represents work obsession
    group: "Cultural and Social Saboteurs",
    translations: {
      en: {
        title: "The Workaholic",
        description: "Uses work to avoid other responsibilities or emotions.",
      },
      es: {
        title: "El Adicto al Trabajo",
        description: "Utiliza el trabajo para evitar otras responsabilidades o emociones.",
      },
      "pt-br": {
        title: "O Viciado em Trabalho",
        description: "Usa o trabalho para evitar outras responsabilidades ou emoções.",
      },
    },
  },
  {
    key: "the-image-protector",
    icon: "shield-alt", // Represents protecting one's image
    group: "Cultural and Social Saboteurs",
    translations: {
      en: {
        title: "The Image Protector",
        description: "Fearful of being 'exposed,' hides vulnerabilities.",
      },
      es: {
        title: "El Protector de Imagen",
        description: "Temeroso de ser 'expuesto,' oculta sus vulnerabilidades.",
      },
      "pt-br": {
        title: "O Protetor de Imagem",
        description: "Com medo de ser 'exposto,' esconde vulnerabilidades.",
      },
    },
  },
  {
    key: "the-trend-chaser",
    icon: "chart-line", // Represents following trends
    group: "Cultural and Social Saboteurs",
    translations: {
      en: {
        title: "The Trend Chaser",
        description: "Abandons own values to stay relevant with societal trends.",
      },
      es: {
        title: "El Seguidor de Tendencias",
        description: "Abandona sus propios valores para mantenerse relevante con las tendencias sociales.",
      },
      "pt-br": {
        title: "O Seguidor de Tendências",
        description: "Abandona os próprios valores para se manter relevante nas tendências sociais.",
      },
    },
  },
  {
    key: "the-social-media-obsessive",
    icon: "thumbs-up", // Represents online validation
    group: "Cultural and Social Saboteurs",
    translations: {
      en: {
        title: "The Social Media Obsessive",
        description: "Seeks validation online, often prioritizing it over real-world connections.",
      },
      es: {
        title: "El Obsesivo de Redes Sociales",
        description: "Busca validación en línea, a menudo priorizándola sobre las conexiones reales.",
      },
      "pt-br": {
        title: "O Obsessivo por Redes Sociais",
        description: "Busca validação online, frequentemente priorizando isso sobre conexões reais.",
      },
    },
  },
  {
    key: "the-consumerist",
    icon: "shopping-cart", // Represents material possessions
    group: "Cultural and Social Saboteurs",
    translations: {
      en: {
        title: "The Consumerist",
        description: "Defines self-worth through material possessions.",
      },
      es: {
        title: "El Consumista",
        description: "Define su valor propio a través de posesiones materiales.",
      },
      "pt-br": {
        title: "O Consumista",
        description: "Define seu valor próprio por meio de posses materiais.",
      },
    },
  },
];

export default saboteurFlashcards;