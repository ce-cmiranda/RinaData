const biasFlashcards = [
  // 1. Decision-Making Biases
  {
    key: "anchoring-bias",
    icon: "anchor",
    group: "Decision-Making Biases",
    translations: {
      en: {
        title: "Anchoring Bias",
        description: "Being overly influenced by the first piece of information seen, even if it's irrelevant.",
      },
      es: {
        title: "Sesgo de Anclaje",
        description: "Confiar demasiado en la primera información encontrada al tomar decisiones, incluso si es irrelevante.",
      },
      "pt-br": {
        title: "Viés de Ancoragem",
        description: "Ser excessivamente influenciado pela primeira informação apresentada, mesmo que seja irrelevante.",
      },
    },
  },
  {
    key: "availability-heuristic",
    icon: "lightbulb",
    group: "Decision-Making Biases",
    translations: {
      en: {
        title: "Availability Heuristic",
        description: "Making judgments based on information that is most easily recalled, often recent or dramatic events.",
      },
      es: {
        title: "Heurística de Disponibilidad",
        description: "Emitir juicios basándose en la información más fácil de recordar, frecuentemente eventos recientes o impactantes.",
      },
      "pt-br": {
        title: "Heurística de Disponibilidade",
        description: "Fazer julgamentos com base nas informações mais facilmente lembradas, geralmente eventos recentes ou dramáticos.",
      },
    },
  },
  {
    key: "bandwagon-effect",
    icon: "users",
    group: "Decision-Making Biases",
    translations: {
      en: {
        title: "Bandwagon Effect",
        description: "Adopting beliefs or behaviors because many others are doing the same.",
      },
      es: {
        title: "Efecto Carro de la Compra",
        description: "Adoptar creencias o comportamientos porque muchos otros lo hacen.",
      },
      "pt-br": {
        title: "Efeito Manada",
        description: "Adotar crenças ou comportamentos porque muitos outros estão fazendo o mesmo.",
      },
    },
  },
  {
    key: "choice-supportive-bias",
    icon: "thumbs-up",
    group: "Decision-Making Biases",
    translations: {
      en: {
        title: "Choice-Supportive Bias",
        description: "Remembering one's choices as better than they were, attributing positive attributes to options selected.",
      },
      es: {
        title: "Sesgo de Apoyo a la Elección",
        description: "Recordar las propias elecciones como mejores de lo que fueron, atribuyendo atributos positivos a las opciones seleccionadas.",
      },
      "pt-br": {
        title: "Viés de Apoio à Escolha",
        description: "Lembrar as próprias escolhas como melhores do que foram, atribuindo atributos positivos às opções selecionadas.",
      },
    },
  },
  {
    key: "confirmation-bias",
    icon: "search",
    group: "Decision-Making Biases",
    translations: {
      en: {
        title: "Confirmation Bias",
        description: "Favoring information that confirms existing beliefs and discounting evidence that contradicts them.",
      },
      es: {
        title: "Sesgo de Confirmación",
        description: "Favorecer información que confirma creencias existentes y descartar evidencia que las contradice.",
      },
      "pt-br": {
        title: "Viés de Confirmação",
        description: "Favorecer informações que confirmam crenças existentes e descartar evidências que as contradizem.",
      },
    },
  },
  {
    key: "decoy-effect",
    icon: "bullseye",
    group: "Decision-Making Biases",
    translations: {
      en: {
        title: "Decoy Effect",
        description: "Preference changes between two options when presented with a third, less attractive option.",
      },
      es: {
        title: "Efecto Señuelo",
        description: "Las preferencias cambian entre dos opciones cuando se presenta una tercera opción menos atractiva.",
      },
      "pt-br": {
        title: "Efeito Isca",
        description: "Mudança de preferência entre duas opções quando apresentada uma terceira opção menos atraente.",
      },
    },
  },
  {
    key: "endowment-effect",
    icon: "gift",
    group: "Decision-Making Biases",
    translations: {
      en: {
        title: "Endowment Effect",
        description: "Placing higher value on items simply because they are owned.",
      },
      es: {
        title: "Efecto de Dotación",
        description: "Dar mayor valor a los artículos simplemente porque son propios.",
      },
      "pt-br": {
        title: "Efeito de Posse",
        description: "Atribuir maior valor a itens simplesmente porque são de sua propriedade.",
      },
    },
  },
  {
    key: "framing-effect",
    icon: "images",
    group: "Decision-Making Biases",
    translations: {
      en: {
        title: "Framing Effect",
        description: "Decisions are influenced by how information is presented rather than the information itself.",
      },
      es: {
        title: "Efecto de Encuadre",
        description: "Las decisiones son influenciadas por cómo se presenta la información en lugar de la información misma.",
      },
      "pt-br": {
        title: "Efeito de Moldura",
        description: "As decisões são influenciadas por como a informação é apresentada, não pela informação em si.",
      },
    },
  },
  {
    key: "loss-aversion",
    icon: "hand-holding-usd",
    group: "Decision-Making Biases",
    translations: {
      en: {
        title: "Loss Aversion",
        description: "Preferring to avoid losses rather than acquiring equivalent gains.",
      },
      es: {
        title: "Aversión a la Pérdida",
        description: "Preferir evitar pérdidas en lugar de adquirir ganancias equivalentes.",
      },
      "pt-br": {
        title: "Aversão à Perda",
        description: "Preferir evitar perdas a obter ganhos equivalentes.",
      },
    },
  },
  {
    key: "optimism-bias",
    icon: "sun",
    group: "Decision-Making Biases",
    translations: {
      en: {
        title: "Optimism Bias",
        description: "Overestimating the likelihood of positive outcomes while underestimating negative ones.",
      },
      es: {
        title: "Sesgo de Optimismo",
        description: "Sobreestimar la probabilidad de resultados positivos y subestimar los negativos.",
      },
      "pt-br": {
        title: "Viés de Otimismo",
        description: "Superestimar a probabilidade de resultados positivos e subestimar os negativos.",
      },
    },
  },
  {
    key: "overconfidence-bias",
    icon: "trophy",
    group: "Decision-Making Biases",
    translations: {
      en: {
        title: "Overconfidence Bias",
        description: "Overestimating one's abilities or the accuracy of one's information.",
      },
      es: {
        title: "Sesgo de Sobreconfianza",
        description: "Sobreestimar las propias habilidades o la precisión de la información propia.",
      },
      "pt-br": {
        title: "Viés de Excesso de Confiança",
        description: "Superestimar as próprias habilidades ou a precisão das próprias informações.",
      },
    },
  },
  {
    key: "planning-fallacy",
    icon: "calendar-check",
    group: "Decision-Making Biases",
    translations: {
      en: {
        title: "Planning Fallacy",
        description: "Underestimating the time, costs, or risks of future actions and overestimating the benefits.",
      },
      es: {
        title: "Falacia de Planificación",
        description: "Subestimar el tiempo, los costos o los riesgos de acciones futuras y sobreestimar los beneficios.",
      },
      "pt-br": {
        title: "Falácia do Planejamento",
        description: "Subestimar o tempo, custos ou riscos de ações futuras e superestimar os benefícios.",
      },
    },
  },
  {
    key: "recency-bias",
    icon: "calendar-alt",
    group: "Decision-Making Biases",
    translations: {
      en: {
        title: "Recency Bias",
        description: "Placing more importance on recent events than earlier ones.",
      },
      es: {
        title: "Sesgo de Recencia",
        description: "Dar más importancia a eventos recientes que a los anteriores.",
      },
      "pt-br": {
        title: "Viés de Recência",
        description: "Dar mais importância a eventos recentes do que a eventos anteriores.",
      },
    },
  },
  {
    key: "status-quo-bias",
    icon: "equals",
    group: "Decision-Making Biases",
    translations: {
      en: {
        title: "Status Quo Bias",
        description: "Preferring things to stay the same by doing nothing or maintaining a previous decision.",
      },
      es: {
        title: "Sesgo de Estado Actual",
        description: "Preferir que las cosas permanezcan igual haciendo nada o manteniendo una decisión previa.",
      },
      "pt-br": {
        title: "Viés do Status Quo",
        description: "Preferir que as coisas permaneçam como estão, não fazendo nada ou mantendo uma decisão anterior.",
      },
    },
  },
  {
    key: "sunk-cost-fallacy",
    icon: "money-check-alt",
    group: "Decision-Making Biases",
    translations: {
      en: {
        title: "Sunk Cost Fallacy",
        description: "Continuing a project or decision based on past investments, not future benefits.",
      },
      es: {
        title: "Falacia del Coste Hundido",
        description: "Continuar un proyecto o decisión basado en inversiones pasadas, no en beneficios futuros.",
      },
      "pt-br": {
        title: "Falácia do Custo Afundado",
        description: "Continuar um projeto ou decisão com base em investimentos passados, não em benefícios futuros.",
      },
    },
  },
  {
    key: "zero-risk-bias",
    icon: "shield-alt",
    group: "Decision-Making Biases",
    translations: {
      en: {
        title: "Zero-Risk Bias",
        description: "Preferring the complete elimination of risk even when alternative options produce greater overall risk reduction.",
      },
      es: {
        title: "Sesgo de Riesgo Cero",
        description: "Preferir la eliminación completa del riesgo incluso cuando opciones alternativas producen una mayor reducción total del riesgo.",
      },
      "pt-br": {
        title: "Viés de Risco Zero",
        description: "Preferir a eliminação completa do risco, mesmo quando opções alternativas produzem uma maior redução geral do risco.",
      },
    },
  },
  {
    key: "clustering-illusion",
    icon: "th-large",
    group: "Decision-Making Biases",
    translations: {
      en: {
        title: "Clustering Illusion",
        description: "Seeing patterns or clusters in random data.",
      },
      es: {
        title: "Ilusión de Agrupamiento",
        description: "Ver patrones o agrupamientos en datos aleatorios.",
      },
      "pt-br": {
        title: "Ilusão de Agrupamento",
        description: "Ver padrões ou agrupamentos em dados aleatórios.",
      },
    },
  },
  {
    key: "conjunction-fallacy",
    icon: "plus-circle",
    group: "Decision-Making Biases",
    translations: {
      en: {
        title: "Conjunction Fallacy",
        description: "Assuming that specific conditions are more probable than a single general one.",
      },
      es: {
        title: "Falacia de Conjunción",
        description: "Asumir que condiciones específicas son más probables que una general.",
      },
      "pt-br": {
        title: "Falácia da Conjunção",
        description: "Assumir que condições específicas são mais prováveis do que uma geral.",
      },
    },
  },
  {
    key: "gamblers-fallacy",
    icon: "dice",
    group: "Decision-Making Biases",
    translations: {
      en: {
        title: "Gambler's Fallacy",
        description: "Believing that future probabilities are altered by past events, when in reality they are unchanged.",
      },
      es: {
        title: "Falacia del Jugador",
        description: "Creer que las probabilidades futuras se ven alteradas por eventos pasados, cuando en realidad no cambian.",
      },
      "pt-br": {
        title: "Falácia do Apostador",
        description: "Acreditar que probabilidades futuras são alteradas por eventos passados, quando na realidade permanecem inalteradas.",
      },
    },
  },
  {
    key: "neglect-of-probability",
    icon: "exclamation-triangle",
    group: "Decision-Making Biases",
    translations: {
      en: {
        title: "Neglect of Probability",
        description: "Disregarding probability when making a decision under uncertainty.",
      },
      es: {
        title: "Negligencia de Probabilidad",
        description: "Ignorar la probabilidad al tomar una decisión bajo incertidumbre.",
      },
      "pt-br": {
        title: "Negligência da Probabilidade",
        description: "Desconsiderar a probabilidade ao tomar uma decisão sob incerteza.",
      },
    },
  },
  // 2. Memory Biases
  {
    key: "bizarreness-effect",
    icon: "eye",
    group: "Memory Biases",
    translations: {
      en: {
        title: "Bizarreness Effect",
        description: "Remembering unusual or strange information better than ordinary information.",
      },
      es: {
        title: "Efecto de Rareza",
        description: "Recordar mejor información inusual o extraña que información ordinaria.",
      },
      "pt-br": {
        title: "Efeito de Bizarrice",
        description: "Lembrar melhor informações incomuns ou estranhas do que informações comuns.",
      },
    },
  },
  {
    key: "context-effect",
    icon: "map",
    group: "Memory Biases",
    translations: {
      en: {
        title: "Context Effect",
        description: "Improved recall of information when in the same context where it was learned.",
      },
      es: {
        title: "Efecto de Contexto",
        description: "Mejor recuerdo de información cuando se está en el mismo contexto en que se aprendió.",
      },
      "pt-br": {
        title: "Efeito de Contexto",
        description: "Melhor recuperação de informações quando no mesmo contexto em que foi aprendida.",
      },
    },
  },
  {
    key: "fading-affect-bias",
    icon: "clock",
    group: "Memory Biases",
    translations: {
      en: {
        title: "Fading Affect Bias",
        description: "Negative emotions fade faster than positive ones in memories.",
      },
      es: {
        title: "Sesgo de Desvanecimiento Afectivo",
        description: "Las emociones negativas se desvanecen más rápido que las positivas en los recuerdos.",
      },
      "pt-br": {
        title: "Viés de Desvanecimento Afetivo",
        description: "As emoções negativas desaparecem mais rapidamente que as positivas nas memórias.",
      },
    },
  },
  {
    key: "hindsight-bias",
    icon: "history",
    group: "Memory Biases",
    translations: {
      en: {
        title: "Hindsight Bias",
        description: "Believing you 'knew it all along' after an event has occurred.",
      },
      es: {
        title: "Sesgo de Retroceso",
        description: "Creer que 'lo sabías todo el tiempo' después de que ha ocurrido un evento.",
      },
      "pt-br": {
        title: "Viés de Retrospectiva",
        description: "Acreditar que 'sempre soube' depois que um evento ocorreu.",
      },
    },
  },
  {
    key: "peak-end-rule",
    icon: "chart-line",
    group: "Memory Biases",
    translations: {
      en: {
        title: "Peak-End Rule",
        description: "Judging an experience based on its peak (best or worst moment) and its end, rather than the total experience.",
      },
      es: {
        title: "Regla Pico-Final",
        description: "Juzgar una experiencia por su pico (mejor o peor momento) y su final, en lugar de la experiencia total.",
      },
      "pt-br": {
        title: "Regra do Pico e Fim",
        description: "Julgar uma experiência com base em seu pico (melhor ou pior momento) e seu final, em vez da experiência total.",
      },
    },
  },
  {
    key: "rosy-retrospection",
    icon: "smile",
    group: "Memory Biases",
    translations: {
      en: {
        title: "Rosy Retrospection",
        description: "Remembering past events more positively than they were.",
      },
      es: {
        title: "Retrospección Rosada",
        description: "Recordar eventos pasados de manera más positiva de lo que fueron.",
      },
      "pt-br": {
        title: "Retrospectiva Positiva",
        description: "Lembrar de eventos passados de forma mais positiva do que realmente foram.",
      },
    },
  },
  {
    key: "self-serving-bias",
    icon: "thumbs-up",
    group: "Memory Biases",
    translations: {
      en: {
        title: "Self-Serving Bias",
        description: "Taking credit for success but blaming external factors for failure.",
      },
      es: {
        title: "Sesgo de Autoservicio",
        description: "Atribuir el éxito a uno mismo pero culpar factores externos por el fracaso.",
      },
      "pt-br": {
        title: "Viés de Autoengrandecimento",
        description: "Atribuir o sucesso a si mesmo, mas culpar fatores externos pelo fracasso.",
      },
    },
  },
  {
    key: "serial-position-effect",
    icon: "list-alt",
    group: "Memory Biases",
    translations: {
      en: {
        title: "Serial Position Effect",
        description: "Better memory for the first and last items in a series compared to the middle items.",
      },
      es: {
        title: "Efecto de Posición Serial",
        description: "Mejor memoria para los primeros y últimos elementos de una serie en comparación con los intermedios.",
      },
      "pt-br": {
        title: "Efeito de Posição Serial",
        description: "Melhor memória para os primeiros e últimos itens de uma série em comparação com os intermediários.",
      },
    },
  },
  {
    key: "von-restorff-effect",
    icon: "asterisk",
    group: "Memory Biases",
    translations: {
      en: {
        title: "Von Restorff Effect",
        description: "Items that stand out are remembered better than those that blend in.",
      },
      es: {
        title: "Efecto Von Restorff",
        description: "Los elementos que destacan se recuerdan mejor que los que se mezclan.",
      },
      "pt-br": {
        title: "Efeito Von Restorff",
        description: "Itens que se destacam são lembrados melhor do que os que se misturam.",
      },
    },
  },
    // 3. Social Biases
    {
      key: "actor-observer-bias",
      icon: "user-friends",
      group: "Social Biases",
      translations: {
        en: {
          title: "Actor-Observer Bias",
          description: "Attributing others’ actions to their character but your own to circumstances.",
        },
        es: {
          title: "Sesgo Actor-Observador",
          description: "Atribuir las acciones de otros a su carácter pero las tuyas a las circunstancias.",
        },
        "pt-br": {
          title: "Viés Ator-Observador",
          description: "Atribuir as ações dos outros ao seu caráter, mas as suas às circunstâncias.",
        },
      },
    },
    {
      key: "authority-bias",
      icon: "user-shield",
      group: "Social Biases",
      translations: {
        en: {
          title: "Authority Bias",
          description: "Overvaluing the opinions of authority figures even when they may be incorrect.",
        },
        es: {
          title: "Sesgo de Autoridad",
          description: "Sobrevalorar las opiniones de figuras de autoridad incluso cuando puedan estar equivocadas.",
        },
        "pt-br": {
          title: "Viés de Autoridade",
          description: "Supervalorizar as opiniões de figuras de autoridade, mesmo quando podem estar erradas.",
        },
      },
    },
    {
      key: "belief-bias",
      icon: "lightbulb",
      group: "Social Biases",
      translations: {
        en: {
          title: "Belief Bias",
          description: "Evaluating arguments based on their believability rather than their logic.",
        },
        es: {
          title: "Sesgo de Creencias",
          description: "Evaluar argumentos basándose en su credibilidad en lugar de en su lógica.",
        },
        "pt-br": {
          title: "Viés de Crenças",
          description: "Avaliar argumentos com base em sua credibilidade em vez de sua lógica.",
        },
      },
    },
    {
      key: "dunning-kruger-effect",
      icon: "brain",
      group: "Social Biases",
      translations: {
        en: {
          title: "Dunning-Kruger Effect",
          description: "Overestimating your own abilities when you lack competence.",
        },
        es: {
          title: "Efecto Dunning-Kruger",
          description: "Sobreestimar tus propias habilidades cuando careces de competencia.",
        },
        "pt-br": {
          title: "Efeito Dunning-Kruger",
          description: "Superestimar suas próprias habilidades quando falta competência.",
        },
      },
    },
    {
      key: "egocentric-bias",
      icon: "user-circle",
      group: "Social Biases",
      translations: {
        en: {
          title: "Egocentric Bias",
          description: "Overemphasizing your own role in past events.",
        },
        es: {
          title: "Sesgo Egocéntrico",
          description: "Sobrevalorar tu propio papel en eventos pasados.",
        },
        "pt-br": {
          title: "Viés Egocêntrico",
          description: "Supervalorizar seu próprio papel em eventos passados.",
        },
      },
    },
    {
      key: "false-consensus-effect",
      icon: "comments",
      group: "Social Biases",
      translations: {
        en: {
          title: "False Consensus Effect",
          description: "Overestimating how much others agree with you.",
        },
        es: {
          title: "Efecto de Consenso Falso",
          description: "Sobreestimar cuánto están de acuerdo los demás contigo.",
        },
        "pt-br": {
          title: "Efeito de Consenso Falso",
          description: "Superestimar o quanto os outros concordam com você.",
        },
      },
    },
    {
      key: "fundamental-attribution-error",
      icon: "exclamation-triangle",
      group: "Social Biases",
      translations: {
        en: {
          title: "Fundamental Attribution Error",
          description: "Blaming others’ actions on personality over context.",
        },
        es: {
          title: "Error de Atribución Fundamental",
          description: "Culpar las acciones de otros a su personalidad en lugar del contexto.",
        },
        "pt-br": {
          title: "Erro Fundamental de Atribuição",
          description: "Culpar as ações dos outros à sua personalidade em vez do contexto.",
        },
      },
    },
    {
      key: "halo-effect",
      icon: "circle",
      group: "Social Biases",
      translations: {
        en: {
          title: "Halo Effect",
          description: "Letting one positive trait influence your overall impression.",
        },
        es: {
          title: "Efecto Halo",
          description: "Permitir que un rasgo positivo influya en tu impresión general.",
        },
        "pt-br": {
          title: "Efeito Halo",
          description: "Permitir que um traço positivo influencie sua impressão geral.",
        },
      },
    },
    {
      key: "horn-effect",
      icon: "times-circle",
      group: "Social Biases",
      translations: {
        en: {
          title: "Horn Effect",
          description: "Letting one negative trait dominate your perception.",
        },
        es: {
          title: "Efecto Cuerno",
          description: "Permitir que un rasgo negativo domine tu percepción.",
        },
        "pt-br": {
          title: "Efeito Chifre",
          description: "Permitir que um traço negativo domine sua percepção.",
        },
      },
    },
    {
      key: "ingroup-bias",
      icon: "users",
      group: "Social Biases",
      translations: {
        en: {
          title: "Ingroup Bias",
          description: "Favoring your own group over others.",
        },
        es: {
          title: "Sesgo de Endogrupo",
          description: "Favorecer tu propio grupo sobre los demás.",
        },
        "pt-br": {
          title: "Viés de Endogrupo",
          description: "Favorecer seu próprio grupo em relação aos outros.",
        },
      },
    },
    {
      key: "just-world-hypothesis",
      icon: "balance-scale",
      group: "Social Biases",
      translations: {
        en: {
          title: "Just-World Hypothesis",
          description: "Believing people get what they deserve.",
        },
        es: {
          title: "Hipótesis del Mundo Justo",
          description: "Creer que las personas obtienen lo que merecen.",
        },
        "pt-br": {
          title: "Hipótese do Mundo Justo",
          description: "Acreditar que as pessoas recebem o que merecem.",
        },
      },
    },
    {
      key: "outgroup-homogeneity-bias",
      icon: "user-times",
      group: "Social Biases",
      translations: {
        en: {
          title: "Outgroup Homogeneity Bias",
          description: "Seeing outgroup members as more similar than ingroup members.",
        },
        es: {
          title: "Sesgo de Homogeneidad del Exogrupo",
          description: "Ver a los miembros del exogrupo como más similares que los del endogrupo.",
        },
        "pt-br": {
          title: "Viés de Homogeneidade do Exogrupo",
          description: "Ver os membros do exogrupo como mais similares do que os do endogrupo.",
        },
      },
    },
    {
      key: "projection-bias",
      icon: "mirror",
      group: "Social Biases",
      translations: {
        en: {
          title: "Projection Bias",
          description: "Assuming others think and feel the same way you do.",
        },
        es: {
          title: "Sesgo de Proyección",
          description: "Asumir que otros piensan y sienten de la misma manera que tú.",
        },
        "pt-br": {
          title: "Viés de Projeção",
          description: "Assumir que os outros pensam e sentem da mesma maneira que você.",
        },
      },
    },
    {
      key: "social-desirability-bias",
      icon: "thumbs-up",
      group: "Social Biases",
      translations: {
        en: {
          title: "Social Desirability Bias",
          description: "Changing behavior to appear more favorable to others.",
        },
        es: {
          title: "Sesgo de Deseabilidad Social",
          description: "Cambiar el comportamiento para parecer más favorable a los demás.",
        },
        "pt-br": {
          title: "Viés de Desejabilidade Social",
          description: "Mudar o comportamento para parecer mais favorável aos outros.",
        },
      },
    },
    {
      key: "spotlight-effect",
      icon: "lightbulb",
      group: "Social Biases",
      translations: {
        en: {
          title: "Spotlight Effect",
          description: "Overestimating how much others notice you.",
        },
        es: {
          title: "Efecto Foco",
          description: "Sobreestimar cuánto te notan los demás.",
        },
        "pt-br": {
          title: "Efeito Holofote",
          description: "Superestimar o quanto os outros percebem você.",
        },
      },
    },
      // 4. Emotional and Behavioral Biases
  {
    key: "affective-forecasting",
    icon: "cloud-sun",
    group: "Emotional and Behavioral Biases",
    translations: {
      en: {
        title: "Affective Forecasting",
        description: "Overestimating the intensity or duration of future emotional states.",
      },
      es: {
        title: "Pronóstico Afectivo",
        description: "Sobreestimar la intensidad o duración de los estados emocionales futuros.",
      },
      "pt-br": {
        title: "Previsão Afetiva",
        description: "Superestimar a intensidade ou duração de estados emocionais futuros.",
      },
    },
  },
  {
    key: "empathy-gap",
    icon: "users",
    group: "Emotional and Behavioral Biases",
    translations: {
      en: {
        title: "Empathy Gap",
        description: "Struggling to understand others’ emotions when in a different emotional state.",
      },
      es: {
        title: "Brecha de Empatía",
        description: "Dificultad para entender las emociones de los demás cuando se está en un estado emocional diferente.",
      },
      "pt-br": {
        title: "Lacuna de Empatia",
        description: "Dificuldade em entender as emoções de outros quando se está em um estado emocional diferente.",
      },
    },
  },
  {
    key: "forer-effect",
    icon: "asterisk",
    group: "Emotional and Behavioral Biases",
    translations: {
      en: {
        title: "Forer Effect (Barnum Effect)",
        description: "Believing vague, general statements are highly personal and accurate.",
      },
      es: {
        title: "Efecto Forer",
        description: "Creer que declaraciones vagas y generales son muy personales y precisas.",
      },
      "pt-br": {
        title: "Efeito Forer",
        description: "Acreditar que declarações vagas e gerais são altamente pessoais e precisas.",
      },
    },
  },
  {
    key: "illusion-of-control",
    icon: "hand-holding",
    group: "Emotional and Behavioral Biases",
    translations: {
      en: {
        title: "Illusion of Control",
        description: "Overestimating your ability to control external events.",
      },
      es: {
        title: "Ilusión de Control",
        description: "Sobreestimar tu capacidad de controlar eventos externos.",
      },
      "pt-br": {
        title: "Ilusão de Controle",
        description: "Superestimar sua capacidade de controlar eventos externos.",
      },
    },
  },
  {
    key: "impact-bias",
    icon: "wave-square",
    group: "Emotional and Behavioral Biases",
    translations: {
      en: {
        title: "Impact Bias",
        description: "Overestimating the emotional impact of future events, both positive and negative.",
      },
      es: {
        title: "Sesgo de Impacto",
        description: "Sobreestimar el impacto emocional de eventos futuros, tanto positivos como negativos.",
      },
      "pt-br": {
        title: "Viés de Impacto",
        description: "Superestimar o impacto emocional de eventos futuros, tanto positivos quanto negativos.",
      },
    },
  },
  {
    key: "naive-realism",
    icon: "eye",
    group: "Emotional and Behavioral Biases",
    translations: {
      en: {
        title: "Naïve Realism",
        description: "Believing you perceive the world objectively while others are biased.",
      },
      es: {
        title: "Realismo Ingenuo",
        description: "Creer que percibes el mundo de manera objetiva mientras que otros están sesgados.",
      },
      "pt-br": {
        title: "Realismo Ingênuo",
        description: "Acreditar que você percebe o mundo objetivamente enquanto os outros estão enviesados.",
      },
    },
  },
  {
    key: "negativity-bias",
    icon: "frown",
    group: "Emotional and Behavioral Biases",
    translations: {
      en: {
        title: "Negativity Bias",
        description: "Giving more weight to negative information or experiences than positive ones.",
      },
      es: {
        title: "Sesgo de Negatividad",
        description: "Dar más peso a la información o experiencias negativas que a las positivas.",
      },
      "pt-br": {
        title: "Viés de Negatividade",
        description: "Dar mais peso a informações ou experiências negativas do que às positivas.",
      },
    },
  },
  {
    key: "omission-bias",
    icon: "ban",
    group: "Emotional and Behavioral Biases",
    translations: {
      en: {
        title: "Omission Bias",
        description: "Preferring harm caused by inaction over harm caused by action.",
      },
      es: {
        title: "Sesgo de Omisión",
        description: "Preferir el daño causado por la inacción sobre el daño causado por la acción.",
      },
      "pt-br": {
        title: "Viés de Omissão",
        description: "Preferir danos causados pela inação em vez de danos causados por ações.",
      },
    },
  },
  {
    key: "pessimism-bias",
    icon: "cloud",
    group: "Emotional and Behavioral Biases",
    translations: {
      en: {
        title: "Pessimism Bias",
        description: "Overestimating the likelihood of negative outcomes.",
      },
      es: {
        title: "Sesgo de Pesimismo",
        description: "Sobreestimar la probabilidad de resultados negativos.",
      },
      "pt-br": {
        title: "Viés de Pessimismo",
        description: "Superestimar a probabilidade de resultados negativos.",
      },
    },
  },
  {
    key: "pollyanna-principle",
    icon: "sun",
    group: "Emotional and Behavioral Biases",
    translations: {
      en: {
        title: "Pollyanna Principle",
        description: "Remembering positive experiences more accurately than negative ones.",
      },
      es: {
        title: "Principio de Pollyanna",
        description: "Recordar las experiencias positivas más exactamente que las negativas.",
      },
      "pt-br": {
        title: "Princípio de Pollyanna",
        description: "Lembrar experiências positivas mais precisamente do que as negativas.",
      },
    },
  },
  {
    key: "pro-innovation-bias",
    icon: "lightbulb",
    group: "Emotional and Behavioral Biases",
    translations: {
      en: {
        title: "Pro-Innovation Bias",
        description: "Overvaluing innovations as inherently superior to existing solutions.",
      },
      es: {
        title: "Sesgo Pro-Innovación",
        description: "Sobrevalorar las innovaciones como inherentemente superiores a las soluciones existentes.",
      },
      "pt-br": {
        title: "Viés Pro-inovação",
        description: "Supervalorizar inovações como inerentemente superiores às soluções existentes.",
      },
    },
  },
  {
    key: "reactance",
    icon: "arrows-alt",
    group: "Emotional and Behavioral Biases",
    translations: {
      en: {
        title: "Reactance",
        description: "Reacting against rules or restrictions by doing the opposite.",
      },
      es: {
        title: "Reactancia",
        description: "Reaccionar contra reglas o restricciones haciendo lo contrario.",
      },
      "pt-br": {
        title: "Reatância",
        description: "Reagir contra regras ou restrições fazendo o oposto.",
      },
    },
  },
  {
    key: "reverse-psychology",
    icon: "sync-alt",
    group: "Emotional and Behavioral Biases",
    translations: {
      en: {
        title: "Reverse Psychology",
        description: "Encouraging someone to act by advocating for the opposite action.",
      },
      es: {
        title: "Psicología Inversa",
        description: "Animar a alguien a actuar abogando por la acción opuesta.",
      },
      "pt-br": {
        title: "Psicologia Reversa",
        description: "Incentivar alguém a agir defendendo a ação oposta.",
      },
    },
  },
  {
    key: "wishful-thinking",
    icon: "star",
    group: "Emotional and Behavioral Biases",
    translations: {
      en: {
        title: "Wishful Thinking",
        description: "Believing something is true because you want it to be true.",
      },
      es: {
        title: "Pensamiento Deseoso",
        description: "Creer que algo es cierto porque quieres que lo sea.",
      },
      "pt-br": {
        title: "Pensamento Desejoso",
        description: "Acreditar que algo é verdadeiro porque você quer que seja.",
      },
    },
  },
  {
    key: "zeigarnik-effect",
    icon: "tasks",
    group: "Emotional and Behavioral Biases",
    translations: {
      en: {
        title: "Zeigarnik Effect",
        description: "Remembering uncompleted tasks better than completed ones.",
      },
      es: {
        title: "Efecto Zeigarnik",
        description: "Recordar mejor las tareas incompletas que las completadas.",
      },
      "pt-br": {
        title: "Efeito Zeigarnik",
        description: "Lembrar melhor as tarefas inacabadas do que as concluídas.",
      },
    },
  },
    // 5. Probability and Statistical Biases
    {
      key: "base-rate-fallacy",
      icon: "percent",
      group: "Probability and Statistical Biases",
      translations: {
        en: {
          title: "Base Rate Fallacy",
          description: "Ignoring general probabilities in favor of specific information.",
        },
        es: {
          title: "Falacia de la Tasa Base",
          description: "Ignorar las probabilidades generales en favor de información específica.",
        },
        "pt-br": {
          title: "Falácia da Taxa Base",
          description: "Ignorar probabilidades gerais em favor de informações específicas.",
        },
      },
    },
    {
      key: "clustering-illusion",
      icon: "th-large",
      group: "Probability and Statistical Biases",
      translations: {
        en: {
          title: "Clustering Illusion",
          description: "Seeing patterns in random data when none exist.",
        },
        es: {
          title: "Ilusión de Agrupamiento",
          description: "Ver patrones en datos aleatorios donde no los hay.",
        },
        "pt-br": {
          title: "Ilusão de Agrupamento",
          description: "Ver padrões em dados aleatórios onde eles não existem.",
        },
      },
    },
    {
      key: "conjunction-fallacy",
      icon: "plus-circle",
      group: "Probability and Statistical Biases",
      translations: {
        en: {
          title: "Conjunction Fallacy",
          description: "Assuming specific conditions are more probable than general ones.",
        },
        es: {
          title: "Falacia de Conjunción",
          description: "Asumir que condiciones específicas son más probables que las generales.",
        },
        "pt-br": {
          title: "Falácia da Conjunção",
          description: "Assumir que condições específicas são mais prováveis do que gerais.",
        },
      },
    },
    {
      key: "survivorship-bias",
      icon: "chart-bar",
      group: "Probability and Statistical Biases",
      translations: {
        en: {
          title: "Survivorship Bias",
          description: "Focusing on successes while ignoring failures.",
        },
        es: {
          title: "Sesgo de Supervivencia",
          description: "Centrarse en los éxitos mientras se ignoran los fracasos.",
        },
        "pt-br": {
          title: "Viés de Sobrevivência",
          description: "Focar nos sucessos enquanto ignora os fracassos.",
        },
      },
    },
    {
      key: "texas-sharpshooter-fallacy",
      icon: "bullseye",
      group: "Probability and Statistical Biases",
      translations: {
        en: {
          title: "Texas Sharpshooter Fallacy",
          description: "Cherry-picking data to fit a conclusion or pattern.",
        },
        es: {
          title: "Falacia del Francotirador de Texas",
          description: "Seleccionar datos para que se ajusten a una conclusión o patrón.",
        },
        "pt-br": {
          title: "Falácia do Atirador do Texas",
          description: "Selecionar dados para que se ajustem a uma conclusão ou padrão.",
        },
      },
    },
    {
      key: "regression-to-the-mean",
      icon: "arrows-alt-h",
      group: "Probability and Statistical Biases",
      translations: {
        en: {
          title: "Regression to the Mean",
          description: "The tendency for extreme results to move closer to the average over time.",
        },
        es: {
          title: "Regresión a la Media",
          description: "La tendencia de que los resultados extremos se acerquen al promedio con el tiempo.",
        },
        "pt-br": {
          title: "Regressão à Média",
          description: "A tendência de resultados extremos se aproximarem da média ao longo do tempo.",
        },
      },
    },
    {
      key: "representativeness-heuristic",
      icon: "scale-balanced",
      group: "Probability and Statistical Biases",
      translations: {
        en: {
          title: "Representativeness Heuristic",
          description: "Judging probabilities based on how similar something is to a stereotype.",
        },
        es: {
          title: "Heurística de Representatividad",
          description: "Juzgar probabilidades según cuán similar sea algo a un estereotipo.",
        },
        "pt-br": {
          title: "Heurística de Representatividade",
          description: "Julgar probabilidades com base na semelhança de algo com um estereótipo.",
        },
      },
    },
    {
      key: "neglect-of-base-rates",
      icon: "database",
      group: "Probability and Statistical Biases",
      translations: {
        en: {
          title: "Neglect of Base Rates",
          description: "Ignoring statistical base rates in decision-making.",
        },
        es: {
          title: "Negligencia de las Tasas Base",
          description: "Ignorar las tasas base estadísticas al tomar decisiones.",
        },
        "pt-br": {
          title: "Negligência das Taxas Base",
          description: "Ignorar taxas base estatísticas na tomada de decisão.",
        },
      },
    },
    {
      key: "misunderstanding-correlation-causation",
      icon: "link",
      group: "Probability and Statistical Biases",
      translations: {
        en: {
          title: "Misunderstanding Correlation and Causation",
          description: "Believing correlation between two things implies causation.",
        },
        es: {
          title: "Confusión entre Correlación y Causalidad",
          description: "Creer que la correlación entre dos cosas implica causalidad.",
        },
        "pt-br": {
          title: "Confusão entre Correlação e Causalidade",
          description: "Acreditar que a correlação entre duas coisas implica causalidade.",
        },
      },
    },
    {
      key: "law-of-small-numbers",
      icon: "calculator",
      group: "Probability and Statistical Biases",
      translations: {
        en: {
          title: "The Law of Small Numbers",
          description: "Overestimating the reliability of results from small samples.",
        },
        es: {
          title: "Ley de los Números Pequeños",
          description: "Sobreestimar la fiabilidad de los resultados de muestras pequeñas.",
        },
        "pt-br": {
          title: "Lei dos Números Pequenos",
          description: "Superestimar a confiabilidade de resultados de amostras pequenas.",
        },
      },
    },
      // 6. Attention and Perception Biases
  {
    key: "attentional-bias",
    icon: "eye",
    group: "Attention and Perception Biases",
    translations: {
      en: {
        title: "Attentional Bias",
        description: "Focusing attention on certain stimuli while ignoring others, leading to distorted perceptions.",
      },
      es: {
        title: "Sesgo de Atención",
        description: "Centrar la atención en ciertos estímulos mientras se ignoran otros, lo que lleva a percepciones distorsionadas.",
      },
      "pt-br": {
        title: "Viés de Atenção",
        description: "Focar a atenção em certos estímulos enquanto ignora outros, levando a percepções distorcidas.",
      },
    },
  },
  {
    key: "confirmation-bias",
    icon: "search",
    group: "Attention and Perception Biases",
    translations: {
      en: {
        title: "Confirmation Bias",
        description: "Focusing on information that supports pre-existing beliefs while ignoring contradictory evidence.",
      },
      es: {
        title: "Sesgo de Confirmación",
        description: "Centrarse en información que respalde creencias existentes mientras se ignoran pruebas contradictorias.",
      },
      "pt-br": {
        title: "Viés de Confirmação",
        description: "Focar em informações que confirmam crenças existentes enquanto ignora evidências contraditórias.",
      },
    },
  },
  {
    key: "focusing-effect",
    icon: "bullseye",
    group: "Attention and Perception Biases",
    translations: {
      en: {
        title: "Focusing Effect",
        description: "Placing too much importance on one aspect of an event while ignoring others.",
      },
      es: {
        title: "Efecto de Focalización",
        description: "Dar demasiada importancia a un aspecto de un evento mientras se ignoran otros.",
      },
      "pt-br": {
        title: "Efeito de Focalização",
        description: "Dar importância excessiva a um aspecto de um evento enquanto ignora outros.",
      },
    },
  },
  {
    key: "neglect-of-base-rates",
    icon: "database",
    group: "Attention and Perception Biases",
    translations: {
      en: {
        title: "Neglect of Base Rates",
        description: "Ignoring statistical probabilities when evaluating evidence or making decisions.",
      },
      es: {
        title: "Negligencia de las Tasas Base",
        description: "Ignorar las probabilidades estadísticas al evaluar pruebas o tomar decisiones.",
      },
      "pt-br": {
        title: "Negligência das Taxas Base",
        description: "Ignorar probabilidades estatísticas ao avaliar evidências ou tomar decisões.",
      },
    },
  },
  {
    key: "salience-bias",
    icon: "exclamation-circle",
    group: "Attention and Perception Biases",
    translations: {
      en: {
        title: "Salience Bias",
        description: "Focusing on the most noticeable or emotionally striking elements, ignoring others.",
      },
      es: {
        title: "Sesgo de Saliencia",
        description: "Centrarse en los elementos más notorios o emocionalmente impactantes, ignorando otros.",
      },
      "pt-br": {
        title: "Viés de Saliência",
        description: "Focar nos elementos mais perceptíveis ou emocionalmente marcantes, ignorando outros.",
      },
    },
  },
  {
    key: "selective-perception",
    icon: "eye-slash",
    group: "Attention and Perception Biases",
    translations: {
      en: {
        title: "Selective Perception",
        description: "Allowing personal expectations or beliefs to influence how you perceive reality.",
      },
      es: {
        title: "Percepción Selectiva",
        description: "Permitir que expectativas o creencias personales influyan en cómo percibes la realidad.",
      },
      "pt-br": {
        title: "Percepção Seletiva",
        description: "Permitir que expectativas ou crenças pessoais influenciem como você percebe a realidade.",
      },
    },
  },
  {
    key: "spotlight-effect",
    icon: "lightbulb",
    group: "Attention and Perception Biases",
    translations: {
      en: {
        title: "Spotlight Effect",
        description: "Overestimating how much others notice or remember your actions.",
      },
      es: {
        title: "Efecto Foco",
        description: "Sobreestimar cuánto los demás notan o recuerdan tus acciones.",
      },
      "pt-br": {
        title: "Efeito Holofote",
        description: "Superestimar o quanto os outros notam ou lembram suas ações.",
      },
    },
  },
  {
    key: "tunnel-vision",
    icon: "binoculars",
    group: "Attention and Perception Biases",
    translations: {
      en: {
        title: "Tunnel Vision",
        description: "Focusing narrowly on one aspect of a situation while ignoring the broader context.",
      },
      es: {
        title: "Visión de Túnel",
        description: "Centrarse estrechamente en un aspecto de una situación mientras se ignora el contexto más amplio.",
      },
      "pt-br": {
        title: "Visão de Túnel",
        description: "Focar estreitamente em um aspecto de uma situação enquanto ignora o contexto mais amplo.",
      },
    },
  },
  {
    key: "egocentric-bias",
    icon: "user-circle",
    group: "Attention and Perception Biases",
    translations: {
      en: {
        title: "Egocentric Bias",
        description: "Focusing too much on your own perspective, often disregarding others’ viewpoints.",
      },
      es: {
        title: "Sesgo Egocéntrico",
        description: "Centrarse demasiado en la propia perspectiva, ignorando los puntos de vista de los demás.",
      },
      "pt-br": {
        title: "Viés Egocêntrico",
        description: "Focar demais em sua própria perspectiva, ignorando frequentemente os pontos de vista dos outros.",
      },
    },
  },
  {
    key: "framing-heuristic",
    icon: "images",
    group: "Attention and Perception Biases",
    translations: {
      en: {
        title: "Framing Heuristic",
        description: "Making judgments based on how information is presented, rather than the content itself.",
      },
      es: {
        title: "Heurística de Encuadre",
        description: "Hacer juicios basados en cómo se presenta la información, en lugar de en el contenido en sí.",
      },
      "pt-br": {
        title: "Heurística de Enquadramento",
        description: "Fazer julgamentos com base em como as informações são apresentadas, em vez do conteúdo em si.",
      },
    },
  },
];

export default biasFlashcards;
