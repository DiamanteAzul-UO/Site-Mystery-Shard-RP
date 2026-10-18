import { useEffect, useMemo, useRef, useState } from 'react';
import {
  BookOpenText,
  ChevronDown,
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
  epigraph?: string;
  epigraphAuthor?: string;
  Icon: LucideIcon;
};

const PAGE_META: Record<AppPageId, PageMeta> = {
  inicio: {
    kicker: 'Os mortos se erguem dia e noite contra os humanos e elfos',
    title: 'Mystery Shard RP',
    subtitle: 'Crônicas de Myrthos — Ano 1630',
    epigraph: 'Duzentos anos após a Noite Carmesim, o continente finge normalidade enquanto as pedras antigas voltam a cantar.',
    epigraphAuthor: 'Crônica da Muralha Alta',
    Icon: Crown,
  },
  lore: {
    kicker: 'Documento-mãe de ambientação',
    title: 'A Lore de Myrthos',
    subtitle: 'Da Guerra Divina ao Ano 1630 — tudo o que existe, existiu e ameaça existir no continente.',
    epigraph: 'Tir. Observar, guardar, vigiar. É o verbo mais importante que meu povo conhece.',
    epigraphAuthor: 'Miriel Tindómë, Exilada do Oriente',
    Icon: ScrollText,
  },
  ambientacao: {
    kicker: 'Nova lore oficial',
    title: 'Ambientação de Myrthos',
    subtitle: 'Uma leitura histórica do passado de Belaryar, da Coroa de Aramor e da ascensão de Thessomar.',
    epigraph: 'Myrthos não nasceu como reino. Nasceu como ferida — e toda ferida mal fechada volta a sangrar.',
    epigraphAuthor: 'Magnus Delorvane, Conselheiro Geral',
    Icon: ScrollText,
  },
  biografia: {
    kicker: 'Personagens importantes',
    title: 'Dramatis Personae de Myrthos',
    subtitle: 'Deuses, realeza, conselheiros, servos, exilados e os lugares onde seus segredos repousam.',
    epigraph: 'Quem limpa o chão vê o que o conselheiro esconde. Quem cozinha ouve o que o general sussurra.',
    epigraphAuthor: 'Bartolomeu Ossar, Cozinha Real',
    Icon: ScrollText,
  },
  'cidade-aramor': {
    kicker: 'Cidade da Coroa',
    title: 'Aramor',
    subtitle: 'A fortaleza régia erguida para vigiar, cobrar e resistir.',
    epigraph: 'Porto-Vila não foi construída para ser lar de ninguém. Foi construída para ser uma corrente — e sobreviveu a tudo.',
    epigraphAuthor: 'Registros do Baixo Cais',
    Icon: Castle,
  },
  'cidade-thessomar': {
    kicker: 'Cidade do ofício e do exílio',
    title: 'Thessomar',
    subtitle: 'Docas, exilados, artesãos, mercados violentos e a moeda que desafia a nobreza.',
    epigraph: 'Aramor exporta lei. Nós exportamos gente que sobrevive apesar da lei.',
    epigraphAuthor: 'Darren Ossar, Companhia da Areia',
    Icon: Sailboat,
  },
  mapa: {
    kicker: 'Geografia do jogo',
    title: 'Mapa do Continente',
    subtitle: 'Norte nevado, cinturão verde, coração desértico e os velhos caminhos da ruína.',
    epigraph: 'Quem controla a travessia da Baía dos Mortos controla o preço da sobrevivência em Myrthos.',
    epigraphAuthor: 'Capitão Voss "Maré Negra"',
    Icon: Map,
  },
  'racas-humanos': {
    kicker: 'Raças jogáveis',
    title: 'Os Humanos de Myrthos',
    subtitle: 'Adaptáveis, ambiciosos e politicamente divididos entre culpa colonial e ordem régia.',
    epigraph: 'Corpos curtos em anos, mas férteis em ambição: nasceram para construir, conquistar e recomeçar.',
    epigraphAuthor: 'Livro I — O Princípio',
    Icon: Users,
  },
  'racas-elfos': {
    kicker: 'Raças jogáveis',
    title: 'Os Elfos de Myrthos',
    subtitle: 'Belos, ritualísticos e fragmentados entre a memória do oriente e a sobrevivência do presente.',
    epigraph: 'No trato comum falam a língua dos homens, mas palavras antigas escapam quando a dor ou a fé são reais demais.',
    epigraphAuthor: 'Velha Tessara, Vila do Riacho',
    Icon: Trees,
  },
  classes: {
    kicker: 'Profissões & arquétipos',
    title: 'Classes & Ofícios',
    subtitle: 'Superclasses, profissões e listas de perícias iniciais que movem as engrenagens de Myrthos.',
    epigraph: 'Se Aramor permanece de pé e Thessomar não morre de fome, é porque alguém sabe forjar, curar, vigiar e sangrar.',
    epigraphAuthor: 'Manual das Guildas de Ofício',
    Icon: Swords,
  },
  heranca: {
    kicker: 'Segredo de Estado',
    title: 'A Herança',
    subtitle: 'O artefato que não dorme em catacumbas: ele repousa ao lado da cama do rei.',
    epigraph: 'Não em catacumbas. Não em cofres. Ao lado da cama do rei — onde ele pode ouvi-la à noite.',
    epigraphAuthor: 'Livro VIII — A Herança',
    Icon: Snowflake,
  },
  'como-jogar': {
    kicker: 'Arquivos do jogo',
    title: 'Como Jogar no Mystery Shard',
    subtitle: 'Instalação, atualizações automáticas, comunidade e dados de acesso ao continente.',
    epigraph: 'A travessia começa antes do primeiro passo em Aramor: prepare seus arquivos e cruze o mar.',
    epigraphAuthor: 'Guia do Viajante',
    Icon: BookOpenText,
  },
  sistemas: {
    kicker: 'Mecânicas do shard',
    title: 'Sistemas de Myrthos',
    subtitle: 'Ficha RP, atributos, signos, alquimia, cultivo, quests, guildas e as leis que regem o mundo.',
    epigraph: 'A classe é apenas o começo da estrada; o que o personagem se torna depende do ferro, do éter e das escolhas.',
    epigraphAuthor: 'Compêndio de Sistemas',
    Icon: LayoutGrid,
  },
  vocabulario: {
    kicker: 'Idioma cerimonial',
    title: 'Vocabulário Élfico',
    subtitle: 'Quenya usado em cerimônias, documentos oficiais, saudações e nomes de linhagem.',
    epigraph: 'Elen síla lúmenn’ omentielvo — Uma estrela brilha na hora de nosso encontro.',
    epigraphAuthor: 'Saudação Tradicional Quenya',
    Icon: Sparkles,
  },
};

const PAGE_TO_MENU: Record<PageId, MenuGroupLabel> = {
  inicio: 'Ambientação',
  lore: 'Ambientação',
  ambientacao: 'Ambientação',
  biografia: 'Ambientação',
  heranca: 'Ambientação',
  'cidade-aramor': 'Cidade',
  'cidade-thessomar': 'Cidade',
  mapa: 'Mapa',
  'racas-humanos': 'Raças',
  'racas-elfos': 'Raças',
  classes: 'Classes',
  'como-jogar': 'Como Jogar?',
  sistemas: 'Como Jogar?',
  vocabulario: 'Vocabulário Élfico',
};

function Tag({ children, tone = 'default' }: { children: React.ReactNode; tone?: 'default' | 'gold' | 'blue' | 'red' | 'green' }) {
  return <span className={`tag tag-${tone}`}>{children}</span>;
}

/* ── Cabeçalho de Capítulo no estilo "A Lore de Myrthos" ── */
function LoreChapterHeader({
  number,
  title,
  subtitle,
}: {
  number?: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <header className="lore-chapter-header">
      <div className="lore-chapter-ornament">✦</div>
      {number && <div className="lore-chapter-number">{number}</div>}
      <h2 className="lore-chapter-title">{title}</h2>
      {subtitle && <div className="lore-chapter-subtitle">{subtitle}</div>}
      <div className="lore-chapter-rule" />
    </header>
  );
}

/* ── Frontispício padrão de página no estilo "A Lore de Myrthos" ── */
function LoreFrontispiece({ page }: { page: PageId }) {
  const meta = PAGE_META[page];
  return (
    <div className="lore-frontispiece">
      <div className="lore-frontispiece-rule" />
      <p className="lore-frontispiece-sub">{meta.kicker}</p>
      <h1 className="lore-frontispiece-title">{meta.title}</h1>
      <p className="lore-frontispiece-sub">Mystery Shard RP — Myrthos, Ano 1630</p>
      <div className="lore-frontispiece-rule" />
      {meta.epigraph && (
        <p className="lore-frontispiece-epigraph">
          "{meta.epigraph}"
          {meta.epigraphAuthor && <span>— {meta.epigraphAuthor}</span>}
        </p>
      )}
    </div>
  );
}

/* ── Colofão padrão de encerramento no estilo "A Lore de Myrthos" ── */
function LoreColophon({ label = 'Fim do Registro' }: { label?: string }) {
  return (
    <footer className="lore-colophon">
      <div className="lore-frontispiece-rule" />
      <p>{label}</p>
      <p className="lore-colophon-sub">Mystery Shard RP — Myrthos, Ano 1630. A nova fase começa.</p>
      <div className="lore-frontispiece-rule" />
    </footer>
  );
}

function LorePage() {
  return (
    <div className="page-article lore-page">
      <div className="lore-frontispiece">
        <div className="lore-frontispiece-rule" />
        <p className="lore-frontispiece-sub">Documento-mãe de Ambientação</p>
        <h1 className="lore-frontispiece-title">
          A Lore Completa
          <br />
          de Myrthos
        </h1>
        <p className="lore-frontispiece-sub">Mystery Shard RP — Myrthos, Ano 1630</p>
        <div className="lore-frontispiece-rule" />
        <p className="lore-frontispiece-epigraph">
          "Tir. Observar, guardar, vigiar.
          <br />
          É o verbo mais importante que meu povo conhece."
          <span>— Miriel Tindómë, Exilada do Oriente</span>
        </p>
      </div>

      {LORE_CHAPTERS.map((chapter) => (
        <article key={chapter.number} className="lore-chapter">
          <LoreChapterHeader
            number={`Livro ${chapter.number}`}
            title={chapter.title}
            subtitle={chapter.subtitle}
          />

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

      <LoreColophon label="Fim do Documento-Mãe de Ambientação" />
    </div>
  );
}

function InfoCard(props: { title: string; text: string; Icon?: LucideIcon; tone?: 'default' | 'gold' | 'red' | 'blue' | 'green' }) {
  const Icon = props.Icon;
  return (
    <div className={`info-card info-card-${props.tone ?? 'default'}`}>
      {Icon && (
        <div className="info-card-icon">
          <Icon size={16} />
        </div>
      )}
      <div>
        <div className="info-card-title">{props.title}</div>
        <p className="lore-card-para">{props.text}</p>
      </div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="bullet-list lore-list">
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
      'inicio',
      'lore',
      'ambientacao',
      'biografia',
      'cidade-aramor',
      'cidade-thessomar',
      'mapa',
      'racas-humanos',
      'racas-elfos',
      'classes',
      'heranca',
      'como-jogar',
      'sistemas',
      'vocabulario',
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { page, navigate };
}

function InicioPage({ go }: { go: (p: PageId) => void }) {
  return (
    <div className="page-article lore-page">
      <LoreFrontispiece page="inicio" />

      <article className="lore-chapter">
        <LoreChapterHeader
          number="Prólogo"
          title="Uma Nova Fase para Myrthos"
          subtitle="A espinha dorsal da antiga colônia reescrita para uma nova era"
        />

        <div className="lore-chapter-body">
          <div className="lore-section">
            <h3 className="lore-section-heading">O Despertar do Continente</h3>
            <p className="lore-para lore-para-drop">
              A nova ambientação usa a espinha dorsal do material oficial antigo — descoberta do continente,
              colônia em ruptura, queda sob escuridão, tensão entre linhagens e sobrevivência marítima — mas reescreve
              nomes, focos e estrutura política para criar uma <strong>nova lore</strong> viva e interligada.
            </p>
            <p className="lore-para">
              Entre as muralhas régias de <strong>Aramor</strong> e as pontes de madeira de <strong>Thessomar</strong>,
              cada habitante carrega uma versão diferente da noite em que Belaryar caiu. Escolha por onde iniciar sua
              leitura nos tomos abaixo:
            </p>
            <blockquote className="lore-pull">
              Duas cidades que se odeiam e se precisam. Uma monarquia que guarda um segredo que a mata. E uma escuridão ancestral que não se importa com política.
            </blockquote>
          </div>

          <div className="hero-actions-grid">
            <button className="quick-panel" onClick={() => go('lore')}>
              <ScrollText size={16} />
              <div>
                <strong>A Lore de Myrthos</strong>
                <span>Os onze livros canônicos: da Guerra Divina ao despertar do Devorador em 1630.</span>
              </div>
            </button>
            <button className="quick-panel" onClick={() => go('ambientacao')}>
              <Landmark size={16} />
              <div>
                <strong>Panorama & Cronologia</strong>
                <span>Linha do tempo histórica de Myrthos, Belaryar, Aramor e Thessomar.</span>
              </div>
            </button>
            <button className="quick-panel" onClick={() => go('cidade-aramor')}>
              <Castle size={16} />
              <div>
                <strong>Cidades do Continente</strong>
                <span>Distritos, elite régia, docas militares de Aramor e o oásis exilado de Thessomar.</span>
              </div>
            </button>
            <button className="quick-panel" onClick={() => go('classes')}>
              <Swords size={16} />
              <div>
                <strong>Classes & Sistemas</strong>
                <span>Arquétipos, profissões, perícias iniciais e as engrenagens mecânicas do shard.</span>
              </div>
            </button>
          </div>
        </div>

        <div className="lore-chapter-divider">· · ·</div>
      </article>

      <article className="lore-chapter">
        <LoreChapterHeader
          number="Pilares"
          title="Princípios Desta Fase"
          subtitle="Os quatro eixos que sustentam a narrativa de 1630"
        />

        <div className="card-grid two">
          <InfoCard
            Icon={Shield}
            tone="gold"
            title="Monarquia Preservada"
            text="A Coroa continua central: o soberano governa de Aramor, a nobreza pesa na política e a Herança permanece nas mãos da monarquia."
          />
          <InfoCard
            Icon={Eye}
            tone="blue"
            title="Política Entre Cidades"
            text="Aramor e Thessomar dependem uma da outra, mas se desprezam o suficiente para transformar toda crise em disputa de poder."
          />
          <InfoCard
            Icon={Users}
            tone="green"
            title="Foco Racial Fechado"
            text="O foco recai sobre as raças jogáveis humanas e élficas. As demais sobrevivem somente como ameaça histórica, rumor ou força externa."
          />
          <InfoCard
            Icon={Snowflake}
            tone="red"
            title="Sistema da Herança Mantido"
            text="O artefato continua sendo o eixo secreto da campanha. Seu guardião é o soberano; seu cofre é o Baú Glacial ao lado de sua cama."
          />
        </div>
      </article>

      <LoreColophon label="Fim do Prólogo" />
    </div>
  );
}

function AmbientacaoPage() {
  return (
    <div className="page-article lore-page">
      <LoreFrontispiece page="ambientacao" />

      <article className="lore-chapter">
        <LoreChapterHeader
          number="Livro I"
          title="Panorama Geral"
          subtitle="Duas memórias concorrentes sobre as cinzas de Belaryar"
        />

        <div className="lore-chapter-body">
          <div className="lore-section">
            <h3 className="lore-section-heading">A Ferida Colonial</h3>
            <p className="lore-para lore-para-drop">
              Myrthos não nasceu como reino. Nasceu como ferida. Primeiro foi promessa de expansão marítima,
              depois colônia de extração, depois trincheira de guerra civil, e por fim território de sobreviventes.
              Duzentos anos após a queda de Belaryar, o continente vive entre duas memórias concorrentes:
              a memória régia de <strong>Aramor</strong>, que se vê como bastião da ordem, e a memória popular de
              <strong> Thessomar</strong>, que lembra a fome, o exílio e os custos reais da obediência.
            </p>
            <p className="lore-para">
              Acima dessas disputas paira o segredo maior da campanha: <strong>a Herança</strong>, artefato antigo
              ligado aos selos de contenção do continente. A monarquia afirma guardá-la pelo bem comum.
              Os mercadores juram que ela atrai ruína. Os elfos mais antigos dizem que ela jamais deveria
              ter sido removida do silêncio ritual que a protegia.
            </p>
            <blockquote className="lore-pull">
              Todo debate sobre nobreza, culpa, raça, impostos e sucessão termina, cedo ou tarde, na mesma pergunta: quem deixou Belaryar cair?
            </blockquote>
          </div>
        </div>

        <div className="lore-chapter-divider">· · ·</div>
      </article>

      <article className="lore-chapter">
        <LoreChapterHeader
          number="Livro II"
          title="Linha do Tempo"
          subtitle="Dos dias da Guerra Divina ao despertar do Ano 1630"
        />

        <div className="timeline-list">
          {TIMELINE.map((item) => (
            <div className="timeline-item" key={item.year + item.title}>
              <div className="timeline-year">Ano {item.year}</div>
              <div className="timeline-body">
                <h3 className="lore-section-heading">{item.title}</h3>
                <p className="lore-para">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="lore-chapter-divider">· · ·</div>
      </article>

      <article className="lore-chapter">
        <LoreChapterHeader
          number="Livro III"
          title="Monarquia & Política"
          subtitle="As forças que disputam o destino do continente"
        />

        <div className="card-grid two">
          {POLITICS.map((item) => (
            <InfoCard key={item.title} title={item.title} text={item.text} tone="gold" Icon={Milestone} />
          ))}
        </div>
      </article>

      <LoreColophon label="Fim do Panorama Histórico" />
    </div>
  );
}

function BioCard({ bio }: { bio: Biography }) {
  return (
    <div className={`bio-card bio-card-${bio.tagTone}`}>
      <div className="bio-header">
        <div className="bio-header-content">
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

      <p className="bio-desc lore-para">{bio.description}</p>

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
          <span className="bio-hint-icon">✦</span>
          <span>{bio.narrativeHint}</span>
        </div>
      )}

      {bio.quote && <blockquote className="lore-pull bio-quote">"{bio.quote}"</blockquote>}
    </div>
  );
}

function LocationCard({ loc }: { loc: CityLocation }) {
  return (
    <div className={`location-card location-card-${loc.tagTone}`}>
      <div className="location-header">
        {loc.icon && <span className="location-icon">{loc.icon}</span>}
        <h3>{loc.name}</h3>
        <Tag tone={loc.tagTone}>{loc.tag}</Tag>
      </div>
      <p className="location-keeper">
        <strong>Guardião:</strong> {loc.keeper}
      </p>
      <p className="lore-card-para">{loc.desc}</p>
    </div>
  );
}

function BiografiaPage() {
  return (
    <div className="page-article lore-page">
      <LoreFrontispiece page="biografia" />

      {/* ═══════ PANTEÃO ═══════ */}
      <article className="lore-chapter">
        <LoreChapterHeader
          number="Livro I"
          title="Panteão de Myrthos"
          subtitle="As três forças que regem a fé e o pavor no continente"
        />
        <div className="lore-chapter-body">
          <div className="lore-section">
            <h3 className="lore-section-heading">Devoção e Ruína</h3>
            <p className="lore-para lore-para-drop">
              Três forças regem a fé — e o medo — do continente. Duas são adoradas em templos de pedra ou clareiras
              silenciosas. A terceira é temida, negada e, nas sombras, invocada por quem já perdeu tudo.
            </p>
          </div>
          <div className="card-grid three">
            {DEITIES.map((d) => (
              <div key={d.name} className={`deity-card deity-card-${d.tone}`}>
                {d.icon && <div className="deity-icon">{d.icon}</div>}
                <h3>{d.name}</h3>
                <span className="deity-epithet">{d.epithet}</span>
                <div className="deity-alignment">{d.alignment}</div>
                <div className="deity-aspects">
                  {d.aspects.map((a) => (
                    <Tag key={a} tone={d.tone}>
                      {a}
                    </Tag>
                  ))}
                </div>
                <p className="deity-dogma lore-para">{d.dogma}</p>
                <div className="deity-followers">
                  <strong>Seguidores:</strong> {d.followers}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lore-chapter-divider">· · ·</div>
      </article>

      {/* ═══════ ARAMOR — FAMÍLIA REAL ═══════ */}
      <article className="lore-chapter">
        <LoreChapterHeader
          number="Livro II"
          title="Aramor — Casa Vannemere"
          subtitle="A família que carrega a Coroa e a maldição do Baú Glacial"
        />
        <div className="lore-chapter-body">
          <div className="lore-section">
            <h3 className="lore-section-heading">Sangue Real e Silêncio</h3>
            <p className="lore-para lore-para-drop">
              A família que carrega a Coroa — e a maldição. Aldric governa de uma fortaleza que está
              devorando seu corpo. Seraphine olha para fora. Edric escuta as paredes. E Cinza fareja o que
              ninguém quer admitir.
            </p>
          </div>
          <div className="bio-grid">
            {BIOS_ARAMOR_REALEZA.map((bio) => (
              <BioCard key={bio.name} bio={bio} />
            ))}
          </div>
        </div>
        <div className="lore-chapter-divider">· · ·</div>
      </article>

      {/* ═══════ ARAMOR — CONSELHO ═══════ */}
      <article className="lore-chapter">
        <LoreChapterHeader
          number="Livro III"
          title="O Conselho da Coroa"
          subtitle="Cinco cadeiras, cinco agendas e um único juramento aparente"
        />
        <div className="lore-chapter-body">
          <div className="lore-section">
            <h3 className="lore-section-heading">Os Pilares do Trono</h3>
            <p className="lore-para lore-para-drop">
              Cinco cadeiras. Cinco agendas. Um mago que conversa com o inimigo, um general que não dorme,
              uma ladra que controla o ouro, um bispo que perdeu a fé e uma mineradora que comanda uma milícia
              secreta. E todos juram servir o Lorde Regente.
            </p>
          </div>
          <div className="bio-grid">
            {BIOS_ARAMOR_CONSELHO.map((bio) => (
              <BioCard key={bio.name} bio={bio} />
            ))}
          </div>
        </div>
        <div className="lore-chapter-divider">· · ·</div>
      </article>

      {/* ═══════ ARAMOR — SERVOS & COZINHA ═══════ */}
      <article className="lore-chapter">
        <LoreChapterHeader
          number="Livro IV"
          title="Servos, Cozinha & Sombras"
          subtitle="Os olhos invisíveis que guardam as chaves do Palácio Real"
        />
        <div className="lore-chapter-body">
          <div className="lore-section">
            <h3 className="lore-section-heading">A Corte Invisível</h3>
            <p className="lore-para lore-para-drop">
              Quem limpa o chão vê o que o conselheiro esconde. Quem cozinha ouve o que o general sussurra.
              Os servos de Aramor sabem mais do que qualquer nobre imagina — e alguns guardam segredos que
              podem salvar ou destruir a cidade.
            </p>
          </div>
          <div className="bio-grid">
            {BIOS_ARAMOR_SERVOS.map((bio) => (
              <BioCard key={bio.name} bio={bio} />
            ))}
          </div>
        </div>
        <div className="lore-chapter-divider">· · ·</div>
      </article>

      {/* ═══════ LOCAIS DE ARAMOR ═══════ */}
      <article className="lore-chapter">
        <LoreChapterHeader
          number="Livro V"
          title="Locais Notáveis de Aramor"
          subtitle="Pontos de tensão e mistério no interior da fortaleza"
        />
        <div className="location-grid">
          {LOCATIONS_ARAMOR.map((loc) => (
            <LocationCard key={loc.name} loc={loc} />
          ))}
        </div>
        <div className="lore-chapter-divider">· · ·</div>
      </article>

      {/* ═══════ THESSOMAR ═══════ */}
      <article className="lore-chapter">
        <LoreChapterHeader
          number="Livro VI"
          title="Thessomar — Os Filhos do Exílio"
          subtitle="Mercenários, vereadores, sobreviventes e contrabandistas da outra margem"
        />
        <div className="lore-chapter-body">
          <div className="lore-section">
            <h3 className="lore-section-heading">Gente de Areia e Sal</h3>
            <p className="lore-para lore-para-drop">
              Do outro lado da Baía dos Mortos, onde a areia queima e a lei de Aramor chega diluída em sal,
              Thessomar respira. Um oásis de exilados, mercenários, contrabandistas e a única elfa viva
              que se lembra de Belaryar. Se Aramor é a ordem, Thessomar é a adaptação — e ambas precisam
              uma da outra para sobreviver.
            </p>
          </div>
          <div className="bio-grid">
            {BIOS_THESSOMAR.map((bio) => (
              <BioCard key={bio.name} bio={bio} />
            ))}
          </div>
        </div>
        <div className="lore-chapter-divider">· · ·</div>
      </article>

      {/* ═══════ LOCAIS DE THESSOMAR ═══════ */}
      <article className="lore-chapter">
        <LoreChapterHeader
          number="Livro VII"
          title="Locais Notáveis de Thessomar"
          subtitle="Redutos de comércio, alquimia e sobrevivência no oásis"
        />
        <div className="location-grid">
          {LOCATIONS_THESSOMAR.map((loc) => (
            <LocationCard key={loc.name} loc={loc} />
          ))}
        </div>
        <div className="lore-chapter-divider">· · ·</div>
      </article>

      {/* ═══════ O DEVORADOR ═══════ */}
      <article className="lore-chapter">
        <LoreChapterHeader
          number="Livro VIII"
          title="O Devorador — A Ameaça que Não Dorme"
          subtitle="A fome ancestral que consumiu Belaryar e volta a rondar a Baía"
        />
        <div className="lore-chapter-body">
          <div className="lore-section">
            <h3 className="lore-section-heading">O Despertar nas Profundezas</h3>
            <p className="lore-para lore-para-drop">
              Não é um deus que pede orações. É uma fome que se espalha. Nasceu quando os colonizadores
              romperam os Selos de Alkron ao sul de Eresiere, e na Noite Carmesim consumiu Belaryar inteira
              — pedra, gente e memória. Dois séculos depois, os sinais retornam: a Baía escurece, animais
              enlouquecem, catacumbas ecoam e uma marca negra cresce no peito de quem tocou o que não deveria.
            </p>
          </div>
          <div className="card-grid two">
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
      </article>

      <LoreColophon label="Fim do Dramatis Personae" />
    </div>
  );
}

function CityPage({
  pageId,
  city,
}: {
  pageId: PageId;
  city: typeof CITY_ARAMOR | typeof CITY_THESSOMAR;
}) {
  return (
    <div className="page-article lore-page">
      <LoreFrontispiece page={pageId} />

      <article className="lore-chapter">
        <LoreChapterHeader
          number="Livro I"
          title={city.title}
          subtitle={city.subtitle}
        />

        <div className="lore-chapter-body">
          <div className="lore-section">
            <h3 className="lore-section-heading">Crônica Urbana</h3>
            <p className="lore-para lore-para-drop">{city.intro}</p>
            <BulletList items={city.bullets} />
            <blockquote className="lore-pull">{city.subtitle}</blockquote>
          </div>
        </div>

        <div className="lore-chapter-divider">· · ·</div>
      </article>

      <article className="lore-chapter">
        <LoreChapterHeader
          number="Livro II"
          title="Distritos & Pontos de Interesse"
          subtitle={`A geografia interna de ${city.title}`}
        />

        <div className="district-grid">
          {city.districts.map((district) => (
            <div key={district.name} className="district-card">
              <h3 className="lore-section-heading">{district.name}</h3>
              <p className="lore-para">{district.desc}</p>
            </div>
          ))}
        </div>
      </article>

      <LoreColophon label={`Fim do Registro de ${city.title}`} />
    </div>
  );
}

function MapPage() {
  return (
    <div className="page-article lore-page">
      <LoreFrontispiece page="mapa" />

      <article className="lore-chapter">
        <LoreChapterHeader
          number="Livro I"
          title="Cartografia de Myrthos"
          subtitle="Regiões, travessias e cicatrizes geográficas do continente"
        />

        <div className="lore-chapter-body">
          <div className="lore-section">
            <h3 className="lore-section-heading">A Terra Entre Dois Mares</h3>
            <p className="lore-para lore-para-drop">
              O continente foi reorganizado visualmente com base no material antigo: norte nevado, cinturão central
              de vales e florestas, coração desértico e porções meridionais densas, pantanosas e militarmente difíceis.
              Aramor foi posicionada como fortaleza costeira ao sudoeste do cinturão central; Thessomar, como eixo comercial do sul.
            </p>
          </div>

          <div className="map-shell">
            <img src="/images/mapa.png" alt="Mapa estilizado do continente de Myrthos" className="map-image" />
          </div>

          <div className="card-grid three">
            <InfoCard title="Norte Branco" text="Faixa nevada, hostil e pouco povoada. Antigos postos de vigia e passos de montanha controlam o acesso." tone="blue" />
            <InfoCard title="Cinturão Verde" text="Núcleo histórico de assentamentos, rios largos, colinas e as terras onde a velha colônia tentou prosperar." tone="green" />
            <InfoCard title="Deserto Quebrado" text="Centro árido de rotas ruins, cidades enterradas e linhas de suprimento fáceis de sabotar." tone="gold" />
            <InfoCard title="Vulcão da Perdição" text="Zona vulcânica no sudoeste, útil para mineração, péssima para campanhas longas e excelente para lendas ruins." tone="red" />
            <InfoCard title="Baía dos Mortos" text="Canal que une e separa Aramor de Thessomar. Quem controla a travessia controla o preço da sobrevivência." tone="default" />
            <InfoCard title="Ruínas de Belaryar" text="Tudo o que restou da antiga colônia. Ainda dita diplomacia, medo e ambição dois séculos depois." tone="gold" />
          </div>
        </div>
      </article>

      <LoreColophon label="Fim do Registro Cartográfico" />
    </div>
  );
}

function RacePage({
  pageId,
  title,
  intro,
  groups,
  tags,
}: {
  pageId: PageId;
  title: string;
  intro: string;
  groups: { name: string; desc: string }[];
  tags: string[];
}) {
  return (
    <div className="page-article lore-page">
      <LoreFrontispiece page={pageId} />

      <article className="lore-chapter">
        <LoreChapterHeader
          number="Livro I"
          title={title}
          subtitle="Herança cultural, divisões e papel político em Myrthos"
        />

        <div className="lore-chapter-body">
          <div className="lore-section">
            <h3 className="lore-section-heading">Origem e Temperamento</h3>
            <p className="lore-para lore-para-drop">{intro}</p>
            <div className="tag-row big">
              {tags.map((tag) => (
                <Tag key={tag} tone="gold">
                  {tag}
                </Tag>
              ))}
            </div>
          </div>

          <div className="race-group-list">
            {groups.map((group) => (
              <div key={group.name} className="race-group-card">
                <h3 className="lore-section-heading">{group.name}</h3>
                <p className="lore-para">{group.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </article>

      <LoreColophon label={`Fim do Tratado sobre ${title}`} />
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
    <div className="page-article lore-page classes-page">
      <LoreFrontispiece page="classes" />

      <article className="lore-chapter">
        <LoreChapterHeader
          number="Compêndio"
          title="Classes & Profissões"
          subtitle="Superclasses, vocações e perícias iniciais de Myrthos"
        />

        <div className="lore-chapter-body">
          <div className="lore-section">
            <h3 className="lore-section-heading">Ordem dos Ofícios</h3>
            <p className="lore-para lore-para-drop">
              A navegação abaixo foi montada para lembrar o modelo clássico do shard antigo: primeiro a
              <strong> superclasse</strong>, depois a <strong>classe</strong> e por fim o registro completo com papel
              narrativo e skills iniciais.
            </p>
          </div>

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
              <div className="class-detail-prose">
                <p className="lore-para lore-para-drop">{currentClass.summary}</p>
              </div>
              <div className="skill-title">Skills Iniciais</div>
              <ul className="skills-list">
                {currentClass.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>

      <LoreColophon label="Fim do Compêndio de Classes" />
    </div>
  );
}

function HerancaPage() {
  return (
    <div className="page-article lore-page">
      <LoreFrontispiece page="heranca" />

      <article className="lore-chapter">
        <LoreChapterHeader
          number="Livro Único"
          title="Bênção ou Maldição"
          subtitle="O segredo guardado no Baú Glacial ao lado do leito real"
        />

        <div className="lore-chapter-body">
          <div className="lore-section">
            <h3 className="lore-section-heading">O Coração Secreto do Continente</h3>
            <p className="lore-para lore-para-drop">
              A Herança é o coração secreto de Myrthos. Sua função exata permanece objeto de debate entre magos,
              cronistas e sacerdotes, mas todos concordam em algo: ela <strong>participa do equilíbrio do continente</strong>,
              e não pode cair em mãos erradas sem que a política inteira desabe com ela.
            </p>
            <p className="lore-para">
              O artefato continua sendo guardado pela monarquia. Não em cofres subterrâneos,
              nem em criptas distantes — mas <strong>no Palácio Real, ao lado da cama do rei</strong>, dentro de um
              baú de madeira rara azulada que parece gelo, conhecido nos registros como <strong>Baú Glacial</strong>.
            </p>
            <blockquote className="lore-pull">
              Quem controla a Herança controla tratados, sucessão, chantagem diplomática e o medo coletivo de um novo desastre continental.
            </blockquote>
          </div>

          <div className="chest-panel">
            <img src="/images/bau-glacial.jpg" alt="Baú Glacial ao lado da cama do rei" />
            <div className="chest-overlay" />
            <div className="chest-caption">O Baú Glacial — Aposento Real de Aramor</div>
          </div>

          <div className="card-grid two">
            <InfoCard title="Guardião Atual" text="O soberano da Casa Vannemere responde pessoalmente pela custódia da Herança. Isso torna a monarquia indispensável — e perigosa." tone="gold" Icon={Crown} />
            <InfoCard title="Razão Política" text="Quem controla a Herança controla tratados, sucessão, chantagem diplomática e o medo coletivo de um novo desastre continental." tone="red" Icon={Flame} />
            <InfoCard title="Razão Ritual" text="Os elfos mais antigos sustentam que a Herança deveria ser vigiada, não possuída. O verbo cerimonial mais usado para descrevê-la é tir: observar, guardar, vigiar." tone="blue" Icon={Eye} />
            <InfoCard title="Tensão Narrativa" text="Thessomar acredita que a Coroa transformou um selo antigo em monopólio dinástico. Aramor chama isso de responsabilidade legítima." tone="default" Icon={Landmark} />
          </div>
        </div>
      </article>

      <LoreColophon label="Fim do Registro sobre A Herança" />
    </div>
  );
}

function ComoJogarPage() {
  return (
    <div className="page-article lore-page">
      <LoreFrontispiece page="como-jogar" />

      <article className="lore-chapter">
        <LoreChapterHeader
          number="Livro I"
          title="Instalação & Acesso"
          subtitle="Tudo o que você precisa para cruzar o mar rumo a Myrthos"
        />

        <div className="lore-chapter-body">
          <div className="lore-section">
            <h3 className="lore-section-heading">O Aplicativo de Instalação</h3>
            <p className="lore-para lore-para-drop">
              Para começar no Mystery Shard RP, você precisará apenas do nosso aplicativo
              de instalação. Ele será responsável por baixar os arquivos necessários do
              jogo e do client, organizar tudo na pasta correta e criar os atalhos para
              acesso pelo Desktop e pelo Menu Iniciar.
            </p>
            <p className="lore-para">
              A ideia é tornar o primeiro acesso o mais simples possível. Depois de
              instalar o aplicativo, basta seguir as instruções apresentadas por ele e
              iniciar o jogo.
            </p>
          </div>

          <div className="card-grid two">
            <InfoCard
              title="Aplicativo do Mystery Shard"
              text="Um único aplicativo para instalar o jogo, baixar o client, manter os arquivos organizados e criar os atalhos de acesso."
              tone="gold"
              Icon={BookOpenText}
            />
            <InfoCard
              title="Atualizações Automáticas"
              text="O aplicativo também será utilizado para manter os arquivos necessários atualizados conforme novas versões forem disponibilizadas."
              tone="blue"
              Icon={Sparkles}
            />
          </div>
        </div>

        <div className="lore-chapter-divider">· · ·</div>
      </article>

      <article className="lore-chapter">
        <LoreChapterHeader
          number="Livro II"
          title="Comunidade & Conexão"
          subtitle="Ponto de encontro oficial e endereço do servidor"
        />

        <div className="lore-chapter-body">
          <div className="lore-section">
            <h3 className="lore-section-heading">Ponto de Contato</h3>
            <p className="lore-para lore-para-drop">
              O Discord é o principal ponto de contato da comunidade. É onde serão
              divulgadas informações, avisos, atualizações, regras, punições e demais
              comunicados relacionados ao servidor.
            </p>
            <blockquote className="lore-pull">
              <a
                href="https://discord.gg/jHADNsa9P"
                target="_blank"
                rel="noreferrer"
                className="lore-discord-link"
              >
                ✦ Entrar no Discord Oficial do Mystery Shard RP ✦
              </a>
            </blockquote>
          </div>

          <div className="card-grid two">
            <InfoCard
              title="Endereço do Servidor"
              text="148.224.62.251"
              tone="gold"
              Icon={Landmark}
            />
            <InfoCard
              title="Porta de Conexão"
              text="2593"
              tone="blue"
              Icon={Eye}
            />
          </div>
        </div>
      </article>

      <LoreColophon label="Fim do Guia de Acesso" />
    </div>
  );
}

function SistemasPage() {
  const [selected, setSelected] = useState(GAME_SYSTEMS[0].name);
  const current = GAME_SYSTEMS.find((s) => s.name === selected) ?? GAME_SYSTEMS[0];

  return (
    <div className="page-article lore-page classes-page">
      <LoreFrontispiece page="sistemas" />

      <article className="lore-chapter">
        <LoreChapterHeader
          number="Compêndio"
          title="Sistemas do Shard"
          subtitle="As engrenagens mecânicas e interpretativas que movem Myrthos"
        />

        <div className="lore-chapter-body">
          <div className="lore-section">
            <h3 className="lore-section-heading">Regras Vivas</h3>
            <p className="lore-para lore-para-drop">
              O Mystery Shard RP é inspirado nos sistemas clássicos do MyT, adaptados para a nova
              ambientação de Myrthos. Abaixo estão as engrenagens principais que movem o jogo —
              da criação de personagem à fiscalização, passando por alquimia, agricultura, guildas e combate.
            </p>
          </div>

          <div className="classes-browser systems-browser">
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
              <div className="class-detail-prose">
                <p className="lore-para lore-para-drop">{current.description}</p>
              </div>

              <div className="skill-title">Como Funciona</div>
              <ul className="skills-list">
                {current.howItWorks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {current.tips && current.tips.length > 0 && (
                <>
                  <div className="skill-title">Dicas de Sobrevivência</div>
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
      </article>

      <LoreColophon label="Fim do Compêndio de Sistemas" />
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
    <div className="page-article lore-page">
      <LoreFrontispiece page="vocabulario" />

      <article className="lore-chapter">
        <LoreChapterHeader
          number="Livro I"
          title="Quenya Cerimonial"
          subtitle="A língua da memória preservada pelos Filhos de Silmalen e Exilados do Oriente"
        />

        <div className="lore-chapter-body">
          <div className="lore-section">
            <h3 className="lore-section-heading">O Idioma da Reverência</h3>
            <p className="lore-para lore-para-drop">
              Nos dias atuais, os elfos de Myrthos usam seu idioma antigo sobretudo em <strong>cerimônias</strong>,
              <strong> documentos oficiais</strong>, <strong>saudações</strong>, nomes de linhagem e fórmulas de juramento.
              No trato comum, falam a língua corrente — mas palavras élficas escapam quando há luto, fé, reverência ou memória.
            </p>
          </div>

          <div className="search-bar">
            <Search size={15} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar termo élfico ou significado em português..."
            />
          </div>

          <div className="vocab-grid">
            {filteredGroups.map((group) => (
              <div key={group.title} className="vocab-card">
                <h3 className="lore-section-heading">{group.title}</h3>
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
        </div>

        <div className="lore-chapter-divider">· · ·</div>
      </article>

      <article className="lore-chapter">
        <LoreChapterHeader
          number="Livro II"
          title="Aglutinação & Nomes"
          subtitle="Como radicais antigos se unem para formar nomes de linhagem e armas rituais"
        />

        <div className="lore-chapter-body">
          <div className="lore-section">
            <h3 className="lore-section-heading">A Arte da Composição</h3>
            <p className="lore-para lore-para-drop">
              Muitas palavras élficas se formam por <strong>aglutinação</strong>, somando radicais para manter sentido poético.
              Isso explica por que títulos, sobrenomes, armas ritualísticas e canções soam compostos, musicais e carregados de imagem.
            </p>
          </div>

          <div className="sample-grid">
            {ELVISH_SAMPLES.map((sample) => (
              <div key={sample.name} className="sample-card">
                <h3 className="lore-section-heading">{sample.name}</h3>
                <strong>{sample.meaning}</strong>
                <p className="lore-card-para">{sample.breakdown}</p>
              </div>
            ))}
          </div>
        </div>
      </article>

      <LoreColophon label="Fim do Léxico Élfico" />
    </div>
  );
}

/* ── Navegação Superior Retrátil com Abas que Abrem para Baixo ao Clicar ── */
function TopNavigation({ page, go }: { page: PageId; go: (p: PageId) => void }) {
  const [openGroup, setOpenGroup] = useState<MenuGroupLabel | null>(null);
  const [barHidden, setBarHidden] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const lastScrollY = useRef(0);

  // Sempre fecha o menu de opções ao trocar de página
  useEffect(() => {
    setOpenGroup(null);
  }, [page]);

  // Fecha o dropdown ao clicar fora ou apertar Escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenGroup(null);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenGroup(null);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Esconde a barra durante a rolagem de leitura para baixo; mostra ao rolar para cima
  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY > 120 && currentY > lastScrollY.current + 8) {
        setBarHidden(true);
        setOpenGroup(null);
      } else if (currentY < 60 || currentY < lastScrollY.current - 14) {
        setBarHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const activeCategory = PAGE_TO_MENU[page];

  return (
    <>
      {/* Gatilho discreto no topo quando o menu fica escondido durante a leitura */}
      <div
        className={`topbar-reveal-Zone ${barHidden ? 'visible' : ''}`}
        onMouseEnter={() => setBarHidden(false)}
      >
        <button
          type="button"
          className="topbar-reveal-pill"
          onClick={() => setBarHidden(false)}
          title="Mostrar menu de navegação"
        >
          <span className="topbar-reveal-ornament">✦</span>
          <span>Menu — {PAGE_TITLES[page]}</span>
          <ChevronDown size={13} />
        </button>
      </div>

      <header
        ref={navRef}
        className={`topbar-shell ${barHidden ? 'is-hidden' : ''}`}
      >
        <div className="topbar-inner">
          <button
            type="button"
            className={`topbar-brand ${page === 'inicio' ? 'active' : ''}`}
            onClick={() => {
              setOpenGroup(null);
              go('inicio');
            }}
          >
            <span className="topbar-brand-ornament">✦</span>
            <strong>Mystery Shard RP</strong>
          </button>

          <nav className="topbar-tabs" aria-label="Navegação principal">
            {MENU.map((group) => {
              const isOpen = openGroup === group.label;
              const isCurrentGroup = activeCategory === group.label && page !== 'inicio';

              return (
                <div key={group.label} className="topbar-tab-wrap">
                  <button
                    type="button"
                    className={`topbar-tab ${isOpen ? 'open' : ''} ${isCurrentGroup ? 'active-group' : ''}`}
                    onClick={() =>
                      setOpenGroup((prev) => (prev === group.label ? null : group.label))
                    }
                    aria-expanded={isOpen}
                  >
                    <span>{group.label}</span>
                    <ChevronDown
                      size={13}
                      className={`topbar-chevron ${isOpen ? 'rotated' : ''}`}
                    />
                  </button>

                  {isOpen && (
                    <div className="topbar-dropdown" role="menu">
                      {group.children.map((child) => (
                        <button
                          key={child.id}
                          type="button"
                          role="menuitem"
                          className={`topbar-dropdown-item ${page === child.id ? 'active' : ''}`}
                          onClick={() => {
                            setOpenGroup(null);
                            go(child.id);
                          }}
                        >
                          <span className="dropdown-bullet">✦</span>
                          <span>{child.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <button
            type="button"
            className="topbar-hide-btn"
            onClick={() => {
              setOpenGroup(null);
              setBarHidden(true);
            }}
            title="Recolher menu para leitura"
          >
            Ocultar
          </button>
        </div>
      </header>
    </>
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
            <HeroIcon size={18} />
            <h1>{meta.title}</h1>
          </div>
          {meta.subtitle && <p>{meta.subtitle}</p>}
        </div>
      </section>

      <section className="content-panel" key={page}>
        {page === 'inicio' && <InicioPage go={go} />}
        {page === 'lore' && <LorePage />}
        {page === 'ambientacao' && <AmbientacaoPage />}
        {page === 'biografia' && <BiografiaPage />}
        {page === 'cidade-aramor' && <CityPage pageId="cidade-aramor" city={CITY_ARAMOR} />}
        {page === 'cidade-thessomar' && <CityPage pageId="cidade-thessomar" city={CITY_THESSOMAR} />}
        {page === 'mapa' && <MapPage />}
        {page === 'racas-humanos' && (
          <RacePage
            pageId="racas-humanos"
            title="Humanos"
            intro={HUMAN_RACE.intro}
            groups={HUMAN_RACE.groups}
            tags={['Versatilidade', 'Ambição', 'Ordens Militares', 'Nobreza Colonial']}
          />
        )}
        {page === 'racas-elfos' && (
          <RacePage
            pageId="racas-elfos"
            title="Elfos"
            intro={ELF_RACE.intro}
            groups={ELF_RACE.groups}
            tags={['Ritual', 'Memória', 'Arqueria', 'Idioma Cerimonial']}
          />
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
      <TopNavigation page={page} go={navigate} />
      <PageViewport page={page} go={navigate} />
    </div>
  );
}
