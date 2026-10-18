export type PageId =
  | 'inicio'
  | 'ambientacao'
  | 'biografia'
  | 'lore'
  | 'cidade-aramor'
  | 'cidade-thessomar'
  | 'mapa'
  | 'racas-humanos'
  | 'racas-elfos'
  | 'classes'
  | 'heranca'
  | 'como-jogar'
  | 'sistemas'
  | 'vocabulario';

export const PAGE_TITLES: Record<PageId, string> = {
  inicio: 'Início',
  ambientacao: 'Ambientação',
  lore: 'Lore Completa',
  biografia: 'Biografias',
  'cidade-aramor': 'Aramor',
  'cidade-thessomar': 'Thessomar',
  mapa: 'Mapa do Continente',
  'racas-humanos': 'Humanos',
  'racas-elfos': 'Elfos',
  classes: 'Classes',
  heranca: 'A Herança',
  'como-jogar': 'Como Jogar',
  sistemas: 'Sistemas',
  vocabulario: 'Vocabulário Élfico',
};

export const HERO_BY_PAGE: Record<PageId, string> = {
  inicio: '/images/hero-banner.jpg',
  lore: '/images/hero-banner.jpg',
  ambientacao: '/images/hero-banner.jpg',
  biografia: '/images/cidade-aramor.jpg',
  'cidade-aramor': '/images/cidade-aramor.jpg',
  'cidade-thessomar': '/images/porto-vila-banner.jpg',
  mapa: '/images/mapa.png',
  'racas-humanos': '/images/race-humano.jpg',
  'racas-elfos': '/images/race-meioelfo.jpg',
  classes: '/images/hero-banner.jpg',
  heranca: '/images/bau-glacial.jpg',
  'como-jogar': '/images/hero-banner.jpg',
  sistemas: '/images/hero-banner.jpg',
  vocabulario: '/images/race-meioelfo.jpg',
};

export const MENU = [
  {
    label: 'Ambientação',
    children: [
      {id: 'lore', label: 'Lore Completa'},
      { id: 'ambientacao', label: 'Panorama Geral' },
      { id:'biografia', label: 'Biografias'},
      { id: 'heranca', label: 'A Herança' },
    ],
  },
  {
    label: 'Cidade',
    children: [
      { id: 'cidade-aramor', label: 'Aramor' },
      { id: 'cidade-thessomar', label: 'Thessomar' },
    ],
  },
  {
    label: 'Mapa',
    children: [{ id: 'mapa', label: 'Continente de Myrthos' }],
  },
  {
    label: 'Raças',
    children: [
      { id: 'racas-humanos', label: 'Humanos' },
      { id: 'racas-elfos', label: 'Elfos' },
    ],
  },
  {
    label: 'Classes',
    children: [{ id: 'classes', label: 'Arquétipos & Profissões' }],
  },
  {
    label: 'Como Jogar?',
    children: [
      { id: 'como-jogar', label: 'Download do jogo' },
      { id: 'sistemas', label: 'Sistemas' },
    ],
  },
  {
    label: 'Vocabulário Élfico',
    children: [{ id: 'vocabulario', label: 'Quenya Cerimonial' }],
  },
] as const;

export const TIMELINE = [
  {
    year: '0–122',
    title: 'Divisão dos Povos e Guerras Antigas',
    text: 'Após a Guerra Divina, humanos e anões permaneceram nas Terras do Oeste, enquanto os elfos foram isolados no leste. Séculos depois, reinos humanos cresceram, ordens arcanas se dividiram e artefatos antigos passaram a moldar o destino do mundo.',
  },
  {
    year: '1400–1408',
    title: 'Descoberta de Myrthos',
    text: 'Batedores do Continente-Mãe de Volund avistaram a grande massa de terra a leste. Em poucos anos, partiu a maior esquadra já reunida pela Confederação Volundiana, e a colônia de Belaryar foi erguida sobre as ruínas de antigos territórios órquicos.',
  },
  {
    year: '1412–1429',
    title: 'A Fenda de Alkron',
    text: 'Incursões ao sul de Eresiere romperam um dos antigos Selos de Alkron. Daquela imprudência nasceu a influência do Devorador, uma entidade ancestral que se espalhou por florestas, ruínas e poços rituais do continente.',
  },
  {
    year: '1418',
    title: 'Fundação de Porto-Vila (Hoje Aramor)',
    text: 'A fortaleza-portuária de Porto-Vila foi erguida pela Confederação para cobrar impostos, controlar os rebeldes da colônia e garantir o escoamento de metais, grãos e relíquias para o oeste.',
  },
  {
    year: '1423–1429',
    title: 'Êxodo Élfico e Ruptura Colonial',
    text: 'Os elfos deixaram Belaryar e fundaram refúgios florestais próprios. Ao mesmo tempo, a elite humana local rompeu com os administradores enviados por Volund, mergulhando a colônia numa sucessão de golpes, massacres e conselhos provisórios.',
  },
  {
    year: '1430',
    title: 'A Noite Carmesim',
    text: 'Na noite em que os drows estenderam a escuridão e cercaram Belaryar, o Devorador irrompeu e consumiu cidade, invasores e defensores. Os últimos sobreviventes recuaram para Porto-Vila. O casal regente morreu diante dos portões da fortaleza, salvando colonos até o último instante.',
  },
  {
    year: '1430–1630',
    title: 'Dois Séculos de Pedra e Ressentimento',
    text: 'Com a queda da colônia, Porto-Vila foi controlada pela Casa Vannemere, rebatizada Aramor e transformada em sede da Coroa em Myrthos. Do outro lado da Baía dos Mortos cresceu Pont\'Alma — hoje Thessomar —, povoado de artesãos, exilados e descendentes coloniais. Há cerca de cinquenta anos (c. 1580), o Sumo Sacerdote Caelus Aethonnar desapareceu ao tentar purificar Eresiere, tornando-se o Senhor dos mortos-vivos da região.',
  },
  {
    year: '1630',
    title: 'A Nova Fase',
    text: 'Duzentos anos após a ruína de Belaryar, Myrthos entra numa nova era. Aramor mantém a monarquia da Casa Vannemere e a Herança; Thessomar cresce como cidade mercantil e indisciplinada; e o passado devorado pela noite volta a chamar pelo presente.',
  },
];

export const POLITICS = [
  {
    title: 'Aramor — A Cidade da Coroa',
    text: 'Fortaleza marítima e capital régia de Myrthos. Governada pela Casa Vannemere, concentra a Armada, a arrecadação e os velhos nobres de origem volundiana. Defende a legitimidade da monarquia e o direito exclusivo de custodiar a Herança.',
  },
  {
    title: 'Thessomar — A Cidade dos Vivos',
    text: 'Nascida como povoado de desafogo e exílio, Thessomar tornou-se rica com docas, oficinas, contrabando e caravanas. Seus conselhos mercantis obedecem à Coroa apenas até o ponto em que a sobrevivência permite.',
  },
  {
    title: 'Belaryar — A Colônia Morta',
    text: 'Não existe mais como cidade viva, mas ainda governa a política do continente. Todo debate sobre nobreza, culpa, raça, impostos e sucessão termina, cedo ou tarde, na pergunta: quem deixou Belaryar cair?',
  },
  {
    title: 'A Baía dos Mortos',
    text: 'Braço marítimo entre Aramor e Thessomar. Liga as duas cidades por moeda, sal, grão, rumores e deserções. Também é o primeiro lugar onde os sinais do Devorador voltam a ser vistos quando algo desperta em Myrthos.',
  },
];

export const CITY_ARAMOR = {
  title: 'Aramor',
  subtitle: 'Fortaleza portuária da Coroa e sede da Casa Vannemere',
  intro:
    'Aramor substitui o antigo ideal de colônia livre por uma cidade de muralhas altas, ruas estreitas e poder centralizado. Foi construída para cobrar, vigiar e resistir. Duzentos anos depois, ainda cumpre as três funções.',
  bullets: [
    'A monarquia da Casa Vannemere governa a partir do poder do Clero de Aethelgard e com a riqueza da Realeza.',
    'A Herança permanece guardada no quarto do soberano, num baú de madeira azulada que parece gelo.',
    'Os velhos nobres volundianos dominam o Exército, as construções e a arrecadação.',
    'Elfos residentes costumam atuar como escribas, arqueiros de muralha, eruditos, magos e diplomatas silenciosos.',
  ],
  districts: [
    {
      name: 'Palácio Real',
      desc: 'Residência da Casa Vannemere, sede dos conselhos e lugar onde o Baú Glacial permanece ao lado da cama do soberano.',
    },
    {
      name: 'Muralha Alta',
      desc: 'Corredores de vigia, baluartes e arsenais onde a Armada da Coroa mantém prontidão constante.',
    },
    {
      name: 'Baixo Cais',
      desc: 'Docas ativas voltadas para a Baía dos Mortos, estaleiros navais, depósitos selados e fiscalização de cargas.',
    },
    {
      name: 'Bairro do Povo',
      desc: 'Manufaturas finas, costureiros, escribas, capelas e casas de famílias reconhecidas pela Coroa.',
    },
  ],
};

export const CITY_THESSOMAR = {
  title: 'Thessomar',
  subtitle: 'Oásis dos exilados, comércio clandestino e fronteira do deserto',
  intro:
    'Erguida do outro lado da Baía dos Mortos em um oásis verdejante cercado por dunas, Thessomar nasceu para desafogar o crescimento de Aramor. Hoje é uma cidade de madeira e areia onde exilados, artesãos sem títulos, mercenários e descendentes da arruinada Belaryar prosperam à margem da lei régia.',
  bullets: [
    'Um oásis cortado por um riacho e pontes de madeira, encravado entre a praia desértica e as dunas escaldantes.',
    'Habitada por exilados banidos de Aramor e descendentes de Belaryar — governados internamente pelo Conselho Mercantil.',
    'Palco de lutas clandestinas e mercados informais que atraem até mesmo moradores de Aramor atravessando a baía.',
    'A Armada de Aramor vigia apenas a travessia marítima e a praia externa, evitando adentrar os becos e a Baixada das Apostas, onde mercenários e desertores ditam a própria lei.',
  ],
  districts: [
    {
      name: 'Trapiche das Areias',
      desc: 'Ancoradouro rústico de madeira na praia por onde chegam exilados, suprimentos e pequenos barcos vindos da Baía dos Mortos.',
    },
    {
      name: 'Vila do Riacho',
      desc: 'Coração da povoação, composto por casas de madeira erguidas ao longo da água e pontes que conectam tavernas, oficinas e moradias.',
    },
    {
      name: 'Currais da Fronteira',
      desc: 'Cercados de madeira na transição para a areia, usados para guardar montarias, criação de gado e preparação de caravanas para o deserto.',
    },
    {
      name: 'Baixada das Apostas',
      desc: 'Pátio periférico onde ocorrem as lutas clandestinas e o recrutamento de guarda-costas e mercenários para expedições nos ermos.',
    },
  ],
};

export const HUMAN_RACE = {
  intro:
    'Os humanos de Myrthos são o povo da adaptação, da ambição e da persistência política. Construíram impérios, colônias, muralhas e pactos; também falharam em todos eles pelo menos uma vez.',
  groups: [
    {
      name: 'Armorianos',
      desc: 'Cidadãos de Aramor, regidos pela monarquia da Casa Vannemere. O Lorde Regente Aldric Vannemere governa com mão de ferro como rei de fato, enquanto os cidadãos se desdobram para sobreviver e compreender os segredos da Coroa.',
    },
    {
      name: 'Thessomarianos',
      desc: 'Descendentes dos sobreviventes de Belaryar. Cresceram ouvindo versões truncadas da queda da colônia e, em geral, vivem em Thessomar ou nos arredores. São vistos com desconfiança pelos nobres de Aramor, como se herdassem culpas que não cometeram.',
    },
    {
      name: 'Volundianos',
      desc: 'Vindos do continente-mãe de Volund ou descendentes diretos dos oficiais que fundaram Belaryar. Militares, burocratas, juristas, navegadores e pequenos nobres sem grande fortuna no oeste. Consideram-se os guardiões da ordem legítima em Myrthos.',
    },
  ],
};

export const ELF_RACE = {
  intro:
    'Os elfos de Myrthos já não vivem a plenitude de suas antigas florestas. Falam o idioma cerimonial apenas em ritos, juramentos, funerais e documentos de peso. No cotidiano, negociam em comum — mas sempre deixam escapar uma palavra antiga quando a emoção é real demais.',
  groups: [
    {
      name: 'Filhos de Silmalen',
      desc: 'Descendentes dos elfos que permaneceram próximos dos humanos após a ruína de Belaryar. Alguns servem como arqueiros, boticários, escribas ou guias. Costumam carregar hábitos antigos fragmentados, mais memória do que tradição intacta.',
    },
    {
      name: 'Exilados do Oriente',
      desc: 'Poucos e raros, chegam de enclaves élficos remotos para auxiliar parentes perdidos, investigar ruínas e recuperar peças do que foi destruído na grande noite. São mais ligados aos velhos ritos, à liturgia e à linguagem cerimonial.',
    },
  ],
};

/* ─────────────────────────── TIPOS ─────────────────────────── */

export interface Deity {
  name: string;
  epithet: string;
  icon: string;
  alignment: string;
  aspects: string[];
  dogma: string;
  followers: string;
  tone: 'gold' | 'green' | 'red' | 'blue' | 'default';
}

export interface Biography {
  name: string;
  epithet: string;
  icon: string;
  race: string;
  age: string;
  role: string;
  tag: string;
  tagTone: 'gold' | 'green' | 'red' | 'blue' | 'default';
  healthBars?: number;          // 0–5 blocos preenchidos (omitir = não exibir)
  description: string;
  secrets?: { label: string; text: string }[];
  quote?: string;
  narrativeHint?: string;
}

export interface CityLocation {
  name: string;
  icon: string;
  keeper: string;
  desc: string;
  tag: string;
  tagTone: 'gold' | 'green' | 'red' | 'blue' | 'default';
}

/* ─────────────────────────── PANTEÃO ─────────────────────────── */

export const DEITIES: Deity[] = [
  {
    name: 'Aethelgard',
    epithet: 'O Vigilante',
    icon: '',
    alignment: 'Leal e Neutro (Doutrina de Ferro)',
    aspects: ['Luz', 'Proteção', 'Lei', 'Sacrifício'],
    dogma:
      'A sobrevivência exige ordem absoluta e obediência à Coroa. A fraqueza da mente abre as portas para a escuridão. A Herança é dádiva divina concedida por Aethelgard para salvar os puros, e seu Clero venera também seus três aspectos sagrados: Aeghor (o Martelo da Forja e das Muralhas), Seralyn (a Chama do Abrigo e da Cura) e Noctavar (o Olho Implacável do Julgamento). Aqueles que questionam a guarda da Herança são traidores da própria vida.',
    followers: 'Humanos de Aramor — Clero oficial da Coroa e suas três ordens (Aeghor, Seralyn e Noctavar)',
    tone: 'gold',
  },
  {
    name: 'Silvaris',
    epithet: 'O Coração da Floresta',
    icon: '',
    alignment: 'Neutro Puro',
    aspects: ['Natureza', 'Silêncio', 'Ciclo da Vida', 'Ancestralidade'],
    dogma:
      'O mundo está em desequilíbrio porque a pedra e o metal tentam prender o que deveria seguir seu curso natural. Silvaris não promete vida eterna, mas o retorno à terra. Na antiga liturgia élfica, sua memória etérica é reverenciada sob o nome cerimonial de Vaelithra, o Fio Invisível. Seus adoradores buscam restaurar as florestas corrompidas e acreditam que a magia natural — não artefatos de poder centralizado — é a única arma capaz de purificar Myrthos.',
    followers: 'Elfos — Filhos de Silmalen, Exilados do Oriente e Tecelãs de Vaelithra',
    tone: 'green',
  },
  {
    name: 'O Devorador',
    epithet: 'O Que Consome',
    icon: '',
    alignment: 'Caótico Maligno (Entidade Ancestral)',
    aspects: ['Fome', 'Corrupção', 'Morte', 'Esquecimento'],
    dogma:
      'O Devorador não tem dogma escrito — não precisa de templos, escrituras ou sermões. Sua presença é uma doença: se espalha por florestas, ruínas e poços rituais, corrompendo o que toca. Nasceu da imprudência dos colonizadores que romperam os Selos de Alkron ao sul de Eresiere. Na Noite Carmesim, irrompeu e consumiu Belaryar inteira — cidade, invasores e defensores. Dois séculos depois, os sinais voltam: a Baía dos Mortos escurece, animais enlouquecem, os selos enfraquecem e a marca negra no peito de quem tocou a Herança se espalha como gangrena silenciosa. O Devorador não quer adoração. Quer que tudo cesse.',
    followers: 'Nenhum culto formal — mas necromantes, desesperados e cultistas da ruína o invocam nas sombras',
    tone: 'red',
  },
];

/* ──────────────── BIOGRAFIAS — ARAMOR (Família Real) ──────────────── */

export const BIOS_ARAMOR_REALEZA: Biography[] = [
  {
    name: 'Lorde Aldric Vannemere',
    epithet: 'O Rei que Não É Rei',
    icon: '',
    race: 'Humano',
    age: '54 anos',
    role: 'Lorde Regente e Soberano de Aramor',
    tag: 'MARCADO',
    tagTone: 'red',
    healthBars: 3,
    description:
      'Governa com poder absoluto de rei, embora mantenha por tradição o título formal de Lorde Regente da Coroa de Aramor. Orgulhoso demais para pedir ajuda, inteligente demais para não saber que precisa dela. Há quatro anos, ao investigar os tremores nos pilares das catacumbas, abriu o Baú Glacial em seu quarto e tocou a Herança para conter a ressonância — contraindo uma marca negra no peito. Não dorme desde então, enquanto o corpo apodrece em silêncio.',
    secrets: [
      { label: 'Segredo', text: 'Tocou a Herança no Baú Glacial. A marca se espalha.' },
      { label: 'Motivação', text: 'Proteger Aramor e Seraphine a qualquer custo.' },
    ],
    quote: 'Não me tragam problemas. Me tragam soluções com problemas menores.',
  },
  {
    name: 'Lady Seraphine Vannemere',
    epithet: 'A Herdeira Impossível',
    icon: '',
    race: 'Meio-Elfa (Sangue Vannemere & Silmalen)',
    age: '26 anos',
    role: 'Herdeira da Casa Vannemere',
    tag: 'ALIADA',
    tagTone: 'green',
    healthBars: 4,
    description:
      'Onde Aldric é frio, Seraphine queima. Filha de Aelindra, uma elfa de linhagem antiga ligada aos sobreviventes de Belaryar — segredo que o pai oculta da corte. Olhos de um verde impossível. Nunca saiu da cidade. É a principal contratante dos aventureiros que chegam a Aramor.',
    secrets: [
      { label: 'Segredo', text: 'Sangue élfico materno ocultado pela Coroa.' },
      { label: 'Motivação', text: 'Salvar Aramor. Descobrir sua origem.' },
    ],
    quote: 'Meu pai governa dos muros para dentro. Alguém precisa olhar para fora.',
  },
  {
    name: 'Edric Vannemere',
    epithet: 'O Pequeno Lorde',
    icon: '',
    race: 'Humano',
    age: '8 anos',
    role: 'Filho de Aldric',
    tag: 'INOCENTE',
    tagTone: 'blue',
    description:
      'Filho de Aldric com a segunda esposa. Foge dos tutores para explorar os muros. Carrega um soldadinho de pedra — pois a madeira da cidade é estritamente racionada para os estaleiros da Armada e barricadas desde o fechamento do Portão Oeste. Sente os muros vibrarem. Ninguém o leva a sério.',
    secrets: [
      { label: 'Habilidade', text: 'Sente energia mágica nos muros.' },
      { label: 'Utilidade', text: 'Conhece todas as passagens secretas.' },
    ],
    quote: 'Shhhh. Encosta o ouvido. Tá ouvindo? A parede tá cantando.',
  },
  {
    name: 'Cinza',
    epithet: 'O Sentinela Silencioso',
    icon: '',
    race: 'Mastim de Guerra',
    age: '11 anos',
    role: 'Cão Real de Aldric',
    tag: 'FIEL',
    tagTone: 'default',
    description:
      'Enorme, cinzento, um olho cego. Não se afasta de Aldric porque sente que algo está errado com o dono. Rosna para as entradas das catacumbas toda noite, sentindo os pilares subterrâneos cederem, e fareja a marca negra no peito do rei.',
    narrativeHint: 'Cinza é um detector vivo. Se ele rosna para alguém na corte, os jogadores deveriam prestar atenção.',
  },
];

/* ──────────────── BIOGRAFIAS — ARAMOR (Conselho) ──────────────── */

export const BIOS_ARAMOR_CONSELHO: Biography[] = [
  {
    name: 'Magnus Delorvane',
    epithet: 'A Balança',
    icon: '',
    race: 'Humano',
    age: '67 anos',
    role: 'Conselheiro Geral — Mago (Nível 9)',
    tag: 'SUSPEITO',
    tagTone: 'gold',
    description:
      'Serviu três gerações Vannemere. Metódico, justo, irritantemente neutro. Quando jovem, há quarenta anos, foi o último arcano vivo a participar do ritual periódico de renovação dos encantamentos do Baú Glacial — e sabe que as proteções da Herança estão enfraquecendo antes do tempo.',
    secrets: [
      { label: 'Segredo 1', text: 'Corresponde-se com Thessomar.' },
      { label: 'Segredo 2', text: 'Suspeita que a Herança foi tocada.' },
    ],
    quote: 'Antes de agir: e depois? E depois do depois? É no terceiro "depois" que as civilizações caem.',
  },
  {
    name: 'General Roderic Ashburn',
    epithet: 'O Punho de Ferro',
    icon: '',
    race: 'Humano',
    age: '51 anos',
    role: 'Conselheiro Militar — Guerreiro (Nível 11)',
    tag: 'TRAUMATIZADO',
    tagTone: 'red',
    description:
      'Dois metros. Ombros de porta. Cabeça raspada com cicatriz de combate. Usa armadura até para dormir. Liderou uma expedição recente a Eresiere com 40 soldados; voltou com apenas 7. Nunca explicou o que aconteceu.',
    secrets: [
      { label: 'Trauma', text: 'Abandonou soldados feridos em Eresiere.' },
      { label: 'Objetivo', text: 'Voltar e tomar Eresiere pela força.' },
    ],
    quote: 'Me deem madeira para escudos e homens para segurá-los. Dou a vocês uma estrada até o inferno.',
  },
  {
    name: 'Dona Imelda Ferrani',
    epithet: 'A Aranha de Ouro',
    icon: '💰',
    race: 'Humana',
    age: '45 anos',
    role: 'Conselheira Comercial — Ladina (Nível 7)',
    tag: 'PERIGOSA',
    tagTone: 'red',
    description:
      'Nasceu nas casinhas de aluguel. Subiu por inteligência e crueldade calculada. Usa luvas para esconder queimaduras de ácido das minas onde trabalhou na infância. Controla o mercado negro de Aramor.',
    secrets: [
      { label: 'Segredo', text: 'Contrabando ativo com Thessomar.' },
      { label: 'Risco', text: 'Thessomar quer confirmar onde está a Herança.' },
    ],
    quote: 'Ouro não compra lealdade. Compra opções. Lealdade é para quem não tem opções.',
  },
  {
    name: 'Bispo Maren Tolvier',
    epithet: 'O Pastor Gordo',
    icon: '🙏',
    race: 'Humano',
    age: '58 anos',
    role: 'Conselheiro Religioso — Clérigo de Aethelgard',
    tag: 'PENITENTE',
    tagTone: 'gold',
    description:
      'Gordo, suado, nervoso — máscara perfeita para um homem com uma rede de informantes inigualável. Na juventude foi um clérigo guerreiro e entrou sozinho em Eresiere em busca dos restos da cruzada do antigo Sumo Sacerdote Caelus Aethonnar. O que encontrou lá o quebrou.',
    secrets: [
      { label: 'Segredo', text: 'O Senhor de Eresiere é o antigo Sumo Sacerdote Caelus Aethonnar.' },
      { label: 'Medo', text: 'A verdade destruiria a fé do povo em Aethelgard.' },
    ],
    quote: 'Aethelgard nos p-protege, sim... mas proteção não significa ausência de d-dor.',
  },
  {
    name: 'Nara Vidigal',
    epithet: 'A Voz dos Sem-Voz',
    icon: '🌿',
    race: 'Humana',
    age: '38 anos',
    role: 'Conselheira do Povo — Patrulheira Urbana',
    tag: 'ALIADA DO POVO',
    tagTone: 'green',
    description:
      'Mineradora que organizou a única greve trabalhista de Aramor. Aldric a nomeou por medo. Grita no conselho. Bate na mesa. Diz verdades. Tem botas de trabalho no Salão Real e se recusa a trocá-las.',
    secrets: [
      { label: 'Segredo', text: 'Milícia secreta de 100 trabalhadores.' },
      { label: 'Sabe sobre', text: 'O contrabando de Imelda (arma guardada).' },
    ],
    quote: 'ESCUTEM O SOM DO ESTÔMAGO VAZIO. É mais alto que qualquer dragão.',
  },
];

/* ──────────────── BIOGRAFIAS — ARAMOR (Servos & Cozinha) ──────────────── */

export const BIOS_ARAMOR_SERVOS: Biography[] = [
  {
    name: 'Bartolomeu "Barto" Ossar',
    epithet: 'O Rei da Cozinha',
    icon: '🍖',
    race: 'Humano',
    age: '62 anos',
    role: 'Chef Real',
    tag: 'NPC CHAVE',
    tagTone: 'gold',
    description:
      'Tirano na cozinha, doce fora dela. Território neutro — ninguém briga na cozinha de Barto. Nasceu em Thessomar. Tem um filho lá que nunca conheceu, que agora é capitão mercenário a serviço da cidade rival.',
    narrativeHint: 'Sabe de tudo que ocorre na corte através de servos. Solta informações disfarçadas de histórias se os jogadores sentarem e comerem.',
    quote: 'Senta. Come. Depois a gente fala de monstros. Ninguém salva o mundo de barriga vazia.',
  },
  {
    name: 'Lena "Lâmina" Corte',
    epithet: 'A Faca Gentil',
    icon: '🔪',
    race: 'Humana',
    age: '29 anos',
    role: 'Subchef — Ex-Ladra',
    tag: 'RECRUTÁVEL',
    tagTone: 'blue',
    description:
      'Manipula facas com velocidade de assassina. Tem contatos no submundo. Quer aventura. Pode ser recrutada para infiltração ou como aliada de faca.',
    quote: 'Eu corto cebola em 32 pedaços em 4 segundos. Imagina o que faço com quem me irrita.',
  },
  {
    name: 'Pippin',
    epithet: 'O Menino Invisível',
    icon: '🍪',
    race: 'Humano (Órfão do Cais)',
    age: '14 anos',
    role: 'Ajudante de Cozinha',
    tag: 'SABE DEMAIS',
    tagTone: 'red',
    description:
      'Franzino e silencioso, ninguém nota Pippin nos corredores do Palácio Real. Por isso ele ouve tudo. Há quatro anos, viu Aldric subir lívido das catacumbas e abrir o Baú Glacial no quarto real. Viu a Herança. Viu a marca negra nascer no peito do rei. Não contou para ninguém — está esperando a pessoa certa perguntar.',
    quote: '...eu? Não, senhor. Eu não vi nada. ...Quer um biscoito?',
  },
  {
    name: 'Dona Helga Strenn',
    epithet: 'A Fortaleza de Saias',
    icon: '🗝️',
    race: 'Humana',
    age: '60 anos',
    role: 'Camareira-Mor — Guardiã de Segredos',
    tag: 'GUARDIÃ',
    tagTone: 'gold',
    description:
      'Cabelos brancos presos como uma lança. Tem todas as chaves da Casa Real. Era camareira de Aelindra — a mãe élfica de Seraphine. Guarda em seu quarto os pertences de Aelindra, incluindo um medalhão que brilha no escuro — uma chave para algo desconhecido.',
    narrativeHint: 'Se os jogadores conquistarem sua confiança provando que protegerão Seraphine, ela entrega o medalhão e revela a herança élfica da herdeira.',
    quote: 'Vocês enfrentam dragões? Que adorável. Eu enfrento a incompetência humana há quarenta anos.',
  },
  {
    name: 'Rosalie "Rosie" Demarc',
    epithet: 'A Flor no Telhado',
    icon: '🌸',
    race: 'Humana',
    age: '22 anos',
    role: 'Camareira — Romance Secreto',
    tag: 'VULNERÁVEL',
    tagTone: 'blue',
    description:
      'Gentil, sonhadora, cultiva flores no telhado. Apaixonada pelo guarda Thomaz — que está sendo subornado por Thessomar. Ela não sabe. Dilema moral para os jogadores.',
    quote: 'Se a gente não sonha... pra quê sobreviver?',
  },
  {
    name: 'Mira Blackhollow',
    epithet: 'A Sombra Sem Rosto',
    icon: '👁️',
    race: 'Humana',
    age: '31 anos',
    role: 'Camareira — Identidade Real: VESPRA',
    tag: 'INFILTRADA',
    tagTone: 'red',
    description:
      'Agressivamente comum. Ninguém a nota. É uma agente da Teia Silente — rede clandestina de informantes que usa alquimia de disfarce e véus sutis do éter para servir à informação, não a nações. Está há 5 anos infiltrada na corte. Começou a gostar dessas pessoas.',
    quote: 'Eu, senhora? Sou apenas Mira. Não há nada interessante em mim.',
  },
  {
    name: 'Agnes "Velha Agnes" Morvane',
    epithet: 'A Memória de Aramor',
    icon: '👵',
    race: 'Humana',
    age: '79 anos',
    role: 'Camareira Veterana',
    tag: 'URGENTE',
    tagTone: 'red',
    description:
      'Serviu três gerações Vannemere. Está ficando cega, mas a memória é perfeita. Sabe de passagens secretas que nem Edric encontrou. Na juventude, há cinquenta anos, conheceu o Sumo Sacerdote Caelus Aethonnar antes de sua fatídica cruzada a Eresiere — e jura que ele era um homem gentil e santo. Está morrendo e tem poucos meses para revelar o que sabe.',
    quote: 'Eu limpei a bunda do seu Lorde Regente quando ele tinha dois anos. Não me venham com "Vossa Excelência".',
  },
];

/* ──────────────── BIOGRAFIAS — THESSOMAR ──────────────── */

export const BIOS_THESSOMAR: Biography[] = [
  {
    name: 'Darren Ossar',
    epithet: 'O Filho que Ninguém Reclamou',
    icon: '⚔️',
    race: 'Humano',
    age: '34 anos',
    role: 'Capitão Mercenário — Companhia da Areia',
    tag: 'AMARGO',
    tagTone: 'red',
    healthBars: 4,
    description:
      'Filho de Barto, o chef real de Aramor — mas nunca soube disso. Cresceu nas pontes de madeira de Thessomar, comendo peixe seco e aprendendo que ninguém deve nada a ninguém. Comanda a Companhia da Areia, trinta mercenários que escoltam caravanas pelo Deserto Quebrado. Brutal, justo com os seus e incapaz de perdoar Aramor por ter exilado a mãe.',
    secrets: [
      { label: 'Segredo', text: 'Filho de Barto Ossar (nenhum dos dois sabe).' },
      { label: 'Objetivo', text: 'Tornar Thessomar independente da Coroa.' },
    ],
    quote: 'Aramor exporta lei. Nós exportamos gente que sobrevive apesar da lei.',
  },
  {
    name: 'Vereadora Lysandra Marek',
    epithet: 'A Rainha Sem Coroa',
    icon: '📜',
    race: 'Humana',
    age: '49 anos',
    role: 'Líder do Conselho Mercantil de Thessomar',
    tag: 'CALCULISTA',
    tagTone: 'gold',
    healthBars: 5,
    description:
      'Filha de um carpinteiro de barcos e uma contadora de Belaryar, Lysandra é a política mais habilidosa de Myrthos que ninguém em Aramor admite respeitar. Comanda o Conselho Mercantil com votos, favores e ameaças veladas. Mantém Thessomar viva negociando grãos com a Coroa e armas com quem não deveria.',
    secrets: [
      { label: 'Segredo', text: 'Negocia com Magnus Delorvane em segredo.' },
      { label: 'Objetivo', text: 'Conseguir assento formal no Conselho de Aramor para Thessomar.' },
    ],
    quote: 'Eles nos chamam de exilados. Eu chamo de mercado consumidor que eles não podem perder.',
  },
  {
    name: '"Ferrão" Kassim',
    epithet: 'O Campeão da Areia',
    icon: '🥊',
    race: 'Humano',
    age: '41 anos',
    role: 'Campeão da Baixada das Apostas',
    tag: 'IMBATÍVEL',
    tagTone: 'gold',
    description:
      'Ex-soldado da Armada de Aramor que desertou após receber ordem de enforcar prisioneiros de guerra elfos. Fugiu para Thessomar. Encontrou nas lutas clandestinas da Baixada das Apostas um trono sem coroa. Trinta e sete lutas, trinta e sete vitórias. Mãos como bigorna. Coração surpreendentemente gentil com crianças e bêbados.',
    secrets: [
      { label: 'Segredo', text: 'Desertor procurado pela Armada — cabeça vale 500 moedas.' },
      { label: 'Código', text: 'Nunca mata no ringue. Diz que já matou demais.' },
    ],
    quote: 'Quer saber por que nunca perdi? Porque já perdi tudo antes de entrar no ringue.',
  },
  {
    name: 'Velha Tessara',
    epithet: 'A Última Testemunha',
    icon: '🌙',
    race: 'Elfa',
    age: '347 anos',
    role: 'Herbalista — Sobrevivente de Belaryar',
    tag: 'RELÍQUIA VIVA',
    tagTone: 'blue',
    description:
      'Uma das últimas pessoas vivas que esteve em Belaryar na Noite Carmesim. Perdeu o marido, três filhos e toda a esperança naquela noite. Vive na Vila do Riacho cultivando ervas medicinais e falando sozinha em quenya cerimonial. Os thessomarianos a tratam com reverência e medo — como se tocar nela fosse tocar no passado.',
    secrets: [
      { label: 'Segredo', text: 'Sabe que o Devorador não foi destruído — apenas adormeceu.' },
      { label: 'Medo', text: 'Reconhece os sinais de que ele está acordando.' },
    ],
    quote: 'Vocês leem sobre a Noite Carmesim nos livros. Eu ainda sinto o cheiro.',
  },
  {
    name: 'Capitão Voss "Maré Negra"',
    epithet: 'O Senhor da Travessia',
    icon: '🏴‍☠️',
    race: 'Humano',
    age: '39 anos',
    role: 'Contrabandista — Senhor da Baía dos Mortos',
    tag: 'PERIGOSO',
    tagTone: 'red',
    description:
      'Controla as rotas de contrabando da Baía dos Mortos. Três navios, vinte homens leais e uma reputação que faz a Armada fingir que ele não existe — porque metade do abastecimento de Aramor passa pelas mãos dele. Não tem ideologia: serve quem paga. Mas ultimamente os peixes estão morrendo na baía, e ele sabe que isso não é natural.',
    secrets: [
      { label: 'Segredo', text: 'A Armada o usa para operações que não pode assinar.' },
      { label: 'Perigo', text: 'A baía está mudando — águas escuras, peixes mortos, luzes no fundo.' },
    ],
    quote: 'Eu não contrabandeiro. Eu entrego o que as pessoas precisam onde o rei acha que não deveria chegar.',
  },
  {
    name: 'Miriel Tindómë',
    epithet: 'A Sombra do Oriente',
    icon: '🌿',
    race: 'Elfa — Exilada do Oriente',
    age: '189 anos',
    role: 'Investigadora ritual — Enviada dos Enclaves',
    tag: 'OBSERVADORA',
    tagTone: 'blue',
    description:
      'Chegou a Thessomar há três meses, vinda de um enclave élfico que a maioria já esqueceu. Veio investigar o enfraquecimento dos antigos selos. Fala pouco, observa tudo e escreve em pergaminhos que ninguém consegue ler. Trata os humanos com curiosidade clínica, não com desprezo. Isso a torna mais inquietante.',
    secrets: [
      { label: 'Missão', text: 'Localizar os pontos de ruptura dos Selos de Alkron.' },
      { label: 'Suspeita', text: 'Alguém em Aramor tocou algo que não deveria.' },
    ],
    quote: 'Tir. Observar, guardar, vigiar. É o verbo mais importante que meu povo conhece.',
  },
  {
    name: 'Dona Ceres Valmont',
    epithet: 'A Mãe dos Desesperados',
    icon: '🍺',
    race: 'Humana',
    age: '52 anos',
    role: 'Dona da Taverna do Oásis — Informante neutra',
    tag: 'TERRITÓRIO NEUTRO',
    tagTone: 'default',
    description:
      'A maior taverna de Thessomar. Território sagrado: ninguém briga na mesa de Ceres. Ex-enfermeira de campo que tratou soldados dos dois lados da Baía. Sabe de tudo porque todo mundo bebe, e quem bebe fala. Cobra informações com informações, não com ouro.',
    secrets: [
      { label: 'Regra', text: 'Quem briga na taverna perde a mão. Literalmente.' },
      { label: 'Rede', text: 'Tem informantes em Aramor, na Armada e até na cozinha real.' },
    ],
    quote: 'Primeira cerveja é por conta da casa. A segunda custa uma verdade.',
  },
  {
    name: 'Gavriel "Pó" Harren',
    epithet: 'O Alquimista do Deserto',
    icon: '⚗️',
    race: 'Humano',
    age: '33 anos',
    role: 'Alquimista clandestino — Inventor Sombrio',
    tag: 'INSTÁVEL',
    tagTone: 'red',
    description:
      'Expulso da guilda alquímica de Aramor por experimentar com substâncias proibidas. Montou laboratório nos Currais da Fronteira, onde fabrica venenos, explosivos e remédios com igual entusiasmo. Suas mãos tremem, seus olhos não piscam e seu laboratório já explodiu três vezes. A quarta, dizem, vai levar metade de Thessomar.',
    secrets: [
      { label: 'Segredo', text: 'Está tentando sintetizar o composto que selou a Herança.' },
      { label: 'Perigo', text: 'Não sabe que o composto atrai a atenção do Devorador.' },
    ],
    quote: 'Ciência não é segura. Segura é ignorância, e dela já temos de sobra.',
  },
];

/* ──────────────── LOCAIS DE ARAMOR (narrativos) ──────────────── */

export const LOCATIONS_ARAMOR: CityLocation[] = [
  {
    name: 'Catedral de Aethelgard',
    icon: '',
    keeper: 'Bispo Maren Tolvier',
    desc: 'Túmulos desaparecendo. Culto necromante nas catacumbas. A fé sangra por dentro.',
    tag: 'MISSÃO',
    tagTone: 'gold',
  },
  {
    name: 'Casa da Realeza',
    icon: '',
    keeper: 'Aldric & Seraphine Vannemere',
    desc: 'O Baú Glacial guarda a Herança ao lado da cama do soberano, enquanto as catacumbas seladas no subsolo ocultam os antigos pilares de contenção da fortaleza.',
    tag: 'RESTRITO',
    tagTone: 'red',
  },
  {
    name: 'Escritório da Guarda Real',
    icon: '',
    keeper: 'Capitã Yelena Rochaforte',
    desc: 'Deserções sendo investigadas. Soldados desaparecem durante patrulhas noturnas.',
    tag: 'ALIADO',
    tagTone: 'green',
  },
  {
    name: 'A Prisão',
    icon: '',
    keeper: '"Dentes" — Contrabandista',
    desc: 'Alega ter uma rota secreta por Eresiere. Provavelmente uma armadilha. Provavelmente.',
    tag: 'PERIGO',
    tagTone: 'red',
  },
  {
    name: 'Porto Vazio (Cais Leste)',
    icon: '',
    keeper: 'Gordo Marek',
    desc: 'Antigo molhe externo voltado para o mar aberto leste. Gordo Marek viu silhuetas de uma frota fantasma na névoa e enlouqueceu; esse setor permanece interditado enquanto o Baixo Cais opera na Baía.',
    tag: 'ABANDONADO',
    tagTone: 'default',
  },
  {
    name: 'Portão Oeste',
    icon: '',
    keeper: 'Ninguém (Fechado)',
    desc: 'Fechado há meses, cortando o suprimento de madeira da Floresta Perigosa. Luzes verdes surgem à noite. Algo chama.',
    tag: 'FECHADO',
    tagTone: 'red',
  },
];

/* ──────────────── LOCAIS DE THESSOMAR (narrativos) ──────────────── */

export const LOCATIONS_THESSOMAR: CityLocation[] = [
  {
    name: 'Taverna do Oásis',
    icon: '',
    keeper: 'Dona Ceres Valmont',
    desc: 'Território neutro. Informações custam verdades. Quem briga perde a mão.',
    tag: 'NEUTRO',
    tagTone: 'default',
  },
  {
    name: 'Baixada das Apostas',
    icon: '',
    keeper: '"Ferrão" Kassim',
    desc: 'Ringue clandestino, apostas ilegais e o único lugar onde exilados viram lendas.',
    tag: 'CLANDESTINO',
    tagTone: 'red',
  },
  {
    name: 'Laboratório dos Currais',
    icon: '',
    keeper: 'Gavriel "Pó" Harren',
    desc: 'Venenos, remédios e explosivos. Já explodiu três vezes. A quarta pode ser a última.',
    tag: 'INSTÁVEL',
    tagTone: 'red',
  },
  {
    name: 'Jardim de Tessara',
    icon: '',
    keeper: 'Velha Tessara',
    desc: 'Ervas medicinais e memórias de Belaryar. A elfa mais antiga de Myrthos vive aqui.',
    tag: 'SAGRADO',
    tagTone: 'blue',
  },
  {
    name: 'Trapiche das Areias',
    icon: '🏴',
    keeper: 'Capitão Voss "Maré Negra"',
    desc: 'Contrabando, exilados e suprimentos chegam por aqui. A Armada finge não ver.',
    tag: 'SOMBRIO',
    tagTone: 'default',
  },
  {
    name: 'Câmara do Conselho',
    icon: '',
    keeper: 'Vereadora Lysandra Marek',
    desc: 'Política mercantil, votações acaloradas e as únicas leis que Thessomar respeita.',
    tag: 'POLÍTICO',
    tagTone: 'gold',
  },
];

/* ─────────────────────────── LORE (LIVROS) ─────────────────────────── */

export interface LoreChapter {
  number: string;
  title: string;
  subtitle?: string;
  sections: {
    heading?: string;
    body: string[];        // cada string = um parágrafo
    pull?: string;         // citação em destaque
  }[];
}

export const LORE_CHAPTERS: LoreChapter[] = [
  {
    number: 'I',
    title: 'A Criação e a Guerra Divina',
    sections: [
      {
        heading: 'O Princípio',
        body: [
          'Antes dos reinos, antes dos nomes, havia o Éter — a matéria crua da criação. Dele nasceram os deuses, e dos deuses nasceu o mundo. A terra foi moldada em camadas: pedra, água, verde e céu. Os primeiros povos surgiram da vontade divina, cada um carregando um fragmento do propósito de seus criadores.',
          'Os humanos receberam a adaptação — corpos curtos em anos, mas férteis em ambição. Nasceram para construir, conquistar e recomeçar. Os elfos receberam a memória — vidas longas, ouvidos atentos ao éter e uma conexão ritual com a terra que os humanos jamais compreenderiam por completo. Os anões receberam a persistência — mestres da pedra e do metal, guardiões do que está enterrado e do que deveria permanecer assim.',
          'E havia os outros. Os orcs, os drows, as criaturas que os deuses menores fizeram por capricho ou por rancor. Seres que não cabiam nas narrativas de ordem e que, por isso, seriam eternamente empurrados para as margens.',
        ],
      },
      {
        heading: 'A Guerra Divina — Ano 0',
        body: [
          'Ninguém sabe ao certo o que detonou a Guerra Divina. Os clérigos de Aethelgard afirmam que foi a ambição dos deuses menores. Os elfos dizem que foi a arrogância dos maiores. Os anões não falam sobre isso.',
          'O que se sabe é que o conflito rasgou o tecido do mundo. Montanhas surgiram onde havia planícies. Mares engoliram civilizações inteiras. E quando os deuses finalmente se calaram — por exaustão, por pacto ou por morte —, o mundo ficou dividido.',
          'Os humanos e anões permaneceram nas Terras do Oeste, no continente que viria a se chamar Volund. Os elfos foram isolados no Leste, separados por mares traiçoeiros e por uma barreira que ninguém sabia dizer se era geográfica ou mágica. E entre os dois, esquecido por quase todos, dormia um terceiro continente: Myrthos.',
        ],
        pull: 'Entre os dois mundos separados pela guerra, esquecido por quase todos, dormia Myrthos.',
      },
    ],
  },
  {
    number: 'II',
    title: 'A Era dos Reinos Humanos',
    subtitle: 'Anos 0 – 1400',
    sections: [
      {
        heading: 'Volund: O Continente-Mãe',
        body: [
          'Com os deuses silenciosos e os elfos distantes, os humanos fizeram o que sempre fazem: construíram. Em Volund ergueram reinos, confederações, ordens militares e academias arcanas. A magia — o éter canalizado por mãos mortais — tornou-se a ferramenta mais poderosa e mais perigosa do continente.',
          'As ordens arcanas se multiplicaram. Magos brancos estudavam contenção e proteção. Magos vermelhos dominavam a alteração e a destruição da matéria. E nas sombras, necromantes dissecavam cadáveres e testavam os limites entre vida e morte.',
          'Inevitavelmente, as ordens se dividiram. A história chama isso de As Cisões Arcanas — uma série de conflitos ideológicos, traições acadêmicas e pequenas guerras mágicas que deixaram cicatrizes profundas na cultura humana. Depois das cisões, a magia nunca mais foi totalmente confiável aos olhos do povo. Todo mago carrega, até hoje, o peso de uma desconfiança ancestral.',
        ],
      },
      {
        heading: 'A Confederação Volundiana',
        body: [
          'Das cinzas das cisões nasceu a Confederação Volundiana — uma aliança de reinos humanos que trocou a guerra interna pela expansão externa. Militares, burocratas, juristas, navegadores e pequenos nobres se uniram sob uma bandeira comum: a promessa de que havia terras a leste esperando para serem reivindicadas.',
          'Eles estavam certos. E estavam errados.',
        ],
        pull: 'A Confederação trocou a guerra interna pela expansão externa. Prometeu prosperidade. Entregou colônias.',
      },
    ],
  },
  {
    number: 'III',
    title: 'A Descoberta de Myrthos',
    subtitle: 'Anos 1400 – 1418',
    sections: [
      {
        heading: 'A Grande Esquadra',
        body: [
          'Em 1400, batedores da Confederação avistaram a grande massa de terra a leste. Os relatos eram contraditórios: alguns falavam de costas verdejantes e rios largos; outros, de ruínas imensas cobertas de vegetação escura e de um silêncio que parecia vivo.',
          'Em 1408, partiu a maior esquadra já reunida pela Confederação Volundiana. Centenas de navios carregando soldados, colonos, artesãos, clérigos, magos e, inevitavelmente, nobres ambiciosos que viam naquela terra a chance de construir linhagens que Volund jamais lhes daria.',
        ],
      },
      {
        heading: 'O Continente',
        body: [
          'Myrthos não era virgem. O continente carregava marcas de civilizações anteriores — ruínas órquicas ao norte, estruturas de pedra impossíveis no centro, e ao sul, próximo a uma região que viria a se chamar Eresiere, vestígios de algo mais antigo que qualquer raça conhecida.',
          'A geografia era brutal e generosa em igual medida. O Norte Branco: faixa nevada, hostil e pouco povoada — o frio matava mais que qualquer criatura. O Cinturão Verde: núcleo histórico de rios largos, colinas férteis e florestas densas, onde a colonização tentaria florescer. O Deserto Quebrado: centro árido de rotas ruins e cidades enterradas, onde nenhuma expedição voltava completa. O Vulcão da Perdição: zona vulcânica no sudoeste, útil para mineração e excelente para lendas ruins. E Eresiere: região ao sul envolta em florestas escuras e ruínas que pareciam anteriores à memória. Os colonos sentiam algo errado ali. Ninguém ouvia. Não ainda.',
        ],
      },
      {
        heading: 'A Colônia de Belaryar',
        body: [
          'Sobre as ruínas de antigos territórios órquicos, a Confederação ergueu Belaryar — a primeira e mais ambiciosa colônia humana em Myrthos. Era tudo o que Volund queria: uma cidade de extração. Metais raros alimentavam as forjas do oeste. Grãos e madeira enchiam navios. Relíquias encontradas nas ruínas eram enviadas para os acadêmicos e colecionadores do continente-mãe.',
          'A colônia cresceu rápido. Rápido demais.',
        ],
      },
      {
        heading: 'A Fundação de Porto-Vila — 1418',
        body: [
          'Para controlar os colonos que começavam a questionar por que tanto de sua produção ia para o oeste, a Confederação ergueu Porto-Vila — uma fortaleza-portuária costeira cuja função era simples: cobrar impostos, controlar rebeldes e garantir o escoamento de riquezas.',
          'Porto-Vila não foi construída para ser lar de ninguém. Foi construída para ser uma corrente. O que ninguém sabia é que Porto-Vila sobreviveria a tudo — e se tornaria Aramor.',
        ],
        pull: 'Porto-Vila não foi construída para ser lar de ninguém. Foi construída para ser uma corrente.',
      },
    ],
  },
  {
    number: 'IV',
    title: 'Os Elfos de Myrthos',
    sections: [
      {
        heading: 'O Reencontro',
        body: [
          'Os elfos não estavam em Myrthos quando os humanos chegaram. Ou estavam, e ninguém os viu. O que a história registra é que, pouco após a fundação de Belaryar, grupos élficos apareceram nas bordas das florestas do Cinturão Verde. Vinham do leste — dos enclaves isolados que haviam sobrevivido à separação pós-Guerra Divina.',
          'O reencontro foi desconfiado. Os humanos viam nos elfos aliados úteis: conheciam a terra, falavam com a floresta, entendiam magias que os acadêmicos de Volund mal teorizavam. Os elfos viam nos humanos o que sempre viram: criaturas brilhantes e destrutivas, capazes de construir catedrais e incendiá-las na mesma geração.',
          'Ainda assim, houve cooperação. Elfos serviram como guias, arqueiros, escribas e diplomatas. Alguns se estabeleceram em Belaryar. Casamentos aconteceram — poucos, discretos e mal vistos por ambos os lados.',
        ],
      },
      {
        heading: 'O Idioma e o Ritual',
        body: [
          'Os elfos trouxeram consigo o quenya cerimonial — não uma língua do dia a dia, mas o idioma da memória. Usado em cerimônias, juramentos, funerais, documentos oficiais e nomes de linhagem. No cotidiano, os elfos aprenderam a falar a língua comum dos humanos. Mas palavras antigas escapavam quando havia luto, fé, reverência ou emoção demais.',
          'O verbo mais importante do quenya cerimonial é tir: observar, guardar, vigiar. Resume a filosofia élfica diante do mundo — não dominar, mas vigiar. Não possuir, mas proteger. Os humanos nunca entenderam isso de verdade.',
        ],
        pull: 'Tir: observar, guardar, vigiar. O verbo mais importante que o povo élfico conhece.',
      },
      {
        heading: 'Os Dois Povos Élficos',
        body: [
          'Com o tempo, os elfos de Myrthos se dividiram em dois grupos. Os Filhos de Silmalen são descendentes dos elfos que permaneceram próximos dos humanos após a ruína de Belaryar. Fragmentaram suas tradições por conveniência e sobrevivência. Servem como arqueiros de muralha, boticários, escribas e eruditos. Carregam mais memória do que tradição intacta.',
          'Os Exilados do Oriente são poucos e raros. Chegam de enclaves élficos remotos para investigar ruínas, recuperar o que foi perdido e vigiar o que os humanos insistem em ignorar. São mais ligados aos velhos ritos, à liturgia e à linguagem cerimonial.',
        ],
      },
    ],
  },
  {
    number: 'V',
    title: 'A Fenda e o Devorador',
    subtitle: 'Anos 1412 – 1429',
    sections: [
      {
        heading: 'Os Selos de Alkron',
        body: [
          'Antes dos elfos, antes dos humanos, antes de qualquer raça conhecida, algo selou Myrthos. Estruturas rituais enterradas no subsolo — chamadas pelos acadêmicos de Selos de Alkron — formavam uma rede de contenção que mantinha presa uma força ancestral. Ninguém sabia quem havia criado os selos. Ninguém perguntou.',
          'Os colonos encontraram os selos ao escavar minas ao sul de Eresiere. Em vez de estudá-los com cuidado, fizeram o que colonizadores fazem: furaram, extraíram e seguiram em frente.',
        ],
      },
      {
        heading: 'A Ruptura — 1412',
        body: [
          'Em 1412, uma incursão mineradora ao sul de Eresiere rompeu um dos Selos de Alkron. A princípio, nada visível aconteceu. Não houve explosão, não houve terremoto. Apenas um silêncio novo — o tipo de silêncio que faz os pássaros pararem de cantar.',
          'Nos meses seguintes, a floresta ao redor de Eresiere começou a mudar. Árvores apodreciam de dentro para fora. Animais enlouqueciam. Poços rituais élficos se turvavam com uma substância escura que nenhum alquimista conseguia identificar. Daquela imprudência nasceu a influência do Devorador.',
        ],
      },
      {
        heading: 'O Que É o Devorador',
        body: [
          'O Devorador não é um deus no sentido tradicional. Não tem templos, escrituras, sermões ou clero. Não exige adoração. Não promete recompensa.',
          'O Devorador é uma fome.',
          'Uma entidade ancestral — talvez anterior aos próprios deuses — que existia presa sob os Selos de Alkron desde antes da memória. Sua natureza é simples e absoluta: consumir. Não por maldade, não por propósito. Consumir porque é tudo o que sabe fazer.',
          'Sua presença é uma doença. Se espalha por florestas, ruínas e poços rituais, corrompendo o que toca. A terra apodrece. A água escurece. Os mortos não descansam. E os vivos começam a ouvir coisas que não deveriam existir.',
        ],
        pull: 'O Devorador não quer adoração. Não quer poder. Não quer glória. Quer que tudo cesse.',
      },
    ],
  },
  {
    number: 'VI',
    title: 'A Queda',
    subtitle: 'Anos 1423 – 1430',
    sections: [
      {
        heading: 'Êxodo Élfico — 1423',
        body: [
          'Os elfos perceberam primeiro. Os Filhos de Silmalen sentiram a terra doente. Os poucos Exilados do Oriente que haviam chegado a Belaryar identificaram a corrupção nos selos e alertaram os líderes coloniais.',
          'Ninguém ouviu.',
          'Em 1423, os elfos deixaram Belaryar. Fundaram refúgios florestais próprios, longe da influência crescente do Devorador. Foi um êxodo silencioso — sem guerra, sem declaração. Apenas partida. Os humanos chamaram de traição.',
        ],
      },
      {
        heading: 'Ruptura Colonial — 1423 a 1429',
        body: [
          'Sem os elfos e com a influência do Devorador se espalhando, Belaryar mergulhou no caos político. A elite humana local — os colonos que haviam enriquecido com a extração — rompeu com os administradores enviados por Volund. O que se seguiu foi uma sucessão de golpes, massacres e conselhos provisórios. Cada facção queria o controle da colônia. Nenhuma queria enfrentar o que crescia no sul.',
        ],
      },
      {
        heading: 'A Noite Carmesim — 1430',
        body: [
          'Em uma noite que a história registrou com sangue, os drows — elfos corrompidos das profundezas — estenderam a escuridão e cercaram Belaryar. Aproveitaram o caos político e a corrupção crescente para atacar.',
          'Mas os drows não foram os destruidores. Foram apenas o estopim.',
          'Na mesma noite, o Devorador irrompeu. A entidade ancestral consumiu Belaryar inteira — pedra, gente e memória. Cidade, invasores e defensores foram engolidos por uma escuridão que não era noite, mas fome materializada. As ruas se dissolveram. Os edifícios apodreceram em minutos. Os mortos se levantaram e caminharam em direções que não faziam sentido geográfico.',
          'Os últimos sobreviventes recuaram para Porto-Vila. Na entrada da fortaleza, o casal regente de Belaryar ficou para trás. Seguraram os portões abertos enquanto colonos, soldados feridos, elfos rezando e crianças chorando passavam. Lutaram até que o último sobrevivente cruzasse. Morreram diante dos portões. Os Guardiões de Aramor herdam essa memória. Todo soldado que defende um portão carrega, queira ou não, a sombra daquela noite.',
        ],
        pull: 'Morreram diante dos portões. Não há monumento. Não há túmulo. Há apenas a ordem que seus corpos garantiram.',
      },
    ],
  },
  {
    number: 'VII',
    title: 'O Nascimento de Aramor e Thessomar',
    subtitle: 'Anos 1430 – 1630',
    sections: [
      {
        heading: 'Porto-Vila se Torna Aramor',
        body: [
          'Com Belaryar morta e Volund distante demais para ajudar — ou se importar —, os sobreviventes se reorganizaram dentro de Porto-Vila. Um nobre rebelde tomou o controle da fortaleza-portuária. Não por eleição, não por direito divino, mas por ser o único com soldados suficientes para impor ordem quando tudo era caos.',
          'Ele rebatizou a cidade. Porto-Vila morreu. Aramor nasceu. A fortaleza que havia sido construída para oprimir colonos se tornou o último bastião da civilização humana em Myrthos. E o nobre rebelde se tornou rei — não porque merecia, mas porque alguém precisava ser.',
        ],
      },
      {
        heading: 'A Casa Vannemere e o Clero de Aethelgard',
        body: [
          'A família que fundou a monarquia de Aramor adotou o nome Vannemere. Sem carta de coroação enviada por Volund, seus governantes assumiram o título formal de Lorde Regente da Coroa — embora governem, na prática e aos olhos do povo, como reis absolutos. Para legitimar seu poder, a Casa Vannemere aliou-se ao Clero de Aethelgard — a ordem religiosa que venera o deus da Luz, Proteção, Lei e Sacrifício.',
          'Aethelgard, O Vigilante, tornou-se o deus oficial de Aramor. Sua doutrina — chamada Doutrina de Ferro — é simples e implacável: a sobrevivência exige ordem absoluta e obediência à Coroa. Dentro da mesma Igreja, três ordens sagradas reverenciam os aspectos do Vigilante: os Sacerdotes de Aeghor nas forjas e muralhas, as Sacerdotisas de Seralyn nas capelas de abrigo e cura, e os Olheiros de Noctavar nos tribunais de investigação. A Herança é proclamada dádiva divina, e aqueles que questionam sua guarda são traidores da própria vida.',
        ],
      },
      {
        heading: 'A Fé Élfica — Silvaris',
        body: [
          'Enquanto os humanos erguiam templos de pedra e ferro, os elfos mantinham sua fé na floresta. Silvaris, O Coração da Floresta, não é um deus que exige templos. Sua adoração acontece em clareiras, ao pé de árvores antigas, diante de rios e sob a luz da lua, e sua antiga liturgia etérica — preservada pelas Tecelãs sob o nome cerimonial de Vaelithra — busca ouvir o fio invisível que conecta todas as coisas vivas.',
          'O dogma de Silvaris é a antítese da Doutrina de Ferro: o mundo está em desequilíbrio porque pedra e metal tentam prender o que deveria seguir seu curso natural. A magia natural, não artefatos de poder centralizado, é a única arma capaz de purificar Myrthos. A tensão teológica é óbvia e permanente: Aethelgard diz que a Herança é dádiva sagrada; Silvaris diz que artefatos de poder centralizado são o problema.',
        ],
        pull: 'Duas fés coexistem em Myrthos. Não se respeitam — se toleram.',
      },
      {
        heading: 'O Nascimento de Thessomar',
        body: [
          'Nem todos os sobreviventes de Belaryar encontraram lugar em Aramor. A fortaleza era pequena, a nobreza era excludente e os recursos eram escassos. Do outro lado da Baía dos Mortos, um grupo de exilados, artesãos sem título e descendentes da colônia arruinada encontrou um oásis verdejante cercado por dunas.',
          'Ali nasceu Pont\'Alma — que mais tarde seria rebatizada Thessomar. No começo, era pouco mais que um acampamento de refugiados. Casas de madeira erguidas às pressas ao longo de um riacho. Pontes frágeis conectando tavernas improvisadas. Currais de madeira na transição para a areia. Mas Thessomar fez o que os desesperados sempre fazem: sobreviveu. E ao sobreviver, cresceu.',
        ],
      },
      {
        heading: 'Duas Cidades, Duas Memórias',
        body: [
          'Em duzentos anos, Aramor e Thessomar se tornaram as duas faces de Myrthos. Aramor é a memória régia — a fortaleza costeira da Coroa. Muralhas altas, ruas estreitas, poder centralizado. A Herança permanece guardada no quarto do rei. Aramor se vê como bastião da ordem: o último muro entre a civilização e a escuridão.',
          'Thessomar é a memória popular — o oásis dos exilados. Madeira, areia, comércio clandestino e a moeda que desafia a nobreza. Thessomar lembra a fome, o exílio e os custos reais da obediência.',
          'As duas cidades dependem uma da outra. Aramor precisa dos suprimentos, artesãos e rotas comerciais de Thessomar. Thessomar precisa da proteção marítima e dos grãos de Aramor. Mas se desprezam o suficiente para transformar toda crise em disputa de poder.',
        ],
      },
    ],
  },
  {
    number: 'VIII',
    title: 'A Herança',
    sections: [
      {
        heading: 'O Que É',
        body: [
          'A Herança é o coração secreto de Myrthos. Ninguém sabe exatamente o que ela é. Alguns dizem que é um fragmento dos Selos de Alkron — uma peça da barreira que mantinha o Devorador preso. Outros afirmam que é anterior aos próprios selos, um artefato de uma era que nenhuma raça se lembra.',
          'Sua função exata permanece objeto de debate entre magos, cronistas e sacerdotes. Mas todos concordam em algo: ela participa do equilíbrio do continente. Não pode cair em mãos erradas sem que a política inteira desabe com ela.',
        ],
      },
      {
        heading: 'Onde Está',
        body: [
          'A Herança não está em cofres subterrâneos, nem em criptas distantes. Está no Palácio Real de Aramor, ao lado da cama do soberano, dentro de um baú de madeira rara azulada que parece gelo — conhecido nos registros como Baú Glacial —, enquanto as catacumbas seladas sob o palácio abrigam apenas os antigos pilares rituais de contenção.',
          'Esta é, simultaneamente, a maior demonstração de poder e a maior vulnerabilidade da monarquia.',
        ],
        pull: 'Não em catacumbas. Não em cofres. Ao lado da cama do rei — onde ele pode ouvi-la à noite.',
      },
      {
        heading: 'Três Perspectivas',
        body: [
          'Para a Coroa, a Herança é poder legítimo. Quem a guarda controla tratados, sucessão, chantagem diplomática e o medo coletivo de um novo desastre continental. A monarquia é indispensável porque a Herança está com ela.',
          'Para os elfos, a Herança deveria ser vigiada, não possuída. O verbo cerimonial usado para descrevê-la é tir — observar, guardar, vigiar. Não tur — governar, dominar. A diferença entre os dois verbos resume toda a tensão entre elfos e humanos em Myrthos.',
          'Para Thessomar, a Coroa transformou um selo antigo em monopólio dinástico. A Herança deveria ser protegida por um conselho, não por uma família. Centralizar tanto poder numa única linhagem é receita para tirania. Aramor chama isso de inveja. Ou de traição.',
        ],
      },
      {
        heading: 'A Selagem e o Enfraquecimento',
        body: [
          'Quando os sobreviventes de Belaryar trouxeram a Herança para Aramor em 1430, os arcanos da época realizaram o primeiro ritual de contenção, selando o artefato dentro do Baú Glacial. A cada geração, o círculo arcano da Coroa precisou renovar esses encantamentos. Há quarenta anos, um grupo de magos — entre eles Magnus Delorvane, então jovem — conduziu a última grande renovação do selo.',
          'Hoje, esses encantamentos estão enfraquecendo muito antes do tempo previsto.',
        ],
      },
    ],
  },
  {
    number: 'IX',
    title: 'Eresiere e o Retorno do Devorador',
    sections: [
      {
        heading: 'O Que Aconteceu em Eresiere',
        body: [
          'Eresiere era uma região ao sul do continente — ruínas antigas cercadas por florestas escuras. Após a ruptura dos Selos de Alkron e a Noite Carmesim, tornou-se o epicentro interditado da corrupção do Devorador.',
          'Há cerca de cinquenta anos, quando os primeiros sinais de instabilidade reapareceram no sul, algo pior aconteceu: o Sumo Sacerdote Caelus Aethonnar — líder supremo do Clero de Aethelgard, o homem mais santo de sua geração — marchou para o coração de Eresiere em uma cruzada de purificação. Ninguém sabe se nos instantes finais tentou lutar, negociar ou se sacrificar.',
          'O que se sabe é que ele não morreu. Transformou-se. Caelus tornou-se o Senhor de Eresiere — uma entidade que comanda os mortos-vivos da região. Não é o Devorador — é seu primeiro servo, sua primeira vítima consciente, o primeiro a ser consumido e recusado pela morte.',
        ],
        pull: 'O maior santo se tornou o maior horror. A ironia é a arma narrativa mais cruel de Myrthos.',
      },
      {
        heading: 'Os Sinais do Despertar',
        body: [
          'Duzentos anos depois da Noite Carmesim, os sinais retornam. Peixes morrem na Baía dos Mortos sem explicação natural. A água escurece. Luzes verdes aparecem no Portão Oeste de Aramor, forçando seu fechamento e o racionamento de madeira na fortaleza. O cão real rosna para as catacumbas toda noite. A marca negra no peito de Aldric se espalha.',
          'Tessara, a elfa sobrevivente de Belaryar, reconhece o cheiro. Os selos que Magnus ajudou a renovar estão enfraquecendo. Miriel Tindómë confirma, vinda dos enclaves do oriente: os Selos de Alkron estão cedendo. Gavriel Harren, em Thessomar, sem saber, tenta sintetizar o composto que atrai a atenção do Devorador.',
          'O Devorador não foi destruído. Adormeceu. E está acordando.',
        ],
      },
    ],
  },
  {
    number: 'X',
    title: 'As Conexões Ocultas',
    sections: [
      {
        heading: 'O Mapa de Segredos',
        body: [
          'Myrthos é um continente de segredos interligados. Cada personagem carrega uma peça que, sozinha, parece insignificante — mas que, combinada com as demais, revela a conspiração completa.',
          'Aldric abriu o Baú Glacial e tocou a Herança — a marca se espalha. Pippin viu. Cinza fareja. Magnus suspeita. Magnus corresponde-se com Lysandra. Lysandra negocia com Imelda. Imelda contrabandeia informações para Thessomar. Thessomar quer confirmar onde está a Herança.',
          'Maren descobriu em Eresiere que o Senhor dos mortos-vivos é o antigo Sumo Sacerdote Caelus Aethonnar. Velha Agnes conheceu Caelus na juventude, antes de sua cruzada ao sul. Agnes está morrendo. Se a verdade morrer com ela, a oportunidade de compreendê-lo se perde para sempre.',
          'Tessara reconhece os sinais do Devorador. Miriel confirma que os selos cedem. Gavriel tenta sintetizar o composto sem saber que atrai o Devorador. Voss vê a baía morrer.',
          'Barto tem um filho em Thessomar. Darren comanda mercenários contra Aramor. Nenhum dos dois sabe do vínculo. Rosie ama Thomaz. Thomaz é subornado por Thessomar. Mira — que na verdade é Vespra, agente da Teia Silente — observa tudo. E está começando a se importar.',
          'Helga guarda o medalhão de Aelindra. O medalhão é a chave da herança élfica de Seraphine. Seraphine não sabe quem é. Edric sente as paredes cantarem. Os muros e catacumbas de Aramor fazem parte da antiga rede de Selos de Alkron. Ninguém leva a sério uma criança de oito anos.',
        ],
        pull: 'Cada segredo que parece pequeno é uma pedra. Juntas, elas formam um muro. E o muro está prestes a desabar.',
      },
    ],
  },
  {
    number: 'XI',
    title: 'A Pergunta que Governa Tudo',
    sections: [
      {
        body: [
          'Todo debate sobre nobreza, culpa, raça, impostos e sucessão termina, cedo ou tarde, na mesma pergunta.',
          'Quem deixou Belaryar cair?',
          'Os humanos culpam os elfos por terem partido. Os elfos culpam os humanos por terem rompido os selos. Aramor culpa Thessomar por descender dos que falharam. Thessomar culpa Aramor por monopolizar a Herança. O Clero culpa os magos pelas cisões arcanas. Os magos culpam o Clero por esconder a verdade sobre Eresiere.',
          'E nas profundezas, onde ninguém quer olhar, o Devorador não culpa ninguém. Ele apenas consome.',
        ],
        pull: 'Quem deixou Belaryar cair? Todos. Nenhum. A pergunta importa menos do que o que vem a seguir.',
      },
      {
        heading: 'O Que Vem a Seguir',
        body: [
          'Myrthos entra numa nova era. Os aventureiros que chegam a suas costas — por ambição, por exílio, por destino ou por acidente — encontrarão um continente que finge normalidade enquanto apodrece por dentro.',
          'Duas cidades que se odeiam e se precisam. Uma monarquia que guarda um segredo que a mata. Um povo que lembra uma catástrofe que não pode se repetir. E uma escuridão ancestral que não se importa com política, com fé ou com esperança.',
          'A Herança repousa ao lado da cama do rei. A marca se espalha. Os selos cedem. Os peixes morrem. E algo, nas profundezas de Eresiere, sorri.',
          'A pergunta não é se o Devorador vai acordar. A pergunta é quem vai estar de pé quando ele acordar.',
        ],
      },
    ],
  },
];


export interface ClassCategory {
  name: string;
  description: string;
  classes: {
    name: string;
    role: string;
    summary: string;
    skills: string[];
  }[];
}

export const CLASS_CATEGORIES: ClassCategory[] = [
  {
    name: 'Arcanos',
    description: 'Estudiosos do éter, dos selos e das velhas guerras mágicas. Temidos pela memória das cisões e respeitados pelo que ainda sabem trancar.',
    classes: [
      {
        name: 'Alquimista',
        role: 'Mestre das substâncias etéricas e compostos',
        summary: 'Mestre das substâncias etéricas, o Alquimista transforma reagentes brutos em poções, óleos e compostos que desafiam a alquimia comum. Em Aramor, as boticas da Coroa o sustentam e o vigiam; em Thessomar, ele vende o que a nobreza prefere não saber. Os Filhos de Silmalen guardam receitas fragmentadas dos antigos boticários élficos, e muitos humanos pagam caro por elas. Todos precisam de seus frascos, e quase ninguém pergunta de onde vêm os ingredientes.',
        skills: [
          'Alchemy 50.0',
          'Poisoning 50.0',
          'Item Identification 40.0',
          'Taste Identification 40.0',
          'Inscription 30.0',
          'Magic Resistance 30.0',
          'Anatomy 20.0',
          'Fencing 20.0',
          'Camping 20.0',
        ],
      },
      {
        name: 'Clérigo',
        role: 'Canalizador do éter para restaurar, proteger e conter',
        summary: 'Herdeiro das ordens arcanas que, após as cisões, escolheram trancar em vez de lançar, o Clérigo (Mago Branco) canaliza o éter para restaurar, proteger e conter. Seus encantamentos não destroem — reconstroem. Em Aramor serve à Coroa e aos escribas élficos nos círculos de contenção que vigiam os selos do continente. Em Thessomar é visto com desconfiança, pois ninguém sabe ao certo a quem sua ajuda serve. É o mais confiável dos arcanos aos olhos da monarquia.',
        skills: [
          'Spirit Speak 50.0',
          'Focus 50.0',
          'Meditation 40.0',
          'Inscription 40.0',
          'Healing 30.0',
          'Magic Resistance 30.0',
          'Evaluating Intelligence 30.0',
          'Anatomy 30.0',
        ],
      },
      {
        name: 'Destruidor',
        role: 'Linha entre criação e dissolução da matéria',
        summary: 'O Destruidor (Mago Vermelho) caminha na linha entre criação e destruição, dominando tanto a alteração da matéria quanto sua dissolução. Filosoficamente neutro, acredita que o éter não é bom nem mau — é uma força, e forças existem para serem dominadas. Mais comum em campanhas e expedições, é disputado: a Armada de Aramor o emprega nas muralhas e os mercadores de Thessomar o contratam para escoltar caravanas pelo Deserto Quebrado. Temido pela memória das cisões, sabe que o respeito dura enquanto o fogo estiver do lado certo.',
        skills: [
          'Magery 50.0',
          'Evaluating Intelligence 40.0',
          'Wrestling 40.0',
          'Inscription 30.0',
          'Magic Resistance 30.0',
          'Macefighting 30.0',
          'Alchemy 20.0',
          'Anatomy 20.0',
          'Taste Identification 20.0',
          'Meditation 20.0',
        ],
      },
      {
        name: 'Necromante',
        role: 'Dissecador de cadáveres e senhor da reanimação',
        summary: 'Onde o Mago Branco tranca, o Necromante suja as mãos. Dissecador de cadáveres, estudioso da decomposição, mestre em reanimar o que deveria permanecer morto. Seus laboratórios fedem a formol e ambição. Depois da Noite Carmesim e do Devorador, o ofício virou tabu em Myrthos: Aramor o caça como herege, os elfos o execram e até os outros magos o temem, pois o Necromante não busca entender a morte — busca escravizá-la. Dizem que os mais ousados procuram segredos nas Ruínas de Belaryar.',
        skills: [
          'Necromancy 50.0',
          'Anatomy 40.0',
          'Spirit Speak 40.0',
          'Meditation 40.0',
          'Forensic Evaluation 30.0',
          'Inscription 30.0',
          'Magic Resistance 30.0',
          'Healing 20.0',
          'Fencing 20.0',
        ],
      },
      {
        name: 'Pesquisador Arcano',
        role: 'Eterno estudante do éter e catalogador de relíquias',
        summary: 'O eterno estudante do éter. Vive em bibliotecas, torres e laboratórios, catalogando cada manifestação mágica conhecida em Myrthos. É responsável por inscrever pergaminhos, identificar artefatos e desvendar as propriedades de substâncias desconhecidas. Os escribas élficos de Aramor são seus mestres e rivais, e os Exilados do Oriente trazem o saber ritual mais antigo. Quem precisa lidar com a Herança e suas cópias imperfeitas depende dele, e por isso a Coroa o paga bem e o observa de perto.',
        skills: [
          'Inscription 50.0',
          'Item Identification 40.0',
          'Magic Resistance 40.0',
          'Meditation 40.0',
          'Evaluating Intelligence 35.0',
          'Magery 35.0',
          'Necromancy 30.0',
          'Spirit Speak 30.0',
        ],
      },
    ],
  },
  {
    name: 'Artífices',
    description: 'Profissionais de oficina, forja, laboratório e estaleiro. Se Aramor sobrevive, é porque alguém sabe construir o que a guerra consome.',
    classes: [
      {
        name: 'Artesão',
        role: 'Transformador versátil de matéria-prima',
        summary: 'O mais versátil dos artífices. O Artesão transforma qualquer matéria-prima em algo útil — ou pelo menos bonito. Desde roupas costuradas até engenhocas mecânicas, desde móveis até instrumentos de precisão. Em Aramor, as manufaturas finas do Bairro do Povo disputam seus serviços; em Thessomar, trabalha em oficinas simples à beira do riacho. Toda caravana que parte para o deserto carrega ao menos um Artesão entre seus membros.',
        skills: [
          'Item Identification 50.0',
          'Arms Lore 50.0',
          'Tailoring 50.0',
          'Tinkering 50.0',
          'Anatomy 40.0',
          'Healing 30.0',
          'Fencing 30.0',
        ],
      },
      {
        name: 'Caçador de Veio',
        role: 'Extrator de metais e matéria-prima das profundezas',
        summary: 'O extrator da terra, o homem que desce onde outros não ousam. Enfrenta desabamentos, criaturas subterrâneas e o calor opressor do Vulcão da Perdição para arrancar os metais que alimentam as forjas de Aramor. Seu corpo é tão duro quanto a pedra que quebra, e mais de um Caçador de Veio já salvou sua equipe empunhando a picareta contra aberrações que emergem das profundezas. Dizem que certos veios tocam velhos selos, e que nem todo eco lá embaixo é de pedra.',
        skills: [
          'Mining 50.0',
          'Lumberjacking 50.0',
          'Camping 50.0',
          'Item Identification 40.0',
          'Swordsmanship 40.0',
          'Macefighting 40.0',
          'Anatomy 30.0',
        ],
      },
      {
        name: 'Carpinteiro',
        role: 'Mestre da madeira e construtor naval',
        summary: 'Mestre da madeira em todas as suas formas. O Carpinteiro extrai, seca, talha e transforma troncos em tudo — de bastões de combate às quilhas dos navios da Armada. Nos estaleiros do Baixo Cais, em Aramor, trabalha dia e noite com a madeira racionada da Coroa para manter a frota de pé. Em Thessomar, ergue as pontes, casas e trapiches de madeira que a areia insiste em engolir. Sem ele, ninguém atravessa a Baía dos Mortos.',
        skills: [
          'Carpentry 50.0',
          'Fletching 50.0',
          'Item Identification 40.0',
          'Arms Lore 40.0',
          'Swordsmanship 30.0',
          'Archery 25.0',
          'Healing 25.0',
          'Anatomy 20.0',
          'Camping 20.0',
        ],
      },
      {
        name: 'Metalúrgico',
        role: 'Espinha dorsal das forjas militares',
        summary: 'O Metalúrgico é a espinha dorsal militar de Aramor. Em suas forjas, o ferro bruto se transforma em lâminas, armaduras, ferramentas e engrenagens. Os melhores são convocados pela Casa Vannemere para equipar a Armada e os Cavaleiros de Muralha, e as forjas da Muralha Alta raramente apagam o fogo. Em Thessomar, forja sem perguntar o destino do aço, o que o torna mais lucrativo e mais perigoso. É o ofício que sustenta a guerra e, por isso, o que mais lucra com ela.',
        skills: [
          'Blacksmithy 50.0',
          'Tinkering 50.0',
          'Arms Lore 50.0',
          'Item Identification 45.0',
          'Macefighting 40.0',
          'Anatomy 35.0',
          'Wrestling 30.0',
        ],
      },
      {
        name: 'Mestre de Caravana',
        role: 'Coração pulsante do comércio continental',
        summary: 'O sangue do reino é o comércio, e o Mestre de Caravana é seu coração pulsante. Versátil por necessidade, avalia mercadorias, guia animais de carga e protege comboios em rotas hostis. Nos Currais da Fronteira, em Thessomar, monta as caravanas que cruzam o Deserto Quebrado; em Aramor, acerta com a Coroa os tributos que tornam a rota possível. Quem controla a rota controla o preço da sobrevivência, e ele sabe disso.',
        skills: [
          'Item Identification 50.0',
          'Cartography 40.0',
          'Tracking 40.0',
          'Detect Hidden 40.0',
          'Camping 40.0',
          'Herding 30.0',
          'Tactics 30.0',
          'Swordsmanship 30.0',
        ],
      },
      {
        name: 'Cozinheiro',
        role: 'Sustento de exércitos e cidades',
        summary: 'Nenhum exército marcha de estômago vazio, e nenhuma cidade sobrevive sem quem saiba transformar ingredientes em sustento. O Cozinheiro é pescador, açougueiro, herbalista e mestre de temperos. Nos acampamentos da Muralha Alta e nas expedições ao Norte Branco, um bom Cozinheiro vale mais que um soldado — pois soldados há muitos, mas alguém que faça sopa decente com peixe seco e musgo é raro. Em Thessomar, suas tavernas são ponto de encontro de exilados e mercenários.',
        skills: [
          'Cooking 50.0',
          'Taste Identification 50.0',
          'Fishing 50.0',
          'Camping 40.0',
          'Anatomy 40.0',
          'Item Identification 35.0',
          'Fencing 35.0',
        ],
      },
      {
        name: 'Fazendeiro',
        role: 'Alicerce agrícola de Myrthos',
        summary: 'O homem do campo que sustenta os alicerces de Myrthos. Sem o Fazendeiro, não há trigo nos celeiros, gado nos pastos nem couro para as armaduras. No Cinturão Verde, famílias inteiras trabalham a terra há gerações, alimentando Aramor e Thessomar. Muitos descendem de colonos de Belaryar e carregam, junto com a enxada, as versões truncadas da queda da colônia. A Coroa taxa cada colheita, e eles já aprenderam a esconder o suficiente.',
        skills: [
          'Camping 50.0',
          'Animal Lore 45.0',
          'Cooking 45.0',
          'Herding 40.0',
          'Animal Taming 30.0',
          'Fishing 25.0',
          'Veterinary 25.0',
          'Lumberjacking 20.0',
          'Fencing 20.0',
        ],
      },
    ],
  },
  {
    name: 'Espiritualistas',
    description: 'Clérigos, penitentes, devotos armados e guardiões da fé. Lidam com cura, maldições, rituais sagrados e pactos que a Coroa prefere não discutir em voz alta.',
    classes: [
      {
        name: 'Paladino',
        role: 'Braço armado da fé de Aethelgard em Aramor',
        summary: 'O braço armado da fé em Aramor. O Paladino é um cavaleiro consagrado por ritual público sob a Doutrina de Ferro de Aethelgard, jurado a proteger os fracos e esmagar o mal com ferro e devoção. Seus juramentos são inquebráveis, suas armas abençoadas, sua coragem lendária. Serve como juiz de campo, escolta da Casa Vannemere e campeão de muralha, e jura proteger, por tabela, o segredo que repousa no Palácio Real. Em Thessomar é visto como o cão da nobreza; os elfos respeitam o juramento, mas observam a quem ele serve.',
        skills: [
          'Parrying 40.0',
          'Tactics 40.0',
          'Swordsmanship 40.0',
          'Macefighting 40.0',
          'Anatomy 30.0',
          'Healing 30.0',
          'Magic Resistance 30.0',
          'Focus 30.0',
          'Meditation 20.0',
        ],
      },
      {
        name: 'Cavaleiro Negro',
        role: 'Guerreiro vil tocado por poder sombrio',
        summary: 'O oposto sombrio do Paladino. Guerreiro que abandonou a luz da fé e abraçou o poder proibido como ferramenta. Onde o Paladino protege, o Cavaleiro Negro subjuga. Suas armas carregam maldições e seu toque cobra um preço de quem o enfrenta. Dois séculos depois da Noite Carmesim, muitos o veem como herdeiro dos que negociaram com o escuro: a Coroa o caça em Aramor e em todo o continente.',
        skills: [
          'Parrying 40.0',
          'Tactics 40.0',
          'Fencing 40.0',
          'Macefighting 40.0',
          'Anatomy 30.0',
          'Item Identification 30.0',
          'Magic Resistance 30.0',
          'Necromancy 30.0',
          'Meditation 20.0',
        ],
      },
      {
        name: 'Sacerdote de Aeghor',
        role: 'Forjador de fé e martelo sagrado do Clero',
        summary: 'Forjador de fé, sacerdote do Clero de Aethelgard consagrado ao aspecto de Aeghor, o Martelo das Forjas e das Muralhas. Todo Sacerdote sabe empunhar um martelo tanto para rezar quanto para lutar. Seus templos incluem forjas funcionais, e seus rituais envolvem a criação de objetos sagrados distribuídos aos fiéis. Em tempos de guerra, marcha com a Armada, abençoando armas e fortalecendo a moral das tropas com fúria controlada. O Clero é parte do poder que sustenta a monarquia, e ele sabe que a fé também é instrumento de Estado.',
        skills: [
          'Meditation 50.0',
          'Focus 50.0',
          'Spirit Speak 40.0',
          'Macefighting 40.0',
          'Blacksmithy 30.0',
          'Parrying 30.0',
          'Magic Resistance 30.0',
          'Healing 30.0',
        ],
      },
      {
        name: 'Sacerdotisa de Seralyn',
        role: 'Guardiã da chama doméstica e da cura',
        summary: 'Guardiã da chama doméstica, consagrada ao aspecto misericordioso de Seralyn dentro da fé humana. Seus templos são abrigos com lareiras que nunca se apagam, onde doentes encontram cura e desamparados encontram comida. A Sacerdotisa não é guerreira, mas sua devoção é sua arma: a mesma chama que aquece o lar pode purificar o mal. Em Aramor serve nas capelas do Bairro do Povo; em Thessomar, onde a Coroa não alcança, é a única autoridade moral que exilados e thessomarianos aceitam. É a mais amada pelo povo comum.',
        skills: [
          'Healing 50.0',
          'Spirit Speak 40.0',
          'Meditation 40.0',
          'Focus 40.0',
          'Anatomy 40.0',
          'Cooking 30.0',
          'Tailoring 30.0',
          'Magic Resistance 30.0',
        ],
      },
      {
        name: 'Olheiro de Noctavar',
        role: 'Sacerdote-investigador e juiz implacável',
        summary: 'Os olhos que não fecham. Consagrados ao aspecto de Noctavar — o Olho Implacável da Lei de Aethelgard —, os Olheiros são sacerdotes-investigadores treinados para descobrir verdades que outros preferem enterrar. Servem como juízes, detetives e, quando necessário, executores. Não reconhecem hierarquia mortal — aos olhos do Olheiro, um nobre assassino é tão culpado quanto um camponês. Até a nobreza de Aramor o teme, pois ele cobra por cada mentira, e a pergunta "quem deixou Belaryar cair?" ainda é a que mais lhe interessa.',
        skills: [
          'Detect Hidden 50.0',
          'Forensic Evaluation 40.0',
          'Spirit Speak 40.0',
          'Meditation 40.0',
          'Focus 40.0',
          'Tracking 30.0',
          'Magic Resistance 30.0',
          'Anatomy 30.0',
        ],
      },
      {
        name: 'Tecelã de Vaelithra',
        role: 'Sacerdotisa élfica da antiga liturgia de Silvaris',
        summary: 'Sacerdotisa élfica da antiga liturgia de Silvaris, venerada sob o nome cerimonial de Vaelithra. As Tecelãs não rezam de joelhos — rezam de pé, em silêncio, com as palmas voltadas para cima, como quem recebe um fio invisível. Canalizam encantamentos de proteção, restauração e conhecimento, e guardam a memória ritual que os Exilados do Oriente trouxeram de enclaves distantes. Entre os Filhos de Silmalen, onde há mais memória que tradição, são a ponte viva com o que se perdeu na grande noite. O verbo tir — observar, guardar, vigiar — resume seu ofício.',
        skills: [
          'Inscription 50.0',
          'Meditation 50.0',
          'Spellweaving 40.0',
          'Spirit Speak 40.0',
          'Focus 40.0',
          'Evaluating Intelligence 30.0',
          'Magic Resistance 30.0',
          'Healing 20.0',
        ],
      },
      {
        name: 'Curandeiro',
        role: 'Socorro, antídotos e preservação da vida',
        summary: 'O Curandeiro não se prende a nenhum altar, mas sua devoção é inegável — devoção aos vivos, aos feridos, aos que sofrem. Combinando conhecimento anatômico, herbalismo e canalização espiritual, é a diferença entre a vida e a morte. Em Thessomar trabalha nas casas de madeira junto ao riacho, tratando exilados e lutadores sem perguntar de onde vieram; em Aramor serve nas enfermarias da Muralha Alta. Os Filhos de Silmalen preservam receitas dos antigos boticários, e muitos humanos pagam caro por elas.',
        skills: [
          'Healing 50.0',
          'Anatomy 40.0',
          'Forensic Evaluation 30.0',
          'Alchemy 30.0',
          'Taste Identification 30.0',
          'Inscription 30.0',
          'Magic Resistance 30.0',
          'Cooking 30.0',
          'Tailoring 30.0',
        ],
      },
    ],
  },
  {
    name: 'Combatentes',
    description: 'Profissões de choque e disciplina marcial. Dominam muralhas, estradas e formações de batalha.',
    classes: [
      {
        name: 'Espadachim',
        role: 'Soldado de elite e lâmina consagrada',
        summary: 'A lâmina é a extensão de seu braço, e o combate é a única língua que fala com fluência. O Espadachim é o soldado de elite da Coroa — treinado desde a adolescência nos quartéis de Aramor, consagrado por ritual quando sua espada bebe sangue inimigo pela primeira vez. Entre os Armorianos é herança de família militar. É a coluna vertebral dos exércitos terrestres e o orgulho da cultura militar humana, e em Thessomar o chamam de soldado de nobre.',
        skills: [
          'Swordsmanship 50.0',
          'Tactics 50.0',
          'Parrying 40.0',
          'Anatomy 40.0',
          'Wrestling 40.0',
          'Arms Lore 30.0',
          'Magic Resistance 30.0',
          'Healing 20.0',
        ],
      },
      {
        name: 'Maceiro',
        role: 'Destruidor de blindagens e formações',
        summary: 'Onde a espada corta, a maça esmaga. O Maceiro é o guerreiro especializado em destruir inimigos blindados — seus golpes ignoram cotas de malha e amassam placas de aço como se fossem lata. Na linha de frente de Aramor, avança como aríete humano, quebrando formações com brutalidade calculada. Contra as aberrações que o Devorador deixou no continente, cuja carne distorcida resiste a cortes, a maça é frequentemente a única resposta.',
        skills: [
          'Macefighting 50.0',
          'Tactics 50.0',
          'Parrying 40.0',
          'Anatomy 40.0',
          'Wrestling 40.0',
          'Arms Lore 30.0',
          'Magic Resistance 30.0',
          'Healing 20.0',
        ],
      },
      {
        name: 'Soldado de Infantaria',
        role: 'Lança, formação e muralha de pontas',
        summary: 'A lança mantém o inimigo longe — e inimigo longe é inimigo vivo por pouco tempo. O Soldado de Infantaria (Lanceiro) domina o alcance, furando guarnições antes que espadas possam alcançá-lo. Em formação, uma linha de Lanceiros é uma muralha de pontas de aço que poucos ousam enfrentar. É a espinha dorsal das tropas de Aramor e o primeiro contratado por expedições que sabem o valor de uma linha firme. A palavra élfica ehtyar ainda nomeia seu ofício nos documentos antigos.',
        skills: [
          'Fencing 50.0',
          'Tactics 50.0',
          'Anatomy 40.0',
          'Parrying 40.0',
          'Wrestling 40.0',
          'Swordsmanship 20.0',
          'Macefighting 20.0',
          'Arms Lore 20.0',
          'Healing 20.0',
        ],
      },
      {
        name: 'Arqueiro',
        role: 'Tempestade de flechas e retaguarda letal',
        summary: 'O silêncio antes da tempestade de flechas. O Arqueiro é o guerreiro de retaguarda, treinado para dizimar formações antes do contato corpo a corpo. Os Filhos de Silmalen servem como arqueiros de muralha em Aramor, aperfeiçoando por décadas um único estilo de disparo; os humanos compensam com volume e disciplina, e em Thessomar o ofício dispensa linhagem — basta mira e nervos. Uma companhia de Arqueiros decide batalhas antes que uma única espada seja desembainhada.',
        skills: [
          'Archery 50.0',
          'Tactics 50.0',
          'Anatomy 40.0',
          'Fletching 40.0',
          'Arms Lore 30.0',
          'Healing 30.0',
          'Swordsmanship 30.0',
          'Wrestling 30.0',
        ],
      },
      {
        name: 'Guardião',
        role: 'Muralha viva e defesa inabalável',
        summary: 'O Guardião não ataca — impede. Especialista em defesa pura, é a muralha viva que protege flancos, segura portões e garante que aliados mais frágeis sobrevivam para lutar outro dia. Nas portas de Aramor e nos corredores da Muralha Alta, forma a última linha entre o caos e a civilização. Herda a memória do casal regente que morreu diante dos portões na Noite Carmesim, salvando colonos até o último instante. Sua paciência é lendária e seu escudo é tão mortal quanto qualquer espada.',
        skills: [
          'Parrying 50.0',
          'Swordsmanship 40.0',
          'Macefighting 40.0',
          'Wrestling 40.0',
          'Anatomy 30.0',
          'Magic Resistance 30.0',
          'Tactics 30.0',
          'Arms Lore 20.0',
          'Healing 20.0',
        ],
      },
      {
        name: 'Caçador de Feiticeiros',
        role: 'Rastreador e neutralizador de arcanos',
        summary: 'O pior pesadelo de qualquer arcano. Guerreiro treinado para rastrear e neutralizar usuários de magia, com resistência ao éter anormalmente alta e sentidos afiados para detectar conjurações ocultas. Nascido das velhas desconfianças que as cisões arcanas deixaram, hoje serve à Coroa como força especial — destacado quando um mago renegado, um necromante ou algo tocado pelo Devorador precisa ser eliminado. Os elfos o toleram; os arcanos de Aramor o temem, mesmo quando o contratam.',
        skills: [
          'Magic Resistance 50.0',
          'Tactics 50.0',
          'Swordsmanship 40.0',
          'Wrestling 40.0',
          'Anatomy 30.0',
          'Detect Hidden 30.0',
          'Tracking 30.0',
          'Parrying 30.0',
        ],
      },
      {
        name: 'Guerreiro',
        role: 'Combatente de vanguarda em lâminas e impacto',
        summary: 'O Guerreiro é o combatente treinado em armas de corte e impacto. Lâminas e maças pesadas são seus instrumentos de guerra na vanguarda de qualquer exército. Nos quartéis de Aramor atua como tropa de choque e instrutor; nos campos de batalha, é o combatente versátil que comandantes lançam nos momentos decisivos. Entre os Thessomarianos, costuma ser veterano de muitas guerras e poucas lealdades.',
        skills: [
          'Tactics 50.0',
          'Swordsmanship 50.0',
          'Macefighting 50.0',
          'Anatomy 40.0',
          'Parrying 40.0',
          'Wrestling 30.0',
          'Arms Lore 20.0',
          'Healing 20.0',
        ],
      },
      {
        name: 'Duelista',
        role: 'Lâmina fina e dança mortal singular',
        summary: 'O Duelista não pertence a nenhum exército — pertence a si mesmo. Especialista em combate singular, luta com lâminas finas e movimentos precisos que transformam cada confronto em uma dança mortal. Em Aramor, duelos formais resolvem disputas entre pequenos nobres, e os campeões dessas casas são artistas da morte. Em Thessomar, frequenta a Baixada das Apostas, onde as lutas clandestinas fazem seu nome circular dos dois lados da baía e a única regra é que não há regras.',
        skills: [
          'Fencing 50.0',
          'Tactics 50.0',
          'Anatomy 50.0',
          'Wrestling 50.0',
          'Parrying 40.0',
          'Arms Lore 30.0',
          'Healing 30.0',
        ],
      },
    ],
  },
  {
    name: 'Ladinos',
    description: 'Informantes, assassinos, espiões e cortadores de bolsa. O submundo de Thessomar conhece seus nomes, ainda que raramente em voz alta.',
    classes: [
      {
        name: 'Assassino',
        role: 'Execução silenciosa, emboscada e veneno preciso',
        summary: 'Frio e calculista, o Assassino dedica-se à arte de matar. Estuda pontos vitais, venenos e seus efeitos, além de estratégias para a emboscada perfeita à distância ou à queima-roupa. Em Aramor, opera nas margens da lei, contratado por nobres ambiciosos ou pela própria Coroa quando a justiça oficial é lenta demais. Em Thessomar, ninguém pergunta quem foi contratado, apenas quanto custou.',
        skills: [
          'Hiding 50.0',
          'Stealth 50.0',
          'Archery 50.0',
          'Anatomy 40.0',
          'Poisoning 40.0',
          'Tactics 40.0',
          'Fencing 30.0',
        ],
      },
      {
        name: 'Agente das Sombras',
        role: 'Espionagem, observação e inteligência',
        summary: 'Onde o Assassino mata, o Agente observa. Especialista em espionagem, seguimento e extração de informações, é os olhos e ouvidos invisíveis de quem o contrata. Opera entre Aramor e Thessomar vendendo rumores, cópias, rotas e nomes que valem mais que aço. A Baía dos Mortos é seu território: liga as duas cidades por moeda, sal e deserção, e é onde ele ouve primeiro quando algo desperta em Myrthos. A Coroa nega sua existência e o emprega.',
        skills: [
          'Detect Hidden 50.0',
          'Hiding 50.0',
          'Stealth 50.0',
          'Tracking 40.0',
          'Snooping 40.0',
          'Fencing 30.0',
          'Tactics 20.0',
          'Wrestling 20.0',
        ],
      },
      {
        name: 'Ladrão',
        role: 'Batedor de carteiras e oportunista nato',
        summary: 'Batedor de carteiras, vigarista, oportunista nato. O Ladrão é a escória que toda sociedade produz e toda sociedade precisa. Nasce nas pontes de madeira e nos becos de Thessomar, onde exilados sem título aprendem cedo que a lei de Aramor não chega à areia. Em Aramor, atua nas sombras do Baixo Cais, desviando cargas que a fiscalização ainda não selou. Seus dedos ágeis aliviam bolsos sem que ninguém perceba, e as informações que rouba valem o preço de uma refeição.',
        skills: [
          'Stealing 50.0',
          'Snooping 50.0',
          'Hiding 40.0',
          'Stealth 40.0',
          'Lockpicking 40.0',
          'Detect Hidden 30.0',
          'Fencing 30.0',
          'Item Identification 20.0',
        ],
      },
      {
        name: 'Inventor Sombrio',
        role: 'Cientista do submundo e arsenal ambulante',
        summary: 'O cientista do submundo. O Inventor Sombrio usa conhecimento mecânico e alquímico para fins que as guildas legítimas não aprovam — venenos indetectáveis, mecanismos de abertura silenciosa, dispositivos explosivos de precisão. Nas oficinas escondidas de Thessomar, onde a Armada raramente entra, é um arsenal ambulante para qualquer bando. Em Aramor, a Coroa o procura em segredo quando precisa de algo que nenhum artífice licenciado aceitaria construir.',
        skills: [
          'Alchemy 50.0',
          'Tinkering 50.0',
          'Poisoning 40.0',
          'Remove Trap 40.0',
          'Item Identification 40.0',
          'Lockpicking 30.0',
          'Hiding 30.0',
          'Fencing 20.0',
        ],
      },
      {
        name: 'Pirata',
        role: 'Terror da Baía dos Mortos e saqueador naval',
        summary: 'O terror da Baía dos Mortos e das rotas que ligam Myrthos ao oeste. O Pirata vive pela lâmina, pela abordagem e pelo saque marítimo, navegando sem bandeira e sem lei entre as ilhas disputadas e as docas da Armada. Seus mapas são tomados no mar, seus navios são velozes e sua lealdade dura até o próximo porto. Thessomar o acolhe nos trapiches de areia; Aramor o enforca quando o captura — o que não acontece com frequência suficiente.',
        skills: [
          'Swordsmanship 50.0',
          'Tactics 40.0',
          'Cartography 40.0',
          'Fishing 40.0',
          'Anatomy 35.0',
          'Parrying 35.0',
          'Wrestling 30.0',
          'Lockpicking 30.0',
        ],
      },
      {
        name: 'Marinheiro',
        role: 'Braço leal e disciplinado da Armada de Aramor',
        summary: 'O braço leal da Armada de Aramor. O Marinheiro é o oposto do Pirata — navega sob bandeira, obedece à cadeia de comando e luta por dever, não por saque. Conhece cada corrente traiçoeira da Baía dos Mortos e das costas de Myrthos, e sabe que quem controla a travessia controla o preço da sobrevivência. Seus capitães ostentam títulos que rivalizam com a nobreza terrestre, e muitos descendem dos oficiais que fundaram a fortaleza-portuária.',
        skills: [
          'Swordsmanship 50.0',
          'Tactics 50.0',
          'Cartography 50.0',
          'Fishing 40.0',
          'Anatomy 30.0',
          'Parrying 30.0',
          'Wrestling 30.0',
          'Healing 20.0',
        ],
      },
      {
        name: 'Infiltrador',
        role: 'Perito em fechaduras, armadilhas e invasão silenciosa',
        summary: 'O Infiltrador (Especialista) é o perito que entra e sai de qualquer fortaleza, ruína ou masmorra sem deixar rastro. Seus olhos treinados detectam passagens ocultas e mecanismos letais, e suas mãos desarmam armadilhas e abrem cofres que pareciam invioláveis. Dizem que alguns cruzaram a Muralha Alta e chegaram até o Palácio Real; ninguém confirma, e quem confirma desaparece.',
        skills: [
          'Detect Hidden 50.0',
          'Lockpicking 50.0',
          'Remove Trap 50.0',
          'Item Identification 40.0',
          'Hiding 40.0',
          'Stealth 40.0',
          'Fencing 30.0',
        ],
      },
    ],
  },
  {
    name: 'Naturalistas',
    description: 'Gente de estrada, fronteira, ermo e floresta. Sabem ir, voltar e sobreviver onde a Coroa não alcança e o Devorador ainda ronda.',
    classes: [
      {
        name: 'Bárbaro',
        role: 'Guerreiro forjado pelo ermo',
        summary: 'O guerreiro que o ermo forjou. Bárbaros não treinam em quartéis — treinam sobrevivendo. Endurecidos pela vida além das muralhas, lutam com a brutalidade instintiva de predadores naturais. Vivem nas bordas do Norte Branco, do Cinturão Verde e do Deserto Quebrado, onde antigos postos de vigia e ruínas ainda guardam o que a colônia deixou. Pouco se importam com Aramor ou Thessomar; só a sobrevivência importa, e a certeza de que os mortos não respeitam fronteiras.',
        skills: [
          'Swordsmanship 50.0',
          'Wrestling 50.0',
          'Tactics 50.0',
          'Anatomy 50.0',
          'Lumberjacking 40.0',
          'Camping 30.0',
          'Healing 30.0',
        ],
      },
      {
        name: 'Caçador',
        role: 'Rastreador implacável e flecha certeira',
        summary: 'O Caçador vê o mundo como um ciclo simples: há quem cace e quem seja caçado. Em ambiente natural é implacável — rastreia presas por dias, esconde-se em folhagens por horas e dispara flechas que nunca erram. Nas terras do Cinturão Verde e nos passos do Norte Branco, muitos servem como batedores não oficiais da Coroa, vigiando rotas e ruínas. Os Filhos de Silmalen são seus mestres naturais, e os thessomarianos aprendem o ofício por necessidade.',
        skills: [
          'Tracking 50.0',
          'Archery 50.0',
          'Anatomy 40.0',
          'Tactics 40.0',
          'Hiding 30.0',
          'Stealth 30.0',
          'Camping 20.0',
          'Fletching 20.0',
          'Animal Lore 20.0',
        ],
      },
      {
        name: 'Caçador Negro',
        role: 'Salteador de estrada e emboscada mortal',
        summary: 'O oposto sombrio do Patrulheiro. Salteadores de estrada, mercenários que aceitam qualquer contrato, desertores que usam habilidades de sobrevivência para objetivos vis. Suas flechas são envenenadas, suas emboscadas são mortais e sua moral é inexistente. Nos caminhos entre Aramor e Thessomar e nas rotas do Deserto Quebrado, são temidos tanto quanto as aberrações que o Devorador deixou. Muitos são ex-soldados da Armada que preferiram o saque ao soldo.',
        skills: [
          'Archery 50.0',
          'Poisoning 50.0',
          'Tactics 40.0',
          'Hiding 40.0',
          'Anatomy 30.0',
          'Tracking 30.0',
          'Fencing 30.0',
          'Stealth 30.0',
        ],
      },
      {
        name: 'Patrulheiro',
        role: 'Protetor juramentado das fronteiras e matas',
        summary: 'O Patrulheiro (Ranger) é o guardião das matas e fronteiras por juramento. Rondando florestas, montanhas e estradas, busca tudo que ameaça a ordem natural ou traz corrupção. Seus relatórios sobre movimentações hostis e avistamentos de aberrações chegam a Aramor antes de qualquer exército. Protege pequenas comunidades que a Coroa esquece, e é o primeiro a notar quando os sinais do Devorador voltam a aparecer perto da Baía dos Mortos.',
        skills: [
          'Tracking 50.0',
          'Archery 40.0',
          'Anatomy 35.0',
          'Camping 30.0',
          'Hiding 30.0',
          'Tactics 30.0',
          'Swordsmanship 30.0',
          'Fletching 20.0',
          'Lumberjacking 20.0',
          'Animal Lore 15.0',
        ],
      },
      {
        name: 'Druida',
        role: 'Sacerdote sem templo e guardião da terra',
        summary: 'O Druida é o sacerdote sem templo — sua catedral é a floresta, seu altar é a terra viva. Protegendo o ciclo natural com fervor quase fanático, vive como ermitão ou conselheiro em comunidades rurais. Sua magia não vem de livros — vem da própria terra, e seus animais companheiros são tão leais quanto qualquer soldado. É mais comum entre os elfos, sobretudo os Exilados do Oriente, que carregam a liturgia das florestas perdidas, e desconfia de quem tenta domar a terra com muralhas.',
        skills: [
          'Spellweaving 50.0',
          'Evaluating Intelligence 40.0',
          'Wrestling 40.0',
          'Animal Lore 30.0',
          'Animal Taming 30.0',
          'Healing 30.0',
          'Meditation 30.0',
          'Camping 30.0',
          'Alchemy 20.0',
        ],
      },
      {
        name: 'Mestre das Bestas',
        role: 'Domador de feras e senhor da fauna de Myrthos',
        summary: 'O Mestre das Bestas (Domador de Feras) dedicou a vida ao estudo de doma, adestramento, reprodução e hábitos animais. De um mastim de guerra a um urso das neves, faz com que as feras submetam-se à sua vontade. Em Myrthos, onde a fauna inclui predadores ferozes e criaturas tocadas pela corrupção, seus animais lutam com a ferocidade de exércitos. Os Currais da Fronteira, em Thessomar, são seu lar natural, e as caravanas pagam bem por seu olhar.',
        skills: [
          'Animal Lore 50.0',
          'Animal Taming 50.0',
          'Herding 50.0',
          'Archery 40.0',
          'Tracking 40.0',
          'Fletching 30.0',
          'Veterinary 20.0',
          'Wrestling 20.0',
        ],
      },
      {
        name: 'Explorador',
        role: 'Desbravador de terras indomadas e cartógrafo de ruínas',
        summary: 'O Explorador (Desbravador) chega primeiro — e muitas vezes é o único que volta. Montanhas, desertos, florestas e pântanos são barreiras a serem transpostas por ele. Mapeia costas desconhecidas, avalia o potencial e os riscos de cada região e descobre rotas que alimentam a expansão de Aramor e o comércio de Thessomar. Seus mapas valem ouro, suas histórias valem cerveja, e sua sobrevivência depende de coragem, cautela e sorte.',
        skills: [
          'Cartography 50.0',
          'Tracking 50.0',
          'Tactics 40.0',
          'Swordsmanship 40.0',
          'Camping 30.0',
          'Item Identification 30.0',
          'Fishing 20.0',
          'Animal Lore 20.0',
          'Healing 20.0',
        ],
      },
    ],
  },
];

export interface GameSystem {
  name: string;
  shortDesc: string;
  description: string;
  howItWorks: string[];
  tips?: string[];
}

export const GAME_SYSTEMS: GameSystem[] = [
  {
    name: 'Ficha RP & Perfil de Personagem',
    shortDesc: 'Sua fisionomia, psicologia e ficha de atributos estilo D&D 5e',
    description:
      'A identidade do seu personagem no servidor é viva e dividida em três camadas. O comando [FichaRP abre o formulário oficial de fisionomia e histórico do personagem (rosto, marcas corporais, manias, passado, busca pessoal e diários). Já o comando [RP ou [RPProfile traz uma ficha visual inspirada em D&D 5e, contendo atributos interpretativos (Força, Destreza, Constituição, Inteligência, Sabedoria e Carisma), alinhamento moral, antecedentes e conquistas. Esse perfil físico é dinâmico: jogadores que clicarem no seu papel de perfil verão automaticamente seu porte físico baseado na sua estatura, peso e movimentos. Detalhes minuciosos de cicatrizes e feições faciais só podem ser observados de perto e se o rosto não estiver ocultado.',
    howItWorks: [
      'Use o comando [FichaRP para preencher seus dados de aparência física direta, psicologia e histórico narrativo.',
      'Use [RP ou [RPProfile em si mesmo ou em outro jogador para inspecionar fichas e atributos interpretativos.',
      'A fisionomia do rosto e marcas corporais detalhadas só ficam visíveis se o observador estiver a menos de 4 metros (tiles) de distância.',
      'Se o personagem estiver usando capuz ou máscara, seu nome real, rosto e marcas ficam ocultos por meio do Recognition System, exibindo apenas a descrição genérica de sua raça.',
      'As seções de edição possuem tempos de recarga (cooldowns de 1 a 30 dias dependendo do campo) para garantir a estabilidade e a evolução coerente da fisionomia do personagem.',
    ],
    tips: [
      'Preencha as opções de Estatura, Tipo Físico e Movimentos com cuidado: elas geram a descrição corporal automática do seu personagem.',
      'GMs usam as notas das seções "Busca Pessoal" e "Passado Recente" para construir suas sagas e quests pessoais.',
      'Se a staff precisar guiar sua interpretação, você receberá notificações e feedbacks diretamente na aba de "Críticas" da sua Ficha RP.',
    ],
  },
  {
    name: 'Criação de Personagem & Despertar de Classe',
    shortDesc: 'A jornada de 7 etapas que define sua origem, traços e fisionomia',
    description:
      'Ao entrar no mundo, você passará pelo assistente de criação oficial. Trata-se de um fluxo imersivo em 7 etapas que une narrativa clássica e regras mecânicas rígidas. É nele que você definirá sua raça, o visual de seu cabelo (ou barbas para homens), a sua vocação inicial com equipamentos dedicados, a distribuição de atributos primários (200 pontos respeitando os limites biológicos da raça) e o seu Signo Celestial regente.',
    howItWorks: [
      'Etapa 1 & 2 (Raça): Escolha entre as raças disponíveis. Cada raça possui mínimos e máximos específicos para Força, Destreza e Inteligência, além de habilidades inatas exclusivas.',
      'Etapa 3 (Aparência): Escolha o corte, cor e pelos faciais. Os Elfos possuem cores de cabelo pré-definidas por sua natureza fisionômica, enquanto os Humanos têm paletas livres.',
      'Etapa 4 & 5 (Vocação): Navegue pelas categorias e selecione sua Classe. Você poderá ver as habilidades iniciais de cada uma em detalhes.',
      'Etapa 6 (Atributos): Distribua exatamente 200 pontos entre Força, Destreza e Inteligência respeitando os tetos biológicos da sua raça para poder avançar.',
      'Etapa 7 (Signo): O destino sorteia a constelação regente do seu nascimento, concedendo um bônus celeste passivo exclusivo.',
    ],
    tips: [
      'Ao concluir o processo, você receberá em sua mochila uma "Essência" correspondente à sua raça, essencial para rituais e interações no mundo.',
      'As classes iniciais garantem uma bolsa de "Pertences Iniciais" contendo seus primeiros recursos de sobrevivência e um "Emblema de Classe" único para canalizar seus poderes.',
      'Analise os limites de atributos de cada raça na Etapa 2 para garantir que o seu planejamento de fim de jogo (endgame) combine perfeitamente com a classe escolhida.',
    ],
  },
  {
    name: 'Raças, Atributos & Signos Celestes',
    shortDesc: 'Limites biológicos, passivas raciais e os 10 signos celestes',
    description:
      'A escolha de quem você é no mundo é definitiva e molda o seu potencial mecânico máximo. Ao criar seu personagem, a combinação entre a sua Raça (Humano ou Elfo) e o seu Signo Celeste define os limites absolutos de seus atributos (Força, Destreza e Inteligência) e taxas de regeneração. As raças possuem traços biológicos marcantes, enquanto os 10 signos celestes agem como bênçãos permanentes da sua constelação de nascimento, concedendo atributos brutos, regenerações aceleradas ou recursos bônus na mochila.',
    howItWorks: [
      'Limites Biológicos: Sua raça determina o mínimo e o máximo que você pode atingir em cada atributo. Elfos podem atingir até 110 de Destreza (mas apenas 70 de Força); os Humanos mantêm um teto equilibrado de 100 pontos em todos os atributos.',
      'Passivas Raciais:',
      '  • Humanos: Extremamente adaptáveis e resistentes, ganham +50 de Vida Máxima permanente.',
      '  • Elfos: Altamente ágeis e conectados ao fluxo místico, recebem +10% de Velocidade de Ataque (Swing Speed) e +10% de Velocidade de Conjuração de Magias (Casting Speed).',
      'Os 10 Signos Celestes:',
      '  • A Morte: Garante +1 Ponto de Alma (Soul Point) adicional, facilitando o retorno do além.',
      '  • A Roda da Fortuna: Abençoa o destino financeiro do personagem, garantindo 300 moedas de cobre iniciais.',
      '  • Justiça: Foca na rigidez corporal, concedendo +3 de Força permanente.',
      '  • O Tolo: Aumenta a vitalidade e a cura celular, garantindo +15% de Regeneração de HP.',
      '  • O Homem Enforcado: Aguça os reflexos e a velocidade de reação, concedendo +3 de Destreza.',
      '  • A Grande Sacerdotisa: Amplifica a conexão com as preces, garantindo +15% de Regeneração de Mana.',
      '  • O Mago: Canaliza o foco mental absoluto, concedendo +3 de Inteligência.',
      '  • A Estrela: Atua como guia místico equilibrado, garantindo +7% de Regeneração de HP e de Mana simultaneamente.',
      '  • A Torre: Concede resiliência estrutural ao corpo, garantindo +4 de Armadura Virtual natural.',
      '  • O Mundo: Representa o equilíbrio cósmico perfeito, concedendo +1 em Força, +1 em Destreza e +1 em Inteligência simultaneamente.',
    ],
    tips: [
      'Planeje sua raça pensando no seu estilo de combate: Humanos possuem um bônus massivo de vida que ajuda na sobrevivência de qualquer classe; Elfos são perfeitos para arqueiros, guerreiros ágeis ou conjuradores rápidos devido ao bônus de 10% de velocidade.',
      'Combine o Signo com sua futura profissão: guerreiros ágeis se beneficiam imensamente d’O Homem Enforcado (+3 Dex) ou d’O Tolo (+15% HP Regen); magos devem focar na Grande Sacerdotisa (+15% Mana Regen) ou no Mago (+3 Int).',
      'O signo "O Mundo" é excelente para classes híbridas (como paladinos ou bardos) que necessitam de pontos distribuídos em todas as três frentes para atingirem a eficiência mística e física.',
    ],
  },

  {
    name: 'Artesanato & Especialização de Itens',
    shortDesc: 'Fabricação rúnica por estações físicas, grimório dinâmico e refino em 5 níveis via Item ID',
    description:
      'O sistema de craft de Myrthos transforma a manufatura de itens em uma verdadeira jornada de imersão e prestígio. Através de Livros de Receitas vinculados à alma do artesão, as profissões (Ferraria, Costura, Carpintaria/Arquearia e Engenharia) operam em estações de trabalho físicas interativas por meio de uma interface de grimório aberto. O processo é visual e auditivo: o artesão canaliza o trabalho enquanto o item flutua envolto em chamas azuis rúnicas sobre a bigorna ou bancada. Além de produzir itens excepcionais de alta durabilidade, os artesãos podem utilizar a perícia de Avaliação (Item ID) para Especializar equipamentos em 5 níveis progressivos de poder, moldando armas, armaduras e roupas sob medida e assumindo riscos reais de destruição rúnica.',
    howItWorks: [
      'Vínculo & Grimório Hierárquico: Os livros de craft se vinculam permanentemente ao primeiro artesão que os abrir. O grimório possui um sistema de categorização dinâmico que carrega partições lógicas (ex: Costura segmentada em Pano, Lã, Couro e suas respectivas subcategorias). O livro exibe TODAS as receitas registradas para dar visibilidade do progresso ao jogador, sinalizando em vermelho as receitas acima da skill atual e em verde as receitas fabricáveis.',
      'Estações de Trabalho Físicas: O craft exige proximidade com estações reais — Bigorna (Ferraria), Mesa de Costura (Costura), Bancada (Carpintaria/Arquearia) ou Mesa de Engenheiro (Tinkering). O personagem fica impossibilitado de andar (CantWalk) durante o processo, enquanto o item flutua no cenário acompanhado de faíscas rúnicas e sons reais de marteladas, serragem ou costura.',
      'Visualização de Itens no Grimório: A interface do Livro de Craft exibe as estatísticas completas e uma lista visual com o preview gráfico real dos itens renderizados na página de receitas, facilitando a identificação antes do processo de fabricação.',
      'Durabilidade & Qualidade Excepcional: A soma da perícia principal com a skill de Arms Lore determina a durabilidade máxima (Hit Points) dos equipamentos fabricados. Artesãos grão-mestres (skill 100.0+) têm chance de produzir peças Excepcionais de qualidade superior.',
      'Especialização Rúnica (Item ID): Armas, armaduras e roupas recém-fabricadas podem ser refinadas imediatamente pelo artesão. Utilizando a skill de Item ID, você escolhe um caminho de evolução definitiva para o item, avançando-o do nível 1 ao 5 (Aprendiz, Competente, Habilidoso, Expert e Mestre).',
      'Caminhos de Especialização Definidos:',
      '  • Potência de Dano [DMG]: Incrementos de dano mínimo e máximo (exclusivo para armas). Escala: Min (+1, +1, +2, +2, +3) e Max (+1, +2, +2, +3, +4).',
      '  • Velocidade de Ataque [VEL]: Reduz o delay de balanço da arma (subtraindo o atributo Speed: -0.25s, -0.25s, -0.5s, -0.5s, -0.75s). Limite mínimo absoluto de 1.25s na arma e 0.25s no swing físico do combate.',
      '  • Resistência Elemental [RES]: Bônus permanentes de Fogo e Frio (FireBonus/ColdBonus). Escala: +1, +2, +3, +4, +5 para armaduras, escudos e roupas.',
      '  • Proteção Física [PRO]: Aumenta a absorção de dano físico (PhysicalBonus). Escala: +1, +2, +3, +5, +7 para armaduras e escudos.',
      '  • Durabilidade [DUR]: Eleva os Hit Points máximos e atuais do equipamento. Escala: +10, +15, +25, +35, +50 HP para armaduras, armas e roupas.',
      'Preservação Estética & Sufixos: A especialização altera o nome do equipamento, adicionando ícones [RES, DMG, VEL, DUR, PRO] e títulos honoríficos de acordo com o nível rúnico. A cor original do item (Hue) é preservada intacta através de um backup interno.',
      'Dificuldade, Destruição & Cooldown: Aprimorar itens exige Item ID crescente (Dificuldades: 40, 55, 70, 85, 100). Falhar pode desperdiçar materiais ou desintegrar o item (Chances de destruição: 5%, 10%, 20%, 30%, 40%). Cada upgrade grava um carimbo de data que impede nova melhoria por 1 hora real (cooldown entre níveis).',
    ],
    tips: [
      'Subir Arms Lore é indispensável para ferreiros, alfaiates e carpinteiros que desejam atingir o potencial máximo de durabilidade de suas obras de arte.',
      'O caminho da Velocidade [VEL] subtrai delay do atributo Speed da arma — quanto menor o delay, mais rápido o ataque. O combate bloqueia o swing máximo em 0.25s e a arma não pode ficar abaixo de 1.25s de delay.',
      'Mitigação de Risco: Se a sua skill de Item ID for igual ou superior à dificuldade base do nível, a chance de destruição do item em caso de falha é cortada pela metade.',
      'Antes de tentar uma especialização de alto nível, certifique-se de que o item não está em período de repouso rúnico (cooldown de 1 hora entre níveis).',
      'As especializações são permanentes e mutuamente exclusivas: uma vez escolhido o caminho de evolução no nível 1, ele não poderá ser alterado para outro tipo de bônus.',
    ],
  },

    {
    name: 'Alquimia Avançada & Processamento',
    shortDesc: 'Processamento de derivados químicos, refino molecular por bitmask, reações térmicas e elixires, poções e venenos letais',
    description:
      'O sistema de Alquimia Avançada de Myrthos eleva a arte da preparação de poções a um patamar científico de altíssima imersão. Longe de ser um clique automatizado em um menu de receitas, o alquimista atua em duas frentes: o refino de reagentes brutos em derivados puros através de ferramentas físicas de processamento e a síntese química por Bitmask. Manipulando almofarizes, destiladores e espiriteiras acesas, o jogador gerencia reações térmicas delicadas em frascos de laboratório para engarrafar elixires instantâneos, poções de regeneração gradual, antídotos e venenos altamente destrutivos, assumindo riscos constantes de falhas catastróficas e explosões químicas.',
    howItWorks: [
      'Processamento de Derivados: Reagentes clássicos e necromânticos brutos são convertidos em compostos químicos refinados de alta pureza. O sistema possui 6 métodos de refino: Moer (Almofariz), Destilar (Destilador), Cozinhar (Espiriteira), Fermentar (Barril), Encantar (Mesa) e Cristalizar (Processos Especiais). Exemplos incluem extrair Essência de Mandrágora, resfriar Óleo de Beladona ou cristalizar Cinza Sulfúrica.',
      'Ferramentas de Laboratório Físicas:',
      '  • Almofariz Alquímico: Destinado à moagem física. Desgasta-se com o uso até quebrar.',
      '  • Destilador Alquímico: Utilizado para a purificação líquida de óleos, essências e resinas.',
      '  • Espiriteira de Processamento: Fonte de calor ativa por combustível líquido. Exige ignição manual e consome calorias por segundo durante os processos de cozimento.',
      'Dificuldade & Margem de Tentativa: Processar derivados exige perícia alquímica dedicada (com dificuldades variando de 10.0 a 80.0 de skill). O sistema permite que alquimistas audazes tentem receitas com até 20 pontos de skill abaixo do mínimo exigido, sofrendo uma penalidade proporcional na taxa de sucesso. A qualidade final dos derivados gerados (escala de 20 a 100) é definida dinamicamente pela skill real de Alchemy do criador.',
      'Fórmula de Fusão por Bitmask: Os derivados químicos refinados são combinados molecularmente dentro de recipientes de mistura através de uma máscara de bits única. Alquimistas despejam os líquidos intermediários crus em Balões Alquímicos (capacidade máxima de 5 componentes) ou Destiladores Industriais (capacidade máxima de 8 componentes).',
      'Reação Térmica & Risco de Explosão: A fusão de componentes crus exige calor. O alquimista deve aplicar o recipiente de mistura sobre uma Espiriteira acesa. O sucesso do processo depende da qualidade da chama da espiriteira (Excelente, Boa, Regular ou Fraca), que altera diretamente a dificuldade da reação. Falhar nesse estágio acarreta a perda total dos compostos ou uma explosão química devastadora que causa dano de fogo imediato baseado no número de reagentes no composto.',
      'Catálogo de Poções & Integração de Receitas:',
      '  • Elixires (Cura, Mana, Stamina): Concentrados puros de efeito instantâneo. Recuperam atributos imediatamente no momento do consumo (Fraco [Skill 10.0], Normal [Skill 30.0], Forte [Skill 55.0], Superior [Skill 80.0]).',
      '  • Poções (Cura, Mana, Stamina): Filtros de regeneração temporal. Ativam um efeito gradual baseado em deci-pontos que cura os atributos segundo a segundo ao longo de 10 segundos.',
      '  • Antídotos: Poções de purificação celular. Curam envenenamentos instantaneamente se a força do antídoto for equivalente ou superior ao nível do veneno ativo no alvo.',
      '  • Poções de Veneno (Lethal Brews): Toxinas perigosas fabricadas a partir de derivados de Beladona e Musgo:',
      '    - Veneno Fraco (Lesser): Sintetizado com Beladona Refinada, Óleo de Beladona e Musgo Seco (Exige Alchemy 25.0 | 75% Chance).',
      '    - Veneno Regular: Composto por Óleo de Beladona, Resina de Beladona, Extrato de Musgo e Seda Encantada (Exige Alchemy 45.0 | 60% Chance).',
      '    - Veneno Forte (Greater): Combina Resina de Beladona, Beladona Destilada, Musgo Fermentado, Essência de Mandrágora e Fibra de Seda (Exige Alchemy 70.0 | 45% Chance).',
      '    - Veneno Mortal (Deadly): Uma toxina devastadora que exige Beladona Destilada, Essência de Mandrágora, Mandrágora Envelhecida, Seda Alquímica, Cinza Volátil e Pó de Enxofre Refinado (Exige Alchemy 90.0 | 30% Chance).',
      'Saturação Química (Cooldown): O consumo de qualquer elixir ou poção ativa um cooldown corporal severo de 16 segundos, impedindo o personagem de ingerir outro composto até que seu organismo metabolize a poção anterior.',
    ],
    tips: [
      'Zele pelo combustível de sua Espiriteira: uma chama Excelente reduz a dificuldade da reação molecular em 20 pontos de skill, enquanto uma chama Fraca pune o alquimista com +15 de dificuldade.',
      'Ao contrário do processo de fusão molecular que pode explodir seu laboratório, falhar no processamento primário de reagentes base (como moer ou secar musgo) é mais seguro: você perde apenas uma fração dos reagentes e não há risco de explosão física.',
      'A qualidade dos reagentes base utilizados no processamento primário concede bônus diretos de até +10% ou penalidades de até -10% na chance final de refino dos derivados.',
      'Venenos Mortais exigem o nível máximo de processamento químico. Alquimistas que pretendem fabricar venenos [Deadly] devem primeiro refinar individualmente 6 derivados complexos antes de arriscar a reação térmica de fusão a 90.0+ de skill.',
      'Use Tubos de Ensaio para extrair e resgatar misturas intermediárias que foram reagidas incorretamente antes de aplicar calor e arriscar uma explosão desastrosa.',
    ],
  },
  {
    name: 'Sistema de Quests',
    shortDesc: 'Sagas encadeadas, objetivos dinâmicos e consequências reais',
    description:
      'As quests em Myrthos vão muito além de "mate 10 lobos". Elas são construídas em cadeias narrativas (Chains) que podem conter dezenas de capítulos encadeados em Atos, formando verdadeiras sagas políticas e sobrenaturais — Cada quest possui identidade própria (ID, nome, categoria, dificuldade), NPCs de entrega e recebimento, pré-requisitos, objetivos sequenciais, recompensas de ouro, fama, karma e itens, e um sistema completo de diálogo contextual que muda conforme você aceita, progride ou conclui a missão. Os NPCs reagem de maneira diferente dependendo do seu avanço, criando a sensação de que o mundo observa e responde às suas ações.',
    howItWorks: [
      'As quests são divididas em categorias: Tutorial, Main (história principal), Side (secundárias), Daily, Weekly, Event e Hidden (ocultas, descobertas através de exploração ou RP).',
      'As dificuldades variam entre Easy, Normal, Hard, Elite e Legendary — cada uma balanceando desafio, recompensa e exigência de preparação.',
      'Os objetivos podem ser dos tipos: Kill (eliminar criaturas específicas), Collect (coletar itens com chance de drop), Deliver (entregar itens a NPCs), Explore (visitar coordenadas específicas no mapa), TalkTo (dialogar com NPCs), Escort (escoltar personagens), Craft (produzir itens), UseSkill (usar habilidades), Interact (examinar objetos cenográficos) e Defend (resistir a ondas de inimigos num local).',
      'Quests podem ser Repetíveis (com cooldown em horas), Compartilháveis em grupo (todos do party recebem crédito) ou Auto-iniciar (disparadas por eventos no mundo).',
      'Cadeias de quests (Chains) formam enredos longos: concluir um capítulo libera automaticamente o próximo, construindo arcos narrativos que podem durar semanas ou meses.',
      'NPCs possuem falas distintas para "ao oferecer", "ao aceitar", "em progresso" e "ao completar", tornando cada reencontro um momento narrativo diferente.',
    ],
    tips: [
      'Preste atenção às "Dicas de Localização" (LocationHint) de cada objetivo — elas apontam o rumo, mas raramente entregam a resposta de bandeja.',
      'Alguns itens entregues durante quests ficam marcados como "Quest Items" e não podem ser descartados ou negociados — guarde-os com cuidado.',
      'Quests Hidden não aparecem em listas públicas: elas são descobertas investigando o cenário, conversando com NPCs secundários ou interpretando certos ganchos da sua Ficha RP.',
      'As quests da chain principal conectam cada ato que revela peças de uma conspiração maior.',
      'Grupos coordenados recebem crédito compartilhado em quests marcadas como Shareable: forme party antes de iniciar missões difíceis.',
      'Suas escolhas em diálogos e as consequências de certas quests podem alterar o rumo da chain — a Staff acompanha ativamente para desdobrar reações do mundo.',
    ],
  },
  {
    name: 'Profissões & Caminhos',
    shortDesc: 'A classe é o começo, não a prisão',
    description:
      'A classe inicial garante o conjunto base de skills, mas o personagem evolui conforme o que pratica. Com o tempo, é possível refinar o caminho, aprender ofícios paralelos e abrir especializações alinhadas ao RP vivido.',
    howItWorks: [
      'Cada classe começa com uma distribuição fixa de skills.',
      'Treino no mundo faz skills subirem até o teto do personagem.',
      'Mudanças de caminho exigem RP consistente e, em alguns casos, aprovação de staff.',
    ],
  },

    {
    name: 'Sobrevivência: Fome, Sede & Culinária',
    shortDesc: 'Necessidades fisiológicas, purificação de água e culinária com buffs de atributos',
    description:
      'Sobreviver em Myrthos exige atenção constante ao corpo. O sistema de Fome e Sede dita o ritmo da sua energia: ficar sem comer ou beber debilita seu personagem fisicamente, reduzindo drasticamente sua eficácia em combate. A culinária é uma arte de precisão que utiliza utensílios dedicados (como assadeiras, panelas e caldeirões) e duas perícias integradas: Culinária (Cooking) e Paladar (Taste ID). Cozinhar pratos complexos não apenas sacia a fome de forma eficiente, mas também gera banquetes e refeições magistrais capazes de conceder poderosos bônus de atributos (como Força, Destreza e Inteligência) que funcionam como verdadeiros elixires temporários.',
    howItWorks: [
      'Saciedade (Fome): Seu nível de saciedade varia de 0 a 100%. Abaixo de 30%, você recebe avisos; abaixo de 20%, seu personagem começa a gemer e emitir roncos estomacais; abaixo de 10%, ocorrem paralisias periódicas por fraqueza. Ao zerar (0%), inicia-se uma contagem regressiva de 2 minutos antes da morte definitiva por inanição.',
      'Penalidades de Combate: Estar faminto afeta sua eficácia geral. Sua chance de acerto física (Hit Chance) e a eficácia de uso de todas as suas skills ativas e passivas caem gradualmente de 100% até o limite crítico de 25% de eficácia conforme a fraqueza aumenta.',
      'Pureza da Água: A água encontrada no mundo possui classificações (Suja, Limpa, Fervida, Mineral e Contaminada). Beber água Suja (35% de chance) ou Contaminada (90% de chance) causa infecções e doenças graves. Águas perigosas devem ser tratadas: passar por um Filtro melhora sua categoria em um nível, e Fervê-la em uma fonte de calor a torna estéril e segura (Água Fervida).',
      'Culinária Avançada: O sucesso ao cozinhar depende da sua skill de Culinária combinada com o seu Paladar (Taste ID), que atua como sinergia passiva. Rolagens excelentes podem resultar em um "Sucesso Perfeito" (Obra-prima), garantindo um bônus de +25% de saciedade e eficácia do prato. Falhas Críticas queimam todos os ingredientes.',
      'Buffs de Banquete: Pratos com dificuldade de preparo igual ou superior a 50 concedem buffs de atributos reais (Vigor, Agilidade, Sabedoria, Fortitude, Vitalidade, Energia, Concentração, Fúria, Proteção e Supremo). O buff "Supremo" (dificuldade 90+), por exemplo, adiciona até +25 em Força, Destreza e Inteligência simultaneamente por 1 hora.',
    ],
    tips: [
      'Acompanhe seu status em tempo real usando o comando [fome para abrir o mini-gump flutuante de saciedade ou o gump completo de modificadores.',
      'Recipientes vazios (como garrafas de poção, canecas de estanho e cantis) não desaparecem ao beber; eles são recuperados em sua mochila para que você possa reabastecê-los em fontes de água purificada, poços ou cochos.',
      'Se encontrar Água Contaminada, passe-a primeiro por um filtro de argila para torná-la apenas Suja, e depois ferva-a em uma panela para transformá-la em Água Fervida segura.',
      'Utilize o "Livro de Receitas" para estudar a dificuldade de preparo de cada prato, os utensílios necessários (como frigideira para grelhados ou caldeirão para ensopados) e os buffs que cada alimento concede.',
    ],
  },

    {
    name: 'Agricultura & Cultivo',
    shortDesc: 'Aragem de terra, ciclos de vida botânicos e colheita de insumos mágicos',
    description:
      'A terra de Myrthos é fértil para aqueles que sabem como tratá-la. O sistema de plantação permite que os jogadores utilizem a perícia de Sobrevivência (Camping) para transformar o terreno selvagem em campos cultiváveis. Através do uso de um Arado, você pode preparar o solo, semear diferentes tipos de cultivos — divididos entre vegetais comestíveis, reagentes alquímicos/mágicos e fibras industriais — e gerenciar o tempo de crescimento. Plantas maduras rendem ingredientes culinários frescos e insumos mágicos valiosos, além de permitirem a extração de novas sementes para perpetuar a sua fazenda.',
    howItWorks: [
      'Preparação do Solo: Usando um Arado (Plow) diretamente em tiles de grama ou terra natural, você gasta pontos de durabilidade da ferramenta para criar uma "Terra Arada". O processo exige esforço físico e tempo de canalização que diminui conforme sua perícia em Camping aumenta.',
      'Restrições de Clima: Plantas precisam de luz solar direta. Não é possível arar a terra em masmorras (dungeons), áreas subterrâneas, locais cobertos (indoors) ou dentro de propriedades residenciais (House Regions).',
      'Ciclo de Vida Botânico: Toda planta passa por 5 estágios rígidos de desenvolvimento: Broto (Sprout) -> Jovem (Jovem) -> Maduro (Mature) -> Morto (Dead) -> Decaído (Decay). O crescimento continua progredindo mesmo que você esteja offline.',
      'Colheita de Frutos: Ao atingir o estágio Maduro, a planta gera frutos com base na habilidade de quem a semeou (fórmula "Between"). Para colher sem estragar o alimento, é obrigatório ter uma faca ou ferramenta de colheita adequada equipada na mão, caso contrário você esmagará o fruto.',
      'Extração de Sementes: Quando todos os frutos de uma planta madura são colhidos, ela morre. Usando uma ferramenta afiada nos talos secos (estágio Morto ou Decaído), você tem uma chance (ChanceSementes) de extrair novas sementes para o próximo plantio, permitindo multiplicar seu estoque.',
      'Categorias de Cultivo: O catálogo de sementes é extenso e exige níveis progressivos de Camping: Vegetais fáceis (Rabanete, Alface, Cenoura, Batata a 0.0), cereais e temperos médios (Trigo, Abóbora, Pimenta, Gengibre a 20.0+), reagentes mágicos essenciais (Mandrake a 15.0, Alho a 20.0, Ginseng a 30.0), e plantas raras/complexas (Beladona, Cacau e Fumo a 50.0+).',
    ],
    tips: [
      'GMs possuem crescimento instantâneo de plantas para fins de teste por meio dos comandos internos de depuração do Arado.',
      'Sempre ande com uma faca ou adaga na mochila e equipe-a antes de dar dois cliques em uma planta madura. Tentar colher com as mãos vazias destrói o fruto e desperdiça seu tempo.',
      'Não ignore as plantas mortas! A extração de sementes no final da vida da planta é a única forma de obter novas sementes sem precisar comprá-las de mercadores NPCs.',
      'Fibras como o Algodão (exige 10.0 de Camping) são fundamentais para alfaiates criarem bandagens e vestimentas, tornando o fazendeiro um parceiro comercial indispensável para qualquer guilda.',
    ],
  },

    {
    name: 'Pecuária, Adestramento & Genética de Animais',
    shortDesc: 'Genética hereditária, ecossistema de predadores, pastoreio e cruzamento de montarias',
    description:
      'Os animais e montarias de Myrthos possuem uma biologia complexa e dinâmica. Longe de serem meros pixels estáticos, cada criatura possui gênero (Macho ou Fêmea), tamanho, bioma nativo, dieta alimentar estrita (Carnívoro, Herbívoro ou Onívoro) e um temperamento que dita sua agressividade. Adestradores e criadores podem cruzar suas espécimes para iniciar linhas de criação seletiva. O cruzamento herda e aprimora atributos físicos ao longo de gerações, permitindo que você crie linhagens de montarias e mascotes de combate muito mais poderosos do que os encontrados na natureza.',
    howItWorks: [
      'Ciclo Alimentar & Pastoreio: Os animais sentem fome ao longo do tempo. Herbívoros pastam de forma autônoma em tiles de grama, floresta ou selva, contanto que a área não esteja sobrecarregada (limite de 5 animais pastando no mesmo quadrante). Carnívoros famintos entram em modo de caça ativa e atacam presas menores de forma realista.',
      'Alimentação Manual: Você pode alimentar seus animais diretamente arrastando comida até eles. Carnívoros aceitam apenas carnes (cruas ou cozidas), Herbívoros aceitam vegetais, frutas ou feno, e Onívoros aceitam ambos. Alimentá-los mantém sua saciedade alta, impedindo que sofram danos por inanição.',
      'Cruzamento Genético ([CruzarAnimal): Adestradores podem acasalar um Macho e uma Fêmea da mesma espécie (sejam criaturas comuns ou montarias) que estejam próximos, maduros e alimentados. O processo exige as perícias de Animal Taming e Herding do adestrador e realiza um teste de sucesso baseado na média dessas habilidades.',
      'Gestação & Nascimento: Uma fêmea bem-sucedida entra em estado de Gravidez por 7 dias em tempo real. Após o parto, ela dá à luz a um filhote que precisará de mais 7 dias para atingir a maturidade. Fêmeas e machos entram em tempo de recarga (cooldown) após o acasalamento.',
      'Evolução de Gerações (Bônus Genético): Cada nova geração nascida de cruzamentos (Gen 1, Gen 2, Gen 3, etc.) herda um bônus cumulativo de +5% em todos os seus atributos máximos (Vida, Stamina, Mana, Dano Mínimo e Máximo) e perícias de combate por nível de geração.',
      'Instinto de Fuga & Ataques Especiais: Animais selvagens ou feridos entram em modo de fuga (Flee Mode) automaticamente quando sua vida cai abaixo de um limiar ou se detectarem predadores dominantes. Em combate, desferem ataques específicos de sua fofura ou ferocidade: mordidas causam sangramento contínuo, chifradas (Gore) causam atordoamento (Stun), e coices (Kick) causam derrubada física (Knockback).',
    ],
    tips: [
      'Utilize o comando [CruzarAnimal para selecionar os pais da nova ninhada. Lembre-se de desmontar de suas montarias antes de tentar iniciar o processo.',
      'A perícia de Herding (Pastoreio) é tão importante quanto Animal Taming na hora de cruzar seus espécimes; negligenciar Herding reduz drasticamente as chances de o acasalamento ser bem-sucedido.',
      'Animais famintos lutam mal e podem morrer de fome se deixados sem pasto ou alimento. Fêmeas grávidas consomem o dobro de energia — mantenha-as bem alimentadas durante os 7 dias de gestação.',
      'As montarias e mascotes Machos possuem naturalmente +10% de Vida e Dano em comparação às Fêmeas, mas apenas as Fêmeas podem gerar novas linhagens. Escolha com sabedoria quem levar para o combate e quem manter seguro no rancho.',
    ],
  },

  
  {
    name: 'Fiscalização Ativa',
    shortDesc: 'A staff observa, anota e intervém quando necessário',
    description:
      'Moderadores podem acompanhar cenas de forma invisível ou disfarçada. A fiscalização não existe para punir e sim para manter a ambientação coerente, premiar bons intérpretes e corrigir desvios reiterados.',
    howItWorks: [
      'GMs podem observar sem se anunciar.',
      'Boas interpretações geram notas positivas e, eventualmente, recompensas.',
      'Desvios graves de ambientação geram advertências ou intervenções diretas.',
    ],
  },
  {
    name: 'Sistema de Guildas',
    shortDesc: 'Organizações políticas, militares e religiosas',
    description:
      'Guildas em Myrthos têm peso político. Ordens militares, casas mercantis, cultos clericais e sociedades élficas disputam influência em Aramor e Thessomar, e cada uma oferece ganchos próprios de RP, missões internas e inimigos recorrentes.',
    howItWorks: [
      'Guildas podem ser criadas por jogadores, com aval de staff.',
      'Cada guilda tem alinhamento político claro dentro da lore.',
      'Conflitos entre guildas podem gerar quests e eventos de grande escala.',
    ],
  },
  {
    name: 'Economia & Ofícios',
    shortDesc: 'O mercado como ferramenta narrativa',
    description:
      'A economia do shard valoriza produção de artífices, cadeia de suprimentos e rotas comerciais. Thessomar vive do comércio informal; Aramor controla tributos. Oficinas, caravanas e navios são peças ativas no RP.',
    howItWorks: [
      'Recursos são extraídos, refinados e vendidos entre jogadores.',
      'Caravanas e navios podem ser escoltados, saqueados ou taxados.',
      'A Coroa taxa, Thessomar sonega, e o jogo acontece no meio.',
    ],
  },
  {
    name: 'Combate & PvP Consentido',
    shortDesc: 'Luta justificada por narrativa',
    description:
      'Combate PvP acontece dentro de contexto de RP: duelos formais, emboscadas justificadas, conflitos entre guildas e cenas de guerra. PvP gratuito e sem justificativa é desencorajado e pode ser revertido pela staff.',
    howItWorks: [
      'Duelos acertados em RP são sempre válidos.',
      'Emboscadas precisam de justificativa narrativa minimamente plausível.',
      'Zonas específicas podem ter regras próprias de hostilidade.',
    ],
  },
];

export type VocabGroup = {
  title: string;
  terms: { q: string; pt: string }[];
};

export const ELVISH_GROUPS: VocabGroup[] = [
  {
    title: 'Numerais',
    terms: [
      { q: 'minë', pt: 'um' },
      { q: 'atta', pt: 'dois' },
      { q: 'neldë', pt: 'três' },
      { q: 'canta', pt: 'quatro' },
      { q: 'lempë', pt: 'cinco' },
      { q: 'enquë', pt: 'seis' },
      { q: 'otso', pt: 'sete' },
      { q: 'tolto', pt: 'oito' },
      { q: 'nertë', pt: 'nove' },
      { q: 'cainen', pt: 'dez' },
      { q: 'minquë', pt: 'onze' },
      { q: 'rastä', pt: 'doze' },
    ],
  },
  {
    title: 'Verbos',
    terms: [
      { q: 'na', pt: 'é' },
      { q: 'nar', pt: 'são' },
      { q: 'linda', pt: 'cantar' },
      { q: 'quet', pt: 'falar' },
      { q: 'fir', pt: 'morrer' },
      { q: 'tir', pt: 'observar, vigiar, guardar' },
      { q: 'tur', pt: 'governar, dominar' },
      { q: 'lanta', pt: 'cair' },
      { q: 'laita', pt: 'abençoar, cumprimentar' },
      { q: 'car', pt: 'fazer' },
      { q: 'ista', pt: 'saber' },
      { q: 'sil', pt: 'brilhar' },
    ],
  },
  {
    title: 'Pessoas',
    terms: [
      { q: 'Elda', pt: 'elfo' },
      { q: 'Atan', pt: 'homem mortal' },
      { q: 'nér', pt: 'homem adulto' },
      { q: 'níss', pt: 'mulher adulta' },
      { q: 'quén', pt: 'pessoa' },
      { q: 'hina', pt: 'criança' },
      { q: 'lië', pt: 'povo' },
      { q: 'vendë', pt: 'moça, donzela' },
      { q: 'aranel', pt: 'princesa' },
      { q: 'aran', pt: 'rei' },
      { q: 'tári', pt: 'rainha' },
      { q: 'roquen', pt: 'cavaleiro' },
    ],
  },
  {
    title: 'Natureza',
    terms: [
      { q: 'alda', pt: 'árvore' },
      { q: 'lossë', pt: 'flor, neve' },
      { q: 'malinornë', pt: 'mallorn, árvore élfica' },
      { q: 'narmo', pt: 'lobo' },
      { q: 'rocco', pt: 'cavalo' },
      { q: 'aiwë', pt: 'pássaro' },
      { q: 'kelva', pt: 'animal' },
      { q: 'lókë', pt: 'dragão' },
    ],
  },
  {
    title: 'Guerra e Armas',
    terms: [
      { q: 'ohta', pt: 'guerra' },
      { q: 'ohtar', pt: 'guerreiro' },
      { q: 'ehtyar', pt: 'lanceiro' },
      { q: 'cotumo', pt: 'inimigo' },
      { q: 'macil', pt: 'espada' },
      { q: 'ecet', pt: 'espada curta' },
      { q: 'quinga', pt: 'arco' },
      { q: 'pilin', pt: 'flecha' },
      { q: 'ehtë', pt: 'lança' },
      { q: 'cassa', pt: 'elmo' },
      { q: 'hossë', pt: 'exército' },
    ],
  },
  {
    title: 'Adjetivos',
    terms: [
      { q: 'vanya', pt: 'belo, bonito' },
      { q: 'alta', pt: 'grande' },
      { q: 'calima', pt: 'brilhante, claro' },
      { q: 'taura', pt: 'forte, poderoso' },
      { q: 'saila', pt: 'sábio' },
      { q: 'úmëa', pt: 'maligno' },
      { q: 'firin', pt: 'morto' },
      { q: 'raica', pt: 'errado, deformado' },
      { q: 'anda', pt: 'longo' },
      { q: 'lissë', pt: 'doce' },
      { q: 'sára', pt: 'amargo' },
    ],
  },
  {
    title: 'Cores e Materiais',
    terms: [
      { q: 'carnë', pt: 'vermelho' },
      { q: 'niquë', pt: 'branco' },
      { q: 'morë', pt: 'negro' },
      { q: 'luin', pt: 'azul' },
      { q: 'laiqua', pt: 'verde' },
      { q: 'laurëa', pt: 'dourado' },
      { q: 'silma', pt: 'prateado' },
      { q: 'varnë', pt: 'marrom' },
      { q: 'malta', pt: 'ouro' },
      { q: 'telpë', pt: 'prata' },
      { q: 'anga', pt: 'ferro' },
      { q: 'ondo', pt: 'pedra' },
      { q: 'helcë', pt: 'gelo' },
    ],
  },
  {
    title: 'Geografia e Astronomia',
    terms: [
      { q: 'norë', pt: 'terra' },
      { q: 'arda', pt: 'reino' },
      { q: 'oron', pt: 'montanha' },
      { q: 'rassë', pt: 'pico alto' },
      { q: 'nandë', pt: 'vale' },
      { q: 'mallë', pt: 'caminho, estrada' },
      { q: 'sirë', pt: 'rio' },
      { q: 'ëar', pt: 'mar' },
      { q: 'nöre', pt: 'noite' },
      { q: 'aurë', pt: 'dia' },
      { q: 'Formen', pt: 'Norte' },
      { q: 'Hyarmen', pt: 'Sul' },
      { q: 'Rómen', pt: 'Leste' },
      { q: 'Númen', pt: 'Oeste' },
      { q: 'Anar', pt: 'Sol' },
      { q: 'Isil', pt: 'Lua' },
      { q: 'Menel', pt: 'Céu' },
      { q: 'Elen', pt: 'Estrela' },
    ],
  },
  {
    title: 'Saudações e Expressões',
    terms: [
      { q: 'Namarië!', pt: 'Adeus!' },
      { q: 'Elen síla lúmenn’omentielvo!', pt: 'Uma estrela brilha na hora de nosso encontro' },
      { q: 'Almarë', pt: 'Benção' },
      { q: 'Aiya', pt: 'Seja abençoado' },
      { q: 'Alassëa rá', pt: 'Bom dia' },
      { q: 'Alassëa lómë', pt: 'Boa noite' },
      { q: 'Alassë undomë', pt: 'Boa tarde / entardecer' },
    ],
  },
];

export const ELVISH_SAMPLES = [
  {
    name: 'Eldalië',
    meaning: 'O Povo dos Elfos',
    breakdown: 'elda (elfo) + lië (povo)',
  },
  {
    name: 'Nárëlókë',
    meaning: 'Dragão de Fogo',
    breakdown: 'nárë (fogo) + lókë (dragão)',
  },
  {
    name: 'Andamallë',
    meaning: 'Caminho Longo',
    breakdown: 'anda (longo) + mallë (caminho)',
  },
  {
    name: 'Elenlindäle',
    meaning: 'Canção das Estrelas',
    breakdown: 'elen (estrela) + lindäle (canção)',
  },
  {
    name: 'Numenöre',
    meaning: 'Terra do Oeste',
    breakdown: 'Númen (oeste) + norë (terra)',
  },
  {
    name: 'Silmalótë',
    meaning: 'Flor Prateada',
    breakdown: 'silma (prateado) + lótë (flor)',
  },
  {
    name: 'Carmacil',
    meaning: 'Fazedor de Espadas',
    breakdown: 'car (fazer) + macil (espada)',
  },
  {
    name: 'Lossëaranel',
    meaning: 'Princesa das Neves',
    breakdown: 'lossë (neve) + aranel (princesa)',
  },
  {
    name: 'Aranrossë',
    meaning: 'Rei da Montanha',
    breakdown: 'aran (rei) + rossë / rassë (pico)',
  },
];
