import { FormEvent, useEffect, useState } from "react";
import heroImage from "./assets/hero-section.png";
import artistImage from "./assets/artiste.jpg";
import a1Image from "./assets/A1.jpg";
import a2Image from "./assets/A2.jpg";
import a3Image from "./assets/A3.jpg";
import n1Image from "./assets/N1.jpg";
import n2Image from "./assets/N2.jpg";
import n3Image from "./assets/N3.jpg";
import c1Image from "./assets/C1.jpg";
import c2Image from "./assets/C2.jpg";
import c3Image from "./assets/C3.jpg";
import kreaImage from "./assets/krea.png";
import j1Image from "./assets/J1.jpg";

// Galerie photos
import g_081fdfa2 from "./assets/081fdfa2-ec85-4062-8378-0ed440277763.jpg";
import g_095d1fc6 from "./assets/095d1fc6-1042-4f06-b20e-b73d97bb2959.jpg";
import g_0cbd1781 from "./assets/0cbd1781-dbd8-4992-acb5-d85c245eaed0.jpg";
import g_11186e97 from "./assets/11186e97-48ac-4924-bfbe-7bc87bd3dea2.jpg";
import g_14c7e8a1 from "./assets/14c7e8a1-050a-422e-a13f-0f8e73de7fd3.jpg";
import g_18d4e975 from "./assets/18d4e975-8a0f-486f-9b77-84abfd0f041b.jpg";
import g_1d1203cc from "./assets/1d1203cc-1cae-4681-9b71-855f82c21d76.jpg";
import g_1f338814 from "./assets/1f338814-12c3-43c5-94bd-e3f90529b4fe.jpg";
import g_219231b6 from "./assets/219231b6-a903-4ac0-a758-e67fa6de89b6.jpg";
import g_25a60c65 from "./assets/25a60c65-026a-4bf9-a471-b13eb8b5d488.jpg";
import g_2a8c61c5 from "./assets/2a8c61c5-b91a-417a-9ad6-56de39543313.jpg";
import g_2db31eab from "./assets/2db31eab-16f7-419b-aeb0-4308bb7706dc.jpg";
import g_4e479269 from "./assets/4e479269-4dc2-4bde-88d2-5fd7452a07e0.jpg";
import g_52bee33b from "./assets/52bee33b-1efd-48ae-abba-0afa765f920e.jpg";
import g_5674f5ee from "./assets/5674f5ee-4d3f-4dc9-96c5-7943ded53826.jpg";
import g_5756e0f8 from "./assets/5756e0f8-9139-4d5d-94a2-983a18b6e9a1.jpg";
import g_645aa315 from "./assets/645aa315-fb28-45e3-88cd-63d928c9da57.jpg";
import g_65639c42 from "./assets/65639c42-2cc0-469b-9027-2b3e6c063b04.jpg";
import g_658b5d49 from "./assets/658b5d49-d4b9-4be5-8e37-1496423f34f6.jpg";
import g_670820c9 from "./assets/670820c9-a8cc-433a-9c81-6fd43de1a57a.jpg";
import g_71553341 from "./assets/71553341-73cf-4058-9306-6967e92e0434.jpg";
import g_7156c9f6 from "./assets/7156c9f6-66f1-40f8-b684-57ae434bfa8f.jpg";
import g_736b1507 from "./assets/736b1507-6395-4365-9233-8cce9bc35de1.jpg";
import g_76fd225e from "./assets/76fd225e-fd04-4506-9054-19a79a8b4beb.jpg";
import g_77a8c740 from "./assets/77a8c740-b332-4cdb-a19b-9804031684db.jpg";
import g_7b067416 from "./assets/7b067416-ebd0-4edc-89de-887976383b1f.jpg";
import g_8593d998 from "./assets/8593d998-ed41-47c2-a078-7ca2d6edf2a3.jpg";
import g_8fab96fe from "./assets/8fab96fe-c5d2-4f87-bb16-1e0b3d885666.jpg";
import g_927052dd from "./assets/927052dd-30b5-4dd2-b5f4-562160197933.jpg";
import g_94d41d14 from "./assets/94d41d14-05f4-42d7-b586-ccc2146e4454.jpg";
import g_a17c7c04 from "./assets/a17c7c04-2cb7-4038-9a58-e99f9861ae80.jpg";
import g_a26f3e6d from "./assets/a26f3e6d-bba8-40ad-b3b5-e5283e1b3062.jpg";
import g_abebdee3 from "./assets/abebdee3-8cac-4d94-9cb8-e37fdaba2104.jpg";
import g_b140f9a9 from "./assets/b140f9a9-1f62-4d9a-acc6-cebde93d1d11.jpg";
import g_b8dd6c44 from "./assets/b8dd6c44-6df0-4ec0-963f-2649a0d22574.jpg";
import g_b9ff22d4 from "./assets/b9ff22d4-03f0-436e-af71-079e5b1740a7.jpg";
import g_c207c79e from "./assets/c207c79e-6a67-4dac-9237-9455c03dd546.jpg";
import g_cc1a5603 from "./assets/cc1a5603-1824-4ecf-b8ab-8ffb7821c43d.jpg";
import g_cf0d34aa from "./assets/cf0d34aa-472d-491b-bdbf-23466f5ee34b.jpg";
import g_d1783384 from "./assets/d1783384-839d-44e3-94d5-86ed68f10e7d.jpg";
import g_e874bb70 from "./assets/e874bb70-ba58-4ab9-96cf-409f90263677.jpg";
import g_f1715ab9 from "./assets/f1715ab9-605c-4aa1-b49c-74750f6eb0e8.jpg";
import g_fa9981e3 from "./assets/fa9981e3-e20c-46ed-b584-3c166bf18c8c.jpg";

// Galerie DOLI
import g_0aac2970 from "./assets/0aac2970-74c3-4315-ac6d-279ae3403a19.jpg";
import g_11cfd9cd from "./assets/11cfd9cd-dc8e-4abb-af12-fc73e20c9414.jpg";
import g_12b9a6b2 from "./assets/12b9a6b2-0fef-4900-a236-dd521dc1801d.jpg";
import g_2693e0f1 from "./assets/2693e0f1-4e27-4425-94b1-648121713897.jpg";
import g_330a7d8c from "./assets/330a7d8c-610e-4100-a314-f4d862f35195.jpg";
import g_3bdafd4a from "./assets/3bdafd4a-57a7-4227-b8b5-038ba5d0e3d0.jpg";
import g_4369b571 from "./assets/4369b571-a4b2-4190-8c2e-6864667e94b4.jpg";
import g_5ee875b2 from "./assets/5ee875b2-8b84-464f-925b-b79f37fc5654.jpg";
import g_94d1de5e from "./assets/94d1de5e-cd6e-4e8e-b26b-b4af86dd400a.jpg";
import g_99fa3272 from "./assets/99fa3272-2f9a-4e3d-9767-0c2144c4a9d7.jpg";
import g_aca59e7e from "./assets/aca59e7e-1934-4b31-a814-6abee00a4cae.jpg";
import g_c025a280 from "./assets/c025a280-f0f4-4953-86f0-52b9bac185fa.jpg";
import g_e64786d5 from "./assets/e64786d5-b5eb-4fc7-a085-49e280825d4f.jpg";
import g_wa_011038 from "./assets/wa_20261122_011038.jpeg";
import g_wa_011048 from "./assets/wa_20261122_011048.jpeg";
import g_wa_011051 from "./assets/wa_20261122_011051.jpeg";

type Look = { title: string; category: string; image: string; number: string; detail: string };

const looks: Look[] = [
  {
    title: "Ébène",
    category: "Pièces d'exception",
    image: n1Image,
    number: "01",
    detail: "Volume sculptural, perles et finitions réalisées à la main.",
  },
  {
    title: "Ocre",
    category: "Élégance féminine",
    image: n2Image,
    number: "02",
    detail: "Une silhouette fluide inspirée des terres sahéliennes.",
  },
  {
    title: "Sable",
    category: "Modernité africaine",
    image: n3Image,
    number: "03",
    detail: "Lignes pures et drapé contemporain en dialogue avec le paysage.",
  },
  {
    title: "Nacre",
    category: "Créations événementielles",
    image: c1Image,
    number: "04",
    detail: "Une lumière naturelle, des détails précieux, une allure intemporelle.",
  },
  {
    title: "Kora",
    category: "Tradition revisitée",
    image: c2Image,
    number: "05",
    detail: "Le geste ancestral traduit dans un langage graphique actuel.",
  },
  {
    title: "Orée",
    category: "Élégance féminine",
    image: c3Image,
    number: "06",
    detail: "Couleur solaire et construction souple pour une présence souveraine.",
  },
];

const collections = [
  { name: "Héritage", subtitle: "Tradition revisitée — 2025", image: a1Image },
  { name: "Terre", subtitle: "Modernité africaine — 2025", image: a2Image },
  { name: "Lumière", subtitle: "Pièces de cérémonie — 2025", image: a3Image },
];

const categories = ["Tous", ...Array.from(new Set(looks.map((look) => look.category)))];

type GalleryItem = {
  id: string;
  image: string;
  title: string;
  category: string;
};

const galleryItems: GalleryItem[] = [
  { id: "g1",  image: g_081fdfa2, title: "Série I — 01",  category: "Galerie" },
  { id: "g2",  image: g_095d1fc6, title: "Série I — 02",  category: "Galerie" },
  { id: "g3",  image: g_0cbd1781, title: "Série I — 03",  category: "Galerie" },
  { id: "g4",  image: g_11186e97, title: "Série I — 04",  category: "Galerie" },
  { id: "g5",  image: g_14c7e8a1, title: "Série I — 05",  category: "Galerie" },
  { id: "g6",  image: g_18d4e975, title: "Série I — 06",  category: "Galerie" },
  { id: "g7",  image: g_1d1203cc, title: "Série I — 07",  category: "Galerie" },
  { id: "g8",  image: g_1f338814, title: "Série I — 08",  category: "Galerie" },
  { id: "g9",  image: g_219231b6, title: "Série I — 09",  category: "Galerie" },
  { id: "g10", image: g_25a60c65, title: "Série I — 10",  category: "Galerie" },
  { id: "g11", image: g_2a8c61c5, title: "Série I — 11",  category: "Galerie" },
  { id: "g12", image: g_2db31eab, title: "Série I — 12",  category: "Galerie" },
  { id: "g13", image: g_4e479269, title: "Série I — 13",  category: "Galerie" },
  { id: "g14", image: g_52bee33b, title: "Série I — 14",  category: "Galerie" },
  { id: "g15", image: g_5674f5ee, title: "Série I — 15",  category: "Galerie" },
  { id: "g16", image: g_5756e0f8, title: "Série I — 16",  category: "Galerie" },
  { id: "g17", image: g_645aa315, title: "Série I — 17",  category: "Galerie" },
  { id: "g18", image: g_65639c42, title: "Série I — 18",  category: "Galerie" },
  { id: "g19", image: g_658b5d49, title: "Série I — 19",  category: "Galerie" },
  { id: "g20", image: g_670820c9, title: "Série I — 20",  category: "Galerie" },
  { id: "g21", image: g_71553341, title: "Série I — 21",  category: "Galerie" },
  { id: "g22", image: g_7156c9f6, title: "Série I — 22",  category: "Galerie" },
  { id: "g23", image: g_736b1507, title: "Série I — 23",  category: "Galerie" },
  { id: "g24", image: g_76fd225e, title: "Série I — 24",  category: "Galerie" },
  { id: "g25", image: g_77a8c740, title: "Série I — 25",  category: "Galerie" },
  { id: "g26", image: g_7b067416, title: "Série I — 26",  category: "Galerie" },
  { id: "g27", image: g_8593d998, title: "Série I — 27",  category: "Galerie" },
  { id: "g28", image: g_8fab96fe, title: "Série I — 28",  category: "Galerie" },
  { id: "g29", image: g_927052dd, title: "Série I — 29",  category: "Galerie" },
  { id: "g30", image: g_94d41d14, title: "Série I — 30",  category: "Galerie" },
  { id: "g31", image: g_a17c7c04, title: "Série I — 31",  category: "Galerie" },
  { id: "g32", image: g_a26f3e6d, title: "Série I — 32",  category: "Galerie" },
  { id: "g33", image: g_abebdee3, title: "Série I — 33",  category: "Galerie" },
  { id: "g34", image: g_b140f9a9, title: "Série I — 34",  category: "Galerie" },
  { id: "g35", image: g_b8dd6c44, title: "Série I — 35",  category: "Galerie" },
  { id: "g36", image: g_b9ff22d4, title: "Série I — 36",  category: "Galerie" },
  { id: "g37", image: g_c207c79e, title: "Série I — 37",  category: "Galerie" },
  { id: "g38", image: g_cc1a5603, title: "Série I — 38",  category: "Galerie" },
  { id: "g39", image: g_cf0d34aa, title: "Série I — 39",  category: "Galerie" },
  { id: "g40", image: g_d1783384, title: "Série I — 40",  category: "Galerie" },
  { id: "g41", image: g_e874bb70, title: "Série I — 41",  category: "Galerie" },
  { id: "g42", image: g_f1715ab9, title: "Série I — 42",  category: "Galerie" },
  { id: "g43", image: g_fa9981e3, title: "Série I — 43",  category: "Galerie" },
  { id: "g44", image: g_0aac2970, title: "DOLI — 01",     category: "DOLI" },
  { id: "g45", image: g_11cfd9cd, title: "DOLI — 02",     category: "DOLI" },
  { id: "g46", image: g_12b9a6b2, title: "DOLI — 03",     category: "DOLI" },
  { id: "g47", image: g_2693e0f1, title: "DOLI — 04",     category: "DOLI" },
  { id: "g48", image: g_330a7d8c, title: "DOLI — 05",     category: "DOLI" },
  { id: "g49", image: g_3bdafd4a, title: "DOLI — 06",     category: "DOLI" },
  { id: "g50", image: g_4369b571, title: "DOLI — 07",     category: "DOLI" },
  { id: "g51", image: g_5ee875b2, title: "DOLI — 08",     category: "DOLI" },
  { id: "g52", image: g_94d1de5e, title: "DOLI — 09",     category: "DOLI" },
  { id: "g53", image: g_99fa3272, title: "DOLI — 10",     category: "DOLI" },
  { id: "g54", image: g_aca59e7e, title: "DOLI — 11",     category: "DOLI" },
  { id: "g55", image: g_c025a280, title: "DOLI — 12",     category: "DOLI" },
  { id: "g56", image: g_e64786d5, title: "DOLI — 13",     category: "DOLI" },
  { id: "g57", image: g_wa_011038, title: "DOLI — 14",    category: "DOLI" },
  { id: "g58", image: g_wa_011048, title: "DOLI — 15",    category: "DOLI" },
  { id: "g59", image: g_wa_011051, title: "DOLI — 16",    category: "DOLI" },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={diagonal ? "diagonal" : ""}>
      <path d="M4 12h15M14 6l6 6-6 6" />
    </svg>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [selectedLook, setSelectedLook] = useState<Look | null>(null);
  const [activeGalleryModal, setActiveGalleryModal] = useState<GalleryItem | null>(null);
  const [sent, setSent] = useState(false);
  const [heroHover, setHeroHover] = useState({
    x: 50,
    y: 50,
    rotateX: 0,
    rotateY: 0,
    isHovered: false,
  });

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const rotateX = ((rect.height / 2 - (e.clientY - rect.top)) / (rect.height / 2)) * 3;
    const rotateY = (((e.clientX - rect.left) - rect.width / 2) / (rect.width / 2)) * 3.5;
    setHeroHover({ x, y, rotateX, rotateY, isHovered: true });
  };

  const handleHeroMouseLeave = () => {
    setHeroHover({ x: 50, y: 50, rotateX: 0, rotateY: 0, isHovered: false });
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen || selectedLook || activeGalleryModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, selectedLook, activeGalleryModal]);

  const filteredLooks =
    activeFilter === "Tous" ? looks : looks.filter((look) => look.category === activeFilter);

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <main>
      <div className="intro" aria-hidden="true">
        <span>CHEIKH ART</span>
      </div>

      <header className="site-header">
        <a href="#accueil" className="logo" aria-label="Cheikh Art, accueil">
          CHEIKH <span>ART</span>
        </a>
        <nav className="desktop-nav" aria-label="Navigation principale">
          <a href="#univers">Mon univers</a>
          <a href="#collections">Collections</a>
          <a href="#lookbook">Lookbook</a>
          <a href="#galerie">Galerie</a>
          <a href="#atelier">L'atelier</a>
        </nav>
        <a href="#contact" className="header-cta">
          Prendre rendez-vous <Arrow />
        </a>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(true)}
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="menu-top">
          <span className="logo">
            CHEIKH <span>ART</span>
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Fermer le menu"
            className="close-button"
          >
            Fermer
          </button>
        </div>
        <nav>
          {[
            ["Accueil", "accueil"],
            ["Mon univers", "univers"],
            ["Collections", "collections"],
            ["Lookbook", "lookbook"],
            ["Galerie", "galerie"],
            ["L'atelier", "atelier"],
            ["Contact", "contact"],
          ].map(([label, id], index) => (
            <a href={`#${id}`} onClick={() => setMenuOpen(false)} key={id}>
              <span>0{index + 1}</span>
              {label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <div className="mobile-menu-phones">
            <a href="https://wa.me/221787372152" target="_blank" rel="noopener noreferrer">
              🇸🇳 +221 78 737 21 52 (WhatsApp)
            </a>
            <a href="tel:+212681108027">🇲🇦 +212 681 108 027</a>
          </div>
          <div className="mobile-menu-socials">
            <a href="https://www.instagram.com/p/DcUKkD8ovlf/?igsi=aGQ3Z2o5NGtrNnA5" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.tiktok.com/@cheikhart7?_r=1&_t=ZS-9BWLpw5X9uO" target="_blank" rel="noopener noreferrer">TikTok</a>
            <a href="https://www.threads.net/@artcheikh19" target="_blank" rel="noopener noreferrer">Threads</a>
            <a href="https://www.facebook.com/profile.php?id=61593495151632&mibextid=rS40aB7S9Ucbxw6v" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
      </div>

      <section
        className={`hero ${heroHover.isHovered ? "is-hovered" : ""}`}
        id="accueil"
        onMouseMove={handleHeroMouseMove}
        onMouseEnter={() => setHeroHover((prev) => ({ ...prev, isHovered: true }))}
        onMouseLeave={handleHeroMouseLeave}
      >
        <div
          className="hero-art-stage"
          style={{
            transform: heroHover.isHovered
              ? `perspective(1000px) rotateX(${heroHover.rotateX}deg) rotateY(${heroHover.rotateY}deg) scale3d(1.035, 1.035, 1)`
              : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          }}
        >
          <img
            src={heroImage}
            alt="Cheikh Art — Créateur et maître d'art africain contemporain"
            className="hero-img"
          />
          <div
            className="hero-spotlight"
            style={{
              background: `radial-gradient(circle 580px at ${heroHover.x}% ${heroHover.y}%, rgba(190, 151, 84, 0.35) 0%, rgba(190, 151, 84, 0.12) 35%, transparent 68%)`,
              opacity: heroHover.isHovered ? 1 : 0.2,
            }}
          />
          <div className="hero-gold-sweep" aria-hidden="true" />
          <div className="hero-gold-particles" aria-hidden="true" />
          <div className="hero-aura-rim" aria-hidden="true" />
        </div>

        <div className="hero-shade" />

        <div className="hero-content">
          <div className="hero-wall-lockup">
            <h1>
              CHEIKH
              <br />
              <em>ART</em>
            </h1>
          </div>
          <div className="hero-bottom">
            <div>
              <h2>
                L'héritage africain.
                <br />
                L'audace moderne.
              </h2>
              <p>
                Des créations qui racontent une identité, célèbrent un héritage et réinventent
                l'élégance.
              </p>
            </div>
            <div className="hero-actions">
              <a className="button button-light" href="#collections">
                Découvrir les créations <Arrow />
              </a>
              <a className="text-link" href="#univers">
                Explorer mon univers <Arrow />
              </a>
            </div>
          </div>
        </div>
        <div className="scroll-mark">
          <span>Défiler</span>
          <i />
        </div>
      </section>

      <section className="artist section-pad" id="univers">
        <div className="section-index">01 — L'artiste</div>
        <div className="artist-grid">
          <div className="artist-copy">
            <p className="eyebrow dark">L'homme derrière la matière</p>
            <h2>
              Je ne crée pas seulement des vêtements. <em>Je façonne des identités.</em>
            </h2>
            <div className="artist-body">
              <p>
                Cheikh Art explore la rencontre entre l'héritage culturel africain et une écriture
                résolument contemporaine.
              </p>
              <p>
                Chaque silhouette naît d'une recherche de justesse : respecter la matière, honorer
                le geste et laisser à celle ou celui qui la porte l'espace d'exister pleinement.
              </p>
              <p className="placeholder">
                Biographie détaillée à compléter avec le parcours authentique du créateur.
              </p>
            </div>
            <div className="signature">Cheikh Art</div>
          </div>
          <figure className="artist-image">
            <img
              src={artistImage}
              alt="Portrait de Cheikh Art dans son univers de création"
              loading="lazy"
            />
            <figcaption>Cheikh Art — L'homme derrière la matière</figcaption>
          </figure>
        </div>
      </section>

      <section className="collections" id="collections">
        <div className="collection-heading section-pad">
          <div className="section-index light">02 — Collections</div>
          <div>
            <p className="eyebrow">Histoires à porter</p>
            <h2>
              Des silhouettes pensées comme des <em>œuvres vivantes.</em>
            </h2>
          </div>
          <p>
            Une exploration de la forme, du mouvement et de la mémoire. Chaque collection ouvre un
            nouveau chapitre.
          </p>
        </div>
        <div className="collection-showcase section-pad" aria-label="Collections">
          <div className="collection-grid">
            {collections.map((collection, index) => (
              <article className="collection-card" key={collection.name}>
                <div className="collection-media">
                  <img
                    src={collection.image}
                    alt={`Collection ${collection.name}`}
                    loading="lazy"
                  />
                  <span className="collection-badge">0{index + 1}</span>
                  <div className="collection-media-aura" />
                </div>
                <div className="collection-details">
                  <div className="collection-details-head">
                    <p className="collection-subtitle">{collection.subtitle}</p>
                    <span className="collection-num">0{index + 1}</span>
                  </div>
                  <h3 className="collection-title">{collection.name}</h3>
                  <button
                    className="collection-btn"
                    onClick={() => {
                      setActiveFilter(index === 0 ? "Pièces d'exception" : "Tous");
                      document.querySelector("#lookbook")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Explorer la collection <Arrow />
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div className="collection-atelier-bar">
            <div>
              <p className="eyebrow">Atelier Cheikh Art · Dakar</p>
              <h4>La suite de l'histoire s'écrit à l'atelier.</h4>
            </div>
            <a href="#contact" className="button button-light">
              Parler d'un projet sur mesure <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="lookbook section-pad" id="lookbook">
        <div className="lookbook-head">
          <div>
            <div className="section-index">03 — Lookbook</div>
            <h2>
              Le vêtement
              <br />
              <em>en mouvement.</em>
            </h2>
          </div>
          <p>
            Explorez les coupes, les matières et les finitions. Sélectionnez une silhouette pour
            découvrir son histoire.
          </p>
        </div>
        <div className="filters" aria-label="Filtrer le lookbook">
          {categories.map((category) => (
            <button
              key={category}
              className={activeFilter === category ? "active" : ""}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="look-grid">
          {filteredLooks.map((look) => (
            <button className="look-card" key={look.title} onClick={() => setSelectedLook(look)}>
              <span className="look-image">
                <img src={look.image} alt={look.title} loading="lazy" />
                <i>Voir le look</i>
              </span>
              <span className="look-meta">
                <span>
                  <small>{look.category}</small>
                  <strong>{look.title}</strong>
                </span>
                <span>{look.number}</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ── GALERIE ─────────────────────────────────────── */}
      <section className="galerie section-pad" id="galerie">
        <div className="galerie-header">
          <div className="section-index light">04 — Galerie</div>
          <div className="galerie-header-copy">
            <p className="eyebrow">Archive Visuelle · Cheikh Art</p>
            <h2>
              L'exposition <em>permanente.</em>
            </h2>
            <p>
              {galleryItems.length} créations, portraits, instants d'atelier et la collection Doli. Cliquez sur une image pour
              l'admirer en plein écran.
            </p>
          </div>
        </div>

        <div className="galerie-grid">
          {galleryItems.map((item) => (
            <div
              className="galerie-card"
              key={item.id}
              onClick={() => setActiveGalleryModal(item)}
            >
              <div className="galerie-card-media">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="galerie-card-overlay">
                  <span>Agrandir +</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {activeGalleryModal && (
          <div
            className="galerie-modal"
            onClick={() => setActiveGalleryModal(null)}
            role="dialog"
            aria-modal="true"
          >
            <div className="galerie-modal-dialog" onClick={(e) => e.stopPropagation()}>
              <button
                className="galerie-modal-close"
                onClick={() => setActiveGalleryModal(null)}
                aria-label="Fermer"
              >
                ✕ Fermer
              </button>
              <div className="galerie-modal-img-wrap">
                <img src={activeGalleryModal.image} alt={activeGalleryModal.title} />
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="atelier section-pad" id="atelier">
        <div className="atelier-title">
          <div className="section-index light">05 — Le savoir-faire</div>
          <p className="eyebrow">Dans les coulisses</p>
          <h2>
            Du premier trait
            <br />
            <em>au dernier fil.</em>
          </h2>
        </div>
        <div className="atelier-visual">
          <img
            src={kreaImage}
            alt="Cheikh Art — Processus de création et savoir-faire artisanal"
            loading="lazy"
          />
          <div className="play-seal" aria-hidden="true">
            <span>Le geste · La matière ·</span>
            <b>+</b>
          </div>
        </div>
        <ol className="process-list">
          {[
            ["01", "L'inspiration", "Une émotion, une architecture, une mémoire."],
            ["02", "Le dessin", "La vision prend forme sur le papier."],
            ["03", "La matière", "Tissus, textures et couleurs sont choisis avec exigence."],
            ["04", "La coupe", "La précision du geste révèle la silhouette."],
            ["05", "La confection", "Chaque détail est assemblé et fini à la main."],
            ["06", "La pièce finale", "Une création singulière, prête à vivre."],
          ].map(([number, title, text]) => (
            <li key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="manifesto">
        <div className="pattern" aria-hidden="true" />
        <p className="eyebrow">Manifeste — Cheikh Art</p>
        <blockquote>
          L'Afrique est mon <em>inspiration.</em>
          <br />
          L'art est mon <em>langage.</em>
          <br />
          La modernité est ma <em>liberté.</em>
          <br />
          La couture est mon <em>expression.</em>
        </blockquote>
        <p className="manifesto-mark">CA</p>
      </section>

      <section className="bespoke section-pad" id="sur-mesure">
        <div className="bespoke-image">
          <img
            src={j1Image}
            alt="Cheikh Art — Création haute couture sur mesure"
            loading="lazy"
          />
          <span>Une pièce. Une histoire. La vôtre.</span>
        </div>
        <div className="bespoke-copy">
          <div className="section-index">06 — Sur mesure</div>
          <p className="eyebrow dark">L'exception vous appartient</p>
          <h2>
            Imaginons une création qui ne ressemble <em>qu'à vous.</em>
          </h2>
          <p>
            De la première conversation au dernier essayage, chaque pièce sur mesure est une
            collaboration. Votre histoire rencontre notre savoir-faire.
          </p>
          <a href="#contact" className="button button-dark">
            Imaginer ma création <Arrow />
          </a>
          <div className="bespoke-steps">
            <span>Échange</span>
            <i />
            <span>Création</span>
            <i />
            <span>Essayage</span>
            <i />
            <span>Révélation</span>
          </div>
        </div>
      </section>

      <section className="journal section-pad">
        <div className="journal-head">
          <div>
            <div className="section-index">07 — Journal</div>
            <h2>
              Dans l'univers
              <br />
              <em>Cheikh Art.</em>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/p/DcUKkD8ovlf/?igsi=aGQ3Z2o5NGtrNnA5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Suivre sur Instagram <Arrow diagonal />
          </a>
        </div>
        <div className="journal-grid">
          {looks.slice(1, 5).map((look, index) => (
            <a
              href="https://www.instagram.com/p/DcUKkD8ovlf/?igsi=aGQ3Z2o5NGtrNnA5"
              target="_blank"
              rel="noopener noreferrer"
              key={look.title}
              className={`journal-item item-${index + 1}`}
            >
              <img src={look.image} alt={`Inspiration ${look.title}`} loading="lazy" />
              <span>
                Voir la publication <Arrow diagonal />
              </span>
            </a>
          ))}
        </div>
        <p className="placeholder center">
          Suivez toutes nos actualités et créations exclusives sur Instagram, TikTok, Threads et Facebook.
        </p>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="contact-intro">
          <div className="section-index light">08 — Contact</div>
          <p className="eyebrow">Commençons une histoire</p>
          <h2>
            Créons quelque chose <em>d'unique.</em>
          </h2>
          <p>
            Une cérémonie, une pièce signature ou simplement une idée ? Écrivez-nous. Nous prendrons
            le temps de vous écouter.
          </p>
          <div className="contact-details">
            <div>
              <small>Atelier & Showroom</small>
              <span>
                Dakar, Sénégal
                <br />
                Sur rendez-vous privé
              </span>
            </div>
            <div>
              <small>Téléphone & WhatsApp</small>
              <span>
                <a
                  href="https://wa.me/221787372152"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit", textDecoration: "none" }}
                  title="Contacter sur WhatsApp"
                >
                  +221 78 737 21 52 (WhatsApp)
                </a>
                <br />
                <a href="tel:+212681108027" style={{ color: "inherit", textDecoration: "none" }}>
                  +212 681 108 027
                </a>
              </span>
            </div>
          </div>
        </div>
        <form onSubmit={submitContact}>
          <div className="field-row">
            <label>
              Votre nom
              <input required name="name" placeholder="Nom complet" />
            </label>
            <label>
              Votre e-mail
              <input required type="email" name="email" placeholder="vous@email.com" />
            </label>
          </div>
          <label>
            Votre projet
            <select name="project" defaultValue="">
              <option value="" disabled>
                Choisir une demande
              </option>
              <option>Création sur mesure</option>
              <option>Rendez-vous à l'atelier</option>
              <option>Collaboration</option>
              <option>Autre demande</option>
            </select>
          </label>
          <label>
            Parlez-nous de votre idée
            <textarea
              required
              name="message"
              rows={4}
              placeholder="Votre événement, vos envies, vos inspirations…"
            />
          </label>
          <button className="button button-gold" type="submit">
            Envoyer ma demande <Arrow />
          </button>
          {sent && (
            <p className="form-success" role="status">
              Votre demande a bien été préparée. Connectez le service de messagerie pour activer
              l'envoi réel.
            </p>
          )}
          <p className="form-note">
            Formulaire de démonstration — l'envoi persistant nécessite la connexion du backend.
          </p>
        </form>
      </section>

      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-title">CHEIKH ART</span>
            <p>
              Des racines africaines.
              <br />
              Une vision sans frontières.
            </p>
          </div>

          <div className="footer-content-grid">
            <div className="footer-block">
              <span className="footer-heading">Coordonnées & Téléphone</span>
              <div className="footer-contact-links">
                <a
                  href="https://wa.me/221787372152"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link-item"
                  title="Ouvrir la conversation WhatsApp"
                >
                  <span className="country-badge">SN</span>
                  <span>+221 78 737 21 52</span>
                  <span className="wa-tag">WhatsApp ↗</span>
                </a>
                <a href="tel:+212681108027" className="footer-link-item">
                  <span className="country-badge">MA</span>
                  <span>+212 681 108 027</span>
                </a>
              </div>
              <p className="footer-note">Dakar · Séances privées sur rendez-vous</p>
            </div>

            <div className="footer-block">
              <span className="footer-heading">Réseaux Sociaux</span>
              <div className="footer-social-grid">
                <a
                  href="https://www.instagram.com/p/DcUKkD8ovlf/?igsi=aGQ3Z2o5NGtrNnA5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  title="Instagram Cheikh Art"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.tiktok.com/@cheikhart7?_r=1&_t=ZS-9BWLpw5X9uO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  title="TikTok @cheikhart7"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.88-4.49V8.71a8.21 8.21 0 0 0 4.89 1.6v-3.62h-1z"/>
                  </svg>
                  <span>TikTok</span>
                </a>
                <a
                  href="https://www.threads.net/@artcheikh19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  title="Threads @artcheikh19"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12.186 24C5.467 24 0 18.533 0 11.814 0 5.095 5.467 0 12.186 0c6.643 0 11.967 5.176 12.186 11.814h-2.584C21.57 6.55 17.397 2.477 12.186 2.477 7.03 2.477 2.84 6.666 2.84 11.814c0 5.148 4.19 9.337 9.346 9.337 4.544 0 8.358-3.13 9.208-7.395h-5.064c-2.312 0-4.193-1.881-4.193-4.193 0-2.312 1.881-4.193 4.193-4.193 2.312 0 4.193 1.881 4.193 4.193v.852c0 6.008-4.87 10.878-10.878 10.878h-.458v2.482h.458c7.378 0 13.36-5.982 13.36-13.36v-.852C23.006 4.316 17.684 0 12.186 0zm4.193 11.814c0 .945-.768 1.713-1.713 1.713s-1.713-.768-1.713-1.713.768-1.713 1.713-1.713 1.713.768 1.713 1.713z"/>
                  </svg>
                  <span>Threads</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61593495151632&mibextid=rS40aB7S9Ucbxw6v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  title="Facebook Cheikh Art"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Cheikh Art — Tous droits réservés</span>
          <nav>
            <a href="#accueil">Accueil</a>
            <a href="#collections">Collections</a>
            <a href="#lookbook">Lookbook</a>
            <a href="#galerie">Galerie</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#accueil">Retour en haut ↑</a>
        </div>
      </footer>

      {selectedLook && (
        <div
          className="look-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Détails de ${selectedLook.title}`}
        >
          <button className="modal-close" onClick={() => setSelectedLook(null)}>
            Fermer ×
          </button>
          <div className="modal-image">
            <img src={selectedLook.image} alt={selectedLook.title} />
          </div>
          <div className="modal-copy">
            <span>
              {selectedLook.number} — {selectedLook.category}
            </span>
            <h2>{selectedLook.title}</h2>
            <p>{selectedLook.detail}</p>
            <dl>
              <div>
                <dt>Matière</dt>
                <dd>À renseigner</dd>
              </div>
              <div>
                <dt>Finitions</dt>
                <dd>Artisanales</dd>
              </div>
              <div>
                <dt>Disponibilité</dt>
                <dd>Sur demande</dd>
              </div>
            </dl>
            <a href="#contact" onClick={() => setSelectedLook(null)} className="button button-dark">
              Demander cette création <Arrow />
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
