import { useEffect, useMemo, useState } from 'react';
import {
  BookOpenText,
  ChevronRight,
  Crown,
  Eye,
  Flame,
  LayoutGrid,
  Map,
  ScrollText,
  Shield,
  Swords,
  Trees,
  Users,
  Search,
  Castle,
  Sailboat,
  Snowflake,
  Milestone,
  Sparkles,
  Scroll,
  Landmark,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import {
  CLASS_CATEGORIES,
  CITY_ARAMOR,
  CITY_THESSOMAR,
  ELVISH_GROUPS,
  ELVISH_SAMPLES,
  ELF_RACE,
  GAME_SYSTEMS,
  HERO_BY_PAGE,
  HUMAN_RACE,
  MENU,
  PAGE_TITLES,
  POLITICS,
  TIMELINE,
  type PageId,
  LOCATIONS_THESSOMAR,
  BIOS_THESSOMAR,
  LOCATIONS_ARAMOR,
  BIOS_ARAMOR_SERVOS,
  Biography,
  BIOS_ARAMOR_CONSELHO,
  BIOS_ARAMOR_REALEZA,
  CityLocation,
  DEITIES,
  LORE_CHAPTERS,
} from './siteData';
import './styles/myrthos.css';

type MenuGroupLabel = (typeof MENU)[number]['label'];
type AppPageId = PageId | 'biografia';

type PageMeta = {
  kicker: string;
  title: string;
  subtitle: string;
  Icon: LucideIcon;
};

const PAGE_META: Record<AppPageId, PageMeta> = {
  inicio: {
    kicker: 'Os mortos se erguem dia e noite contra os humanos e elfos',
    title: 'Mystery Shard RP',
    subtitle: '',
    Icon: Crown,
  },
  lore: {
  kicker: 'Documento-mãe de ambientação',
  title: 'A Lore de Myrthos',
  subtitle: 'Da Guerra Divina ao Ano 1630 — tudo o que existe, existiu e ameaça existir no continente.',
  Icon: ScrollText,
},
  ambientacao: {
    kicker: 'Nova lore oficial',
    title: 'Ambientação de Myrthos',
    subtitle: 'Uma nova leitura do passado de Belaryar, da Coroa de Aramor e da ascensão de Thessomar.',
    Icon: ScrollText,
  },
    biografia: {
    kicker: 'Persongens importantes',
    title: 'Realeza e imporantes membros da sociedade',
    subtitle: '',
    Icon: ScrollText,
  },
  'cidade-aramor': {
    kicker: 'Cidade da Coroa',
    title: 'Aramor',
    subtitle: 'A fortaleza régia erguida para vigiar, cobrar e resistir.',
    Icon: Castle,
  },
  'cidade-thessomar': {
    kicker: 'Cidade do ofício e do exílio',
    title: 'Thessomar',
    subtitle: 'Docas, exilados, artesãos, mercados violentos e a moeda que desafia a nobreza.',
    Icon: Sailboat,
  },
  mapa: {
    kicker: 'Geografia do jogo',
    title: 'Mapa do Continente',
    subtitle: 'Norte nevado, cinturão verde, coração desértico e os velhos caminhos da ruína.',
    Icon: Map,
  },
  'racas-humanos': {
    kicker: 'Raças jogáveis',
    title: 'Humanos',
    subtitle: 'Adaptáveis, ambiciosos e politicamente divididos entre culpa colonial e ordem régia.',
    Icon: Users,
  },
  'racas-elfos': {
    kicker: 'Raças jogáveis',
    title: 'Elfos',
    subtitle: 'Belos, ritualísticos e fragmentados entre a memória do oriente e a sobrevivência do presente.',
    Icon: Trees,
  },
  classes: {
    kicker: 'Profissões & arquétipos',
    title: 'Classes',
    subtitle: 'Superclasses, profissões e listas de skills iniciais em formato inspirado no shard antigo.',
    Icon: Swords,
  },
  heranca: {
    kicker: 'Segredo de Estado',
    title: 'A Herança',
    subtitle: 'O artefato que não dorme em catacumbas: ele repousa ao lado da cama do rei.',
    Icon: Snowflake,
  },
  'como-jogar': {
    kicker: 'Arquivos do jogo',
    title: 'Download do Mystery Shard',
    subtitle: 'Baixe o patcher para instalar ou atualizar o jogo e o client do Mystery Shard em um só lugar.',    Icon: BookOpenText,
  },
    sistemas: {
    kicker: 'Mecânicas do shard',
    title: 'Sistemas',
    subtitle: 'Ficha RP, atributos, fiscalização, quests, guildas e as engrenagens que movem Myrthos.',
    Icon: LayoutGrid,
  },
  vocabulario: {
    kicker: 'Idioma cerimonial',
    title: 'Vocabulário Élfico',
    subtitle: 'Quenya usado em cerimônias, documentos oficiais, saudações e nomes de linhagem.',
    Icon: Sparkles,
  },
};

const PAGE_TO_MENU: Record<PageId, MenuGroupLabel> = {
  inicio: 'Ambientação',
  ambientacao: 'Ambientação',
  biografia: 'Ambientação',
  'cidade-aramor': 'Cidade',
  'cidade-thessomar': 'Cidade',
  mapa: 'Mapa',
  'racas-humanos': 'Raças',
  'racas-elfos': 'Raças',
  classes: 'Classes',
  heranca: 'Ambientação',
  'como-jogar': 'Como Jogar?',
  sistemas: 'Como Jogar?',
  vocabulario: 'Vocabulário Élfico',
  lore: 'Mapa'
};

function Tag({ children, tone = 'default' }: { children: React.ReactNode; tone?: 'default' | 'gold' | 'blue' | 'red' | 'green' }) {
  return <span className={`tag tag-${tone}`}>{children}</span>;
}

function SectionTitle({ icon: Icon, children }: { icon: LucideIcon; children: React.ReactNode }) {
  return (
    <div className="section-title-row">
      <Icon size={18} />
      <h2>{children}</h2>
    </div>
  );
}

function LorePage() {
  return (
    <div className="page-article lore-page">

      <div className="lore-frontispiece">
        <div className="lore-frontispiece-rule" />
        <p className="lore-frontispiece-sub">Documento-mãe de Ambientação</p>
        <h1 className="lore-frontispiece-title">A Lore Completa<br />de Myrthos</h1>
        <p className="lore-frontispiece-sub">Mystery Shard RP — Myrthos, Ano 1630</p>
        <div className="lore-frontispiece-rule" />
        <p className="lore-frontispiece-epigraph">
          "Tir. Observar, guardar, vigiar.<br />
          É o verbo mais importante que meu povo conhece."
          <span>— Miriel Tindómë, Exilada do Oriente</span>
        </p>
      </div>

      {LORE_CHAPTERS.map((chapter) => (
        <article key={chapter.number} className="lore-chapter">

          <header className="lore-chapter-header">
            <div className="lore-chapter-ornament">✦</div>
            <div className="lore-chapter-number">Livro {chapter.number}</div>
            <h2 className="lore-chapter-title">{chapter.title}</h2>
            {chapter.subtitle && (
              <div className="lore-chapter-subtitle">{chapter.subtitle}</div>
            )}
            <div className="lore-chapter-rule" />
          </header>

          <div className="lore-chapter-body">
            {chapter.sections.map((section, si) => (
              <div key={si} className="lore-section">
                {section.heading && (
                  <h3 className="lore-section-heading">{section.heading}</h3>
                )}

                {section.body.map((para, pi) => (
                  <p
                    key={pi}
                    className={
                      'lore-para' +
                      (pi === 0 && section.heading ? ' lore-para-drop' : '')
                    }
                  >
                    {para}
                  </p>
                ))}

                {section.pull && (
                  <blockquote className="lore-pull">
                    {section.pull}
                  </blockquote>
                )}
              </div>
            ))}
          </div>

          <div className="lore-chapter-divider">· · ·</div>
        </article>
      ))}

      <footer className="lore-colophon">
        <div className="lore-frontispiece-rule" />
        <p>Fim do Documento-Mãe de Ambientação</p>
        <p className="lore-colophon-sub">Mystery Shard RP — Myrthos, Ano 1630. A nova fase começa.</p>
        <div className="lore-frontispiece-rule" />
      </footer>

    </div>
  );
}

function InfoCard(props: { title: string; text: string; Icon?: LucideIcon; tone?: 'default' | 'gold' | 'red' | 'blue' | 'green' }) {
  const Icon = props.Icon;
  return (
    <div className={`info-card info-card-${props.tone ?? 'default'}`}>
      {Icon && <div className="info-card-icon"><Icon size={18} /></div>}
      <div>
        <div className="info-card-title">{props.title}</div>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="bullet-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function useHashPage(defaultPage: PageId) {
  const readHash = (): PageId => {
    const raw = window.location.hash.replace('#', '');
    const ids: PageId[] = [
      'inicio','lore', 'ambientacao','biografia','cidade-aramor', 'cidade-thessomar', 'mapa',
      'racas-humanos', 'racas-elfos', 'classes', 'heranca', 'como-jogar',
      'sistemas', 'vocabulario',
    ];
    return ids.includes(raw as PageId) ? (raw as PageId) : defaultPage;
  };

  const [page, setPage] = useState<PageId>(readHash);

  useEffect(() => {
    const onHash = () => setPage(readHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = (next: PageId) => {
    window.location.hash = next;
    setPage(next);
  };

  return { page, navigate };
}

function InicioPage({ go }: { go: (p: PageId) => void }) {
  return (
    <div className="page-article">
      <SectionTitle icon={Crown}>Uma nova fase para Myrthos</SectionTitle>
      <p>
      
      </p>
      
      <p>
        A nova ambientação usa a espinha dorsal do material oficial antigo — descoberta do continente,
        colônia em ruptura, queda sob escuridão, tensão entre linhagens e sobrevivência marítima — mas reescreve
        nomes, focos e estrutura política para criar uma <strong>nova lore.</strong>.
      </p>

      <div className="hero-actions-grid">
        <button className="quick-panel" onClick={() => go('ambientacao')}>
          <ScrollText size={18} />
          <div>
            <strong>Ambientação</strong>
            <span>Nova leitura histórica de Myrthos, Belaryar, Aramor e Thessomar.</span>
          </div>
        </button>
        <button className="quick-panel" onClick={() => go('cidade-aramor')}>
          <Castle size={18} />
          <div>
            <strong>Cidade</strong>
            <span>Distritos, elite régia, docas militares e os bairros civis de Aramor.</span>
          </div>
        </button>
        <button className="quick-panel" onClick={() => go('mapa')}>
          <Map size={18} />
          <div>
            <strong>Mapa</strong>
            <span>Geografia do continente, rotas, regiões e pontos estratégicos.</span>
          </div>
        </button>
        <button className="quick-panel" onClick={() => go('classes')}>
          <Swords size={18} />
          <div>
            <strong>Classes</strong>
            <span>Classes, suas skills e habilidades.</span>
          </div>
        </button>
      </div>

      <SectionTitle icon={Landmark}>Princípios desta fase</SectionTitle>
      <div className="card-grid two">
        <InfoCard
          Icon={Shield}
          tone="gold"
          title="Monarquia preservada"
          text="A Coroa continua central: o rei governa de Aramor, a nobreza pesa na política e a Herança permanece nas mãos da monarquia."
        />
        <InfoCard
          Icon={Eye}
          tone="blue"
          title="Política entre cidades"
          text="Aramor e Thessomar dependem uma da outra, mas se desprezam o suficiente para transformar toda crise em disputa de poder."
        />
        <InfoCard
          Icon={Users}
          tone="green"
          title="Foco racial fechado"
          text="O site fala apenas das raças jogáveis humanas e élficas. As demais sobrevivem somente como ameaça histórica, rumor ou força externa."
        />
        <InfoCard
          Icon={Snowflake}
          tone="red"
          title="Sistema da Herança mantido"
          text="O artefato continua sendo o eixo secreto da campanha. Seu guardião é o rei; seu cofre é o Baú Glacial ao lado de sua cama."
        />
      </div>
    </div>
  );
}

function AmbientacaoPage() {
  return (
    <div className="page-article">
      <SectionTitle icon={ScrollText}>Panorama Geral</SectionTitle>
      <p>
        Myrthos não nasceu como reino. Nasceu como ferida. Primeiro foi promessa de expansão marítima,
        depois colônia de extração, depois trincheira de guerra civil, e por fim território de sobreviventes.
        Duzentos anos após a queda de Belaryar, o continente vive entre duas memórias concorrentes:
        a memória régia de <strong>Aramor</strong>, que se vê como bastião da ordem, e a memória popular de
        <strong> Thessomar</strong>, que lembra a fome, o exílio e os custos reais da obediência.
      </p>
      <p>
        Acima dessas disputas paira o segredo maior da campanha: <strong>a Herança</strong>, artefato antigo
        ligado aos selos de contenção do continente. A monarquia afirma guardá-la pelo bem comum.
        Os mercadores juram que ela atrai ruína. Os elfos mais antigos dizem que ela jamais deveria
        ter sido removida do silêncio ritual que a protegia.
      </p>

      <SectionTitle icon={Milestone}>Linha do Tempo</SectionTitle>
      <div className="timeline-list">
        {TIMELINE.map((item) => (
          <div className="timeline-item" key={item.year + item.title}>
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-body">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <SectionTitle icon={Crown}>Monarquia & Política</SectionTitle>
      <div className="card-grid two">
        {POLITICS.map((item) => (
          <InfoCard key={item.title} title={item.title} text={item.text} tone="gold" />
        ))}
      </div>
    </div>
  );
}


function BioCard({ bio }: { bio: Biography }) {
  return (
    <div className={`bio-card bio-card-${bio.tagTone}`}>
      <div className="bio-header">
        <div>
          <h3 className="bio-name">{bio.name}</h3>
          <span className="bio-epithet">"{bio.epithet}"</span>
        </div>
        <Tag tone={bio.tagTone}>{bio.tag}</Tag>
      </div>

      <div className="bio-meta">
        <span>{bio.race}</span>
        <span>{bio.age}</span>
        <span>{bio.role}</span>
      </div>

      {bio.healthBars !== undefined && (
        <div className="bio-health">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={`health-block ${i < bio.healthBars! ? 'filled' : 'empty'}`} />
          ))}
          <span className="health-label">Saúde</span>
        </div>
      )}

      <p className="bio-desc">{bio.description}</p>

      {bio.secrets && bio.secrets.length > 0 && (
        <div className="bio-secrets">
          {bio.secrets.map((s) => (
            <div key={s.label} className="bio-secret-row">
              <strong>{s.label}:</strong> {s.text}
            </div>
          ))}
        </div>
      )}

      {bio.narrativeHint && (
        <div className="bio-hint">
          <span className="bio-hint-icon">💡</span>
          <span>{bio.narrativeHint}</span>
        </div>
      )}

      {bio.quote && <blockquote className="bio-quote">"{bio.quote}"</blockquote>}
    </div>
  );
}

/* ---- cartão de local ---- */
function LocationCard({ loc }: { loc: CityLocation }) {
  return (
    <div className={`location-card location-card-${loc.tagTone}`}>
      <div className="location-header">
        <span className="location-icon">{loc.icon}</span>
        <h3>{loc.name}</h3>
        <Tag tone={loc.tagTone}>{loc.tag}</Tag>
      </div>
      <p className="location-keeper"><strong>Guardião:</strong> {loc.keeper}</p>
      <p>{loc.desc}</p>
    </div>
  );
}

/* ---- página principal ---- */
function BiografiaPage() {
  return (
    <div className="page-article">

      {/* ═══════ PANTEÃO ═══════ */}
      <SectionTitle icon={Sparkles}>Panteão de Myrthos</SectionTitle>
      <p>
        Três forças regem a fé — e o medo — do continente. Duas são adoradas. A terceira é temida,
        negada e, nas sombras, invocada por quem já perdeu tudo.
      </p>

      <div className="card-grid three compact-top">
        {DEITIES.map((d) => (
          <div key={d.name} className={`deity-card deity-card-${d.tone}`}>
            <div className="deity-icon">{d.icon}</div>
            <h3>{d.name}</h3>
            <span className="deity-epithet">{d.epithet}</span>
            <div className="deity-alignment">{d.alignment}</div>
            <div className="deity-aspects">
              {d.aspects.map((a) => (
                <Tag key={a} tone={d.tone}>{a}</Tag>
              ))}
            </div>
            <p className="deity-dogma">{d.dogma}</p>
            <div className="deity-followers"><strong>Seguidores:</strong> {d.followers}</div>
          </div>
        ))}
      </div>

      {/* ═══════ ARAMOR — FAMÍLIA REAL ═══════ */}
      <SectionTitle icon={Crown}>Aramor — Casa Vannemere</SectionTitle>
      <p>
        A família que carrega a Coroa — e a maldição. Aldric governa de uma fortaleza que está
        devorando seu corpo. Seraphine olha para fora. Edric escuta as paredes. E Cinza fareja o que
        ninguém quer admitir.
      </p>
      <div className="bio-grid">
        {BIOS_ARAMOR_REALEZA.map((bio) => (
          <BioCard key={bio.name} bio={bio} />
        ))}
      </div>

      {/* ═══════ ARAMOR — CONSELHO ═══════ */}
      <SectionTitle icon={Shield}>Aramor — O Conselho da Coroa</SectionTitle>
      <p>
        Cinco cadeiras. Cinco agendas. Um mago que conversa com o inimigo, um general que não dorme,
        uma ladra que controla o ouro, um bispo que perdeu a fé e uma mineradora que comanda uma milícia
        secreta. E todos juram servir o Lorde Regente.
      </p>
      <div className="bio-grid">
        {BIOS_ARAMOR_CONSELHO.map((bio) => (
          <BioCard key={bio.name} bio={bio} />
        ))}
      </div>

      {/* ═══════ ARAMOR — SERVOS & COZINHA ═══════ */}
      <SectionTitle icon={Eye}>Aramor — Servos, Cozinha & Sombras</SectionTitle>
      <p>
        Quem limpa o chão vê o que o conselheiro esconde. Quem cozinha ouve o que o general sussurra.
        Os servos de Aramor sabem mais do que qualquer nobre imagina — e alguns guardam segredos que
        podem salvar ou destruir a cidade.
      </p>
      <div className="bio-grid">
        {BIOS_ARAMOR_SERVOS.map((bio) => (
          <BioCard key={bio.name} bio={bio} />
        ))}
      </div>

      {/* ═══════ LOCAIS DE ARAMOR ═══════ */}
      <SectionTitle icon={Castle}>Aramor — Locais Notáveis</SectionTitle>
      <div className="location-grid">
        {LOCATIONS_ARAMOR.map((loc) => (
          <LocationCard key={loc.name} loc={loc} />
        ))}
      </div>

      {/* ═══════ THESSOMAR ═══════ */}
      <SectionTitle icon={Sailboat}>Thessomar — Os Filhos do Exílio</SectionTitle>
      <p>
        Do outro lado da Baía dos Mortos, onde a areia queima e a lei de Aramor chega diluída em sal,
        Thessomar respira. Um oásis de exilados, mercenários, contrabandistas e a única elfa viva
        que se lembra de Belaryar. Se Aramor é a ordem, Thessomar é a adaptação — e ambas precisam
        uma da outra para sobreviver.
      </p>
      <div className="bio-grid">
        {BIOS_THESSOMAR.map((bio) => (
          <BioCard key={bio.name} bio={bio} />
        ))}
      </div>

      {/* ═══════ LOCAIS DE THESSOMAR ═══════ */}
      <SectionTitle icon={Sailboat}>Thessomar — Locais Notáveis</SectionTitle>
      <div className="location-grid">
        {LOCATIONS_THESSOMAR.map((loc) => (
          <LocationCard key={loc.name} loc={loc} />
        ))}
      </div>

      {/* ═══════ O DEVORADOR ═══════ */}
      <SectionTitle icon={Flame}>O Devorador — A Ameaça que Não Dorme</SectionTitle>
      <p>
        Não é um deus que pede orações. É uma fome que se espalha. Nasceu quando os colonizadores
        romperam os Selos de Alkron ao sul de Eresiere, e na Noite Carmesim consumiu Belaryar inteira
        — pedra, gente e memória. Dois séculos depois, os sinais retornam: a Baía escurece, animais
        enlouquecem, catacumbas ecoam e uma marca negra cresce no peito de quem tocou o que não deveria.
      </p>
      <div className="card-grid two compact-top">
        <InfoCard
          title="Os Sinais"
          text="Peixes morrem na Baía dos Mortos. Luzes verdes no Portão Oeste. Cinza rosna para as catacumbas. A marca de Aldric se espalha. Tessara reconhece o cheiro. O Devorador não foi destruído — adormeceu."
          tone="red"
          Icon={Flame}
        />
        <InfoCard
          title="Os Selos de Alkron"
          text="Barreiras rituais erguidas numa era anterior à colonização. Foram rompidos por imprudência, liberando o Devorador. Magnus Delorvane e Miriel Tindómë sabem que estão enfraquecendo de novo — mas por motivos diferentes."
          tone="red"
          Icon={Eye}
        />
        <InfoCard
          title="A Marca Negra"
          text="Sequela de contato direto com a Herança. Aldric a carrega no peito. Se espalha como gangrena silenciosa. Cinza a fareja. Pippin a viu. E ela está crescendo."
          tone="red"
          Icon={Snowflake}
        />
        <InfoCard
          title="Quem O Serve?"
          text="O Devorador não tem clero formal. Mas necromantes, cultistas desesperados e o que quer que habite as ruínas de Eresiere parecem responder ao seu chamado. O Bispo Tolvier sabe que o Senhor de Eresiere foi Sumo Sacerdote de Aethelgard. A ironia o destrói."
          tone="red"
          Icon={Flame}
        />
      </div>
    </div>
  );
}

function CityPage({ city }: { city: typeof CITY_ARAMOR | typeof CITY_THESSOMAR }) {
  return (
    <div className="page-article">
      <SectionTitle icon={Castle}>{city.title}</SectionTitle>
      <p className="lead">{city.subtitle}</p>
      <p>{city.intro}</p>
      <BulletList items={city.bullets} />

      <SectionTitle icon={LayoutGrid}>Distritos & Pontos de Interesse</SectionTitle>
      <div className="district-grid">
        {city.districts.map((district) => (
          <div key={district.name} className="district-card">
            <h3>{district.name}</h3>
            <p>{district.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MapPage() {
  return (
    <div className="page-article">
      <SectionTitle icon={Map}>Mapa de Myrthos</SectionTitle>
      <p>
        O continente foi reorganizado visualmente com base no material antigo: norte nevado, cinturão central
        de vales e florestas, coração desértico e porções meridionais densas, pantanosas e militarmente difíceis.
        Aramor foi posicionada como fortaleza costeira ao sudoeste do cinturão central; Thessomar, como eixo comercial do sul.
      </p>
      <div className="map-shell">
        <img src="/images/mapa.png" alt="Mapa estilizado do continente" className="map-image" />
      </div>

      <div className="card-grid three compact-top">
        <InfoCard title="Norte Branco" text="Faixa nevada, hostil e pouco povoada. Antigos postos de vigia e passos de montanha controlam o acesso." tone="blue" />
        <InfoCard title="Cinturão Verde" text="Núcleo histórico de assentamentos, rios largos, colinas e as terras onde a velha colônia tentou prosperar." tone="green" />
        <InfoCard title="Deserto Quebrado" text="Centro árido de rotas ruins, cidades enterradas e linhas de suprimento fáceis de sabotar." tone="gold" />
        <InfoCard title="Vulcão da perdição" text="Zona vulcânica no sudoeste, útil para mineração, péssima para campanhas longas e excelente para lendas ruins." tone="red" />
        <InfoCard title="Baía dos Mortos" text="Canal que une e separa Aramor de Thessomar. Quem controla a travessia, controla o preço da sobrevivência." tone="default" />
        <InfoCard title="Ruínas de Belaryar" text="Tudo o que restou da antiga colônia. Ainda dita diplomacia, medo e ambição dois séculos depois." tone="gold" />
      </div>
    </div>
  );
}

function RacePage({
  title,
  intro,
  groups,
  tags,
}: {
  title: string;
  intro: string;
  groups: { name: string; desc: string }[];
  tags: string[];
}) {
  return (
    <div className="page-article">
      <SectionTitle icon={Users}>{title}</SectionTitle>
      <p>{intro}</p>
      <div className="tag-row big">
        {tags.map((tag) => (
          <Tag key={tag} tone="gold">{tag}</Tag>
        ))}
      </div>
      <div className="race-group-list">
        {groups.map((group) => (
          <div key={group.name} className="race-group-card">
            <h3>{group.name}</h3>
            <p>{group.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClassesPage() {
  const [selectedCategory, setSelectedCategory] = useState(CLASS_CATEGORIES[0].name);
  const currentCategory = useMemo(
    () => CLASS_CATEGORIES.find((cat) => cat.name === selectedCategory) ?? CLASS_CATEGORIES[0],
    [selectedCategory],
  );
  const [selectedClass, setSelectedClass] = useState(currentCategory.classes[0].name);

  useEffect(() => {
    setSelectedClass(currentCategory.classes[0].name);
  }, [currentCategory]);

  const currentClass = currentCategory.classes.find((klass) => klass.name === selectedClass) ?? currentCategory.classes[0];

  return (
    <div className="page-article classes-page">
      <SectionTitle icon={Swords}>Classes & Profissões</SectionTitle>
      <p>
        A navegação abaixo foi montada para lembrar o modelo clássico do shard antigo: primeiro a
        <strong> superclasse</strong>, depois a <strong>classe</strong> e por fim o quadro técnico com descrição e skills iniciais.
      </p>

      <div className="classes-browser">
        <div className="class-column superclasses">
          <div className="class-column-title">Superclasses</div>
          {CLASS_CATEGORIES.map((category) => (
            <button
              key={category.name}
              className={`class-link ${category.name === currentCategory.name ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.name)}
            >
              <span>{category.name}</span>
              <ChevronRight size={14} />
            </button>
          ))}
        </div>

        <div className="class-column class-list">
          <div className="class-column-title">{currentCategory.name}</div>
          <p className="class-column-copy">{currentCategory.description}</p>
          {currentCategory.classes.map((klass) => (
            <button
              key={klass.name}
              className={`class-link ${klass.name === currentClass.name ? 'active' : ''}`}
              onClick={() => setSelectedClass(klass.name)}
            >
              <span>{klass.name}</span>
              <ChevronRight size={14} />
            </button>
          ))}
        </div>

        <div className="class-column class-detail">
          <div className="class-column-title">{currentClass.name}</div>
          <div className="class-role">{currentClass.role}</div>
          <p>{currentClass.summary}</p>
          <div className="skill-title">Skills iniciais</div>
          <ul className="skills-list">
            {currentClass.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function HerancaPage() {
  return (
    <div className="page-article">
      <SectionTitle icon={Snowflake}>Benção ou maldição</SectionTitle>
      <p>
        A Herança é o coração secreto de Myrthos. Sua função exata permanece objeto de debate entre magos,
        cronistas e sacerdotes, mas todos concordam em algo: ela <strong>participa do equilíbrio do continente</strong>
        , não pode cair em mãos erradas sem que a política inteira desabe com ela.
      </p>
      <p>
        O artefato continua sendo guardado pela monarquia. Não em cofres subterrâneos,
        nem em criptas distantes — mas <strong>no Palácio, ao lado da cama do rei</strong>, dentro de um
        baú de madeira rara azulada que parece gelo, conhecido nos registros como <strong>Baú Glacial</strong>.
      </p>

      <div className="chest-panel">
        <img src="/images/bau-glacial.jpg" alt="Baú Glacial ao lado da cama do rei" />
        <div className="chest-overlay" />
        <div className="chest-caption">O Baú Glacial — aposento real de Aramor</div>
      </div>

      <div className="card-grid two">
        <InfoCard title="Guardião Atual" text="O soberano da Casa Vaelor responde pessoalmente pela custódia da Herança. Isso torna a monarquia indispensável — e perigosa." tone="gold" Icon={Crown} />
        <InfoCard title="Razão Política" text="Quem controla a Herança controla tratados, sucessão, chantagem diplomática e o medo coletivo de um novo desastre continental." tone="red" Icon={Flame} />
        <InfoCard title="Razão Ritual" text="Os elfos mais antigos sustentam que a Herança deveria ser vigiada, não possuída. O verbo cerimonial mais usado para descrevê-la é tir: observar, guardar, vigiar." tone="blue" Icon={Eye} />
        <InfoCard title="Tensão Narrativa" text="Thessomar acredita que a Coroa transformou um selo antigo em monopólio dinástico. Aramor chama isso de responsabilidade legítima." tone="default" Icon={Landmark} />
      </div>
    </div>
  );
}

function ComoJogarPage() {

  return (
    <div className="page-article">

      <SectionTitle icon={BookOpenText}>Como Jogar</SectionTitle>

      <p>
        Para começar no Mystery Shard RP, você precisará apenas do nosso aplicativo
        de instalação. Ele será responsável por baixar os arquivos necessários do
        jogo e do client, organizar tudo na pasta correta e criar os atalhos para
        acesso pelo Desktop e pelo Menu Iniciar.
      </p>

      <p>
        A ideia é tornar o primeiro acesso o mais simples possível. Depois de
        instalar o aplicativo, basta seguir as instruções apresentadas por ele e
        iniciar o jogo.
      </p>

      <div className="card-grid two compact-top">

        <InfoCard
          title="Aplicativo do Mystery Shard"
          text="Um único aplicativo para instalar o jogo, baixar o client, manter os arquivos organizados e criar os atalhos de acesso."
          tone="gold"
        />

        <InfoCard
          title="Atualizações"
          text="O aplicativo também será utilizado para manter os arquivos necessários atualizados conforme novas versões forem disponibilizadas."
          tone="blue"
        />

      </div>

      <SectionTitle icon={Users}>Comunidade</SectionTitle>

      <p>
        O Discord é o principal ponto de contato da comunidade. É onde serão
        divulgadas informações, avisos, atualizações, regras, punições e demais
        comunicados relacionados ao servidor.
      </p>

      <p>
        <a
          href="https://discord.gg/jHADNsa9P"
          target="_blank"
          rel="noreferrer"
        >
          Entrar no Discord do Mystery Shard RP
        </a>
      </p>

      <SectionTitle icon={Eye}>Informações de Conexão</SectionTitle>

      <div className="card-grid two compact-top">

        <InfoCard
          title="Endereço"
          text="148.224.62.251"
          tone="gold"
        />

        <InfoCard
          title="Porta"
          text="2593"
          tone="blue"
        />

      </div>

    </div>
  );
}

function SistemasPage() {
  const [selected, setSelected] = useState(GAME_SYSTEMS[0].name);
  const current = GAME_SYSTEMS.find((s) => s.name === selected) ?? GAME_SYSTEMS[0];

  return (
    <div className="page-article classes-page">
      <SectionTitle icon={LayoutGrid}>Sistemas do Shard</SectionTitle>
      <p>
        O Mystery Shard RP é inspirado nos sistemas clássicos do MyT, adaptados para a nova
        ambientação de Myrthos. Abaixo estão as engrenagens principais que movem o jogo —
        da criação de personagem à fiscalização, passando por economia, guildas e combate.
      </p>

      <div className="classes-browser" style={{ gridTemplateColumns: '1fr 2fr' }}>
        <div className="class-column superclasses">
          <div className="class-column-title">Sistemas</div>
          {GAME_SYSTEMS.map((system) => (
            <button
              key={system.name}
              className={`class-link ${system.name === current.name ? 'active' : ''}`}
              onClick={() => setSelected(system.name)}
            >
              <span>{system.name}</span>
              <ChevronRight size={14} />
            </button>
          ))}
        </div>

        <div className="class-column class-detail">
          <div className="class-column-title">{current.name}</div>
          <div className="class-role">{current.shortDesc}</div>
          <p>{current.description}</p>

          <div className="skill-title">Como funciona</div>
          <ul className="skills-list">
            {current.howItWorks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {current.tips && current.tips.length > 0 && (
            <>
              <div className="skill-title">Dicas</div>
              <ul className="skills-list">
                {current.tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function VocabularioPage() {
  const [query, setQuery] = useState('');
  const filteredGroups = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ELVISH_GROUPS;
    return ELVISH_GROUPS.map((group) => ({
      ...group,
      terms: group.terms.filter((term) =>
        `${term.q} ${term.pt}`.toLowerCase().includes(q),
      ),
    })).filter((group) => group.terms.length > 0);
  }, [query]);

  return (
    <div className="page-article">
      <SectionTitle icon={Sparkles}>Quenya Cerimonial</SectionTitle>
      <p>
        Nos dias atuais, os elfos de Myrthos usam seu idioma antigo sobretudo em <strong>cerimônias</strong>,
        <strong> documentos oficiais</strong>, <strong>saudações</strong>, nomes de linhagem e fórmulas de juramento.
        No trato comum, falam a língua corrente — mas palavras élficas escapam quando há luto, fé, reverência ou memória.
      </p>

      <div className="search-bar">
        <Search size={16} />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar termo élfico ou significado em português..."
        />
      </div>

      <div className="vocab-grid">
        {filteredGroups.map((group) => (
          <div key={group.title} className="vocab-card">
            <h3>{group.title}</h3>
            <ul>
              {group.terms.map((term) => (
                <li key={term.q + term.pt}>
                  <span className="word">{term.q}</span>
                  <span className="meaning">{term.pt}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <SectionTitle icon={Scroll}>Aglutinação & Nomes</SectionTitle>
      <p>
        Muitas palavras élficas se formam por <strong>aglutinação</strong>, somando radicais para manter sentido poético.
        Isso explica por que títulos, sobrenomes, armas ritualísticas e canções soam compostos, musicais e carregados de imagem.
      </p>
      <div className="sample-grid">
        {ELVISH_SAMPLES.map((sample) => (
          <div key={sample.name} className="sample-card">
            <h3>{sample.name}</h3>
            <strong>{sample.meaning}</strong>
            <p>{sample.breakdown}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Sidebar({ page, go }: { page: PageId; go: (p: PageId) => void }) {
  const [openGroup, setOpenGroup] = useState<MenuGroupLabel>(PAGE_TO_MENU[page]);

  useEffect(() => {
    setOpenGroup(PAGE_TO_MENU[page]);
  }, [page]);

  return (
    <aside className="sidebar-shell">
      <div className="sidebar-brand" onClick={() => go('inicio')}>
        <strong>Mystery Shard RP</strong>
      </div>

      <nav className="sidebar-nav">
        {MENU.map((group) => {
          const isOpen = group.label === openGroup;
          return (
            <div key={group.label} className="nav-group">
              <button className={`nav-group-button ${isOpen ? 'open' : ''}`} onClick={() => setOpenGroup(isOpen ? '' as MenuGroupLabel : group.label)}>
                <span>{group.label}</span>
                <ChevronRight size={14} className={`nav-chevron ${isOpen ? 'rotated' : ''}`} />
              </button>
              {isOpen && (
                <div className="nav-submenu">
                  {group.children.map((child) => (
                    <button
                      key={child.id}
                      className={`nav-subitem ${page === child.id ? 'active' : ''}`}
                      onClick={() => go(child.id)}
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="sidebar-ornament">✦</div>
    </aside>
  );
}

function PageViewport({ page, go }: { page: PageId; go: (p: PageId) => void }) {
  const meta = PAGE_META[page];
  const HeroIcon = meta.Icon;

  return (
    <main className="content-shell">
      <section className="hero-shell">
        <img src={HERO_BY_PAGE[page]} alt="" className={`hero-image ${page === 'mapa' ? 'contain' : ''}`} />
        <div className="hero-gradient" />
        <div className="hero-copy">
          <div className="hero-kicker">{meta.kicker}</div>
          <div className="hero-title-row">
            <HeroIcon size={22} />
            <h1>{meta.title}</h1>
          </div>
          <p>{meta.subtitle}</p>
        </div>
      </section>

      <section className="content-panel" key={page}>
        {page === 'inicio' && <InicioPage go={go} />}
        {page === 'lore' && <LorePage />}
        {page === 'ambientacao' && <AmbientacaoPage />}
        {page === 'biografia' && <BiografiaPage />}
        {page === 'cidade-aramor' && <CityPage city={CITY_ARAMOR} />}
        {page === 'cidade-thessomar' && <CityPage city={CITY_THESSOMAR} />}
        {page === 'mapa' && <MapPage />}
        {page === 'racas-humanos' && (
          <RacePage title="Humanos" intro={HUMAN_RACE.intro} groups={HUMAN_RACE.groups} tags={['Versatilidade', 'Ambição', 'Ordens Militares', 'Nobreza Colonial']} />
        )}
        {page === 'racas-elfos' && (
          <RacePage title="Elfos" intro={ELF_RACE.intro} groups={ELF_RACE.groups} tags={['Ritual', 'Memória', 'Arqueria', 'Idioma Cerimonial']} />
        )}
        {page === 'classes' && <ClassesPage />}
        {page === 'heranca' && <HerancaPage />}
        {page === 'como-jogar' && <ComoJogarPage />}
        {page === 'sistemas' && <SistemasPage />}
        {page === 'vocabulario' && <VocabularioPage />}
      </section>
    </main>
  );
}

export default function App() {
  const { page, navigate } = useHashPage('inicio');

  useEffect(() => {
    document.title = `Mystery Shard RP — ${PAGE_TITLES[page]}`;
  }, [page]);

  return (
    <div className="app-shell">
      <Sidebar page={page} go={navigate} />
      <PageViewport page={page} go={navigate} />
      
    </div>
  );
}
