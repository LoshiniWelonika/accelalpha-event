const speakers = [
  {
    name: 'Dr. Raman Kumar',
    role: 'CSO',
    company: 'Logistics Global Hub',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBU1FMH-KnScWPoedaDpPVDCJsY5Z8fLX2BNtMsxxoP8v3tkZokTNPMvwAG3iUWqYTVT2OLb7qnZGuvjhbfT4mSS9zG-7NuJmSri5WW_Wiozd9qQU-GTc3Ob-CK5fQHh4-GCaFtLmoY4O81lQH9YsxUWlJkRY-twmCrlhmHPc7C7LUiakIqiCxLf-2Jak8Ebhd5vfP9i7HYsY7Cr7U1NQp0m8nRXEJ5Im9lOpx0v5lT1N7Kus_TwKJqCbTxpFyOCR1FKK0_7XJXTds',
  },
  {
    name: 'Sarah Al-Maktoum',
    role: 'Director of AI',
    company: 'TechVantage Solutions',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCnwq7lxfmNaElb8uXlBHhv51A1BaockFm3h_8mKuh6MLCls-JQQjWuQzaZ0uTbB2czlypwUt_47jfBk9S9psfMJ4jBG7VN6Q6XrdPz4ZLtXRRIR587V9g7CigOsv03x7FNP5MUUlz2yn0R1jcnUBpF0xv5YWGNn68RHl4-SlCNowYARjsRK9myZ4WVE1e9gboiuiyhn_Vg97PqF0WTu4ot3olUtfvsV5cJDdxAqMC10ibj9M6Wl_8fdRX87yJo5w76K-e_UJ7III',
  },
  {
    name: 'David Moono',
    role: 'VP Supply Chain',
    company: 'Oceanic Freights',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQeRIEY-mzGntd2HISZdVTcrWHYPAROaU0mktjSBwtB9E1T4IH2DscpJMCXiK_9Ev9xJUl-6EuIswu5mFFK45DxaT_sTTk2EiaLwnNlrBqPpL1kkBMX_n-I8TmhzYpxlyfQaEEes3pgyV9yAjT_rgIQQgs0FppjEkRwG9Db9pl9TZdxkffVySXHEIIOMc2P_RsS2Udiz2t_lWDQasegwFgd_XaZFwOtGjguX45oWXM9qPDdbCVVK1vpa1vGcrjpJW7VghBucZNZsw',
  },
  {
    name: 'Tamer Hamed',
    role: 'Innovation Lead',
    company: 'Gulf Logistics Network',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_y5CY9nOo5lRlnyoAuNRk3T-68uY7fg8iRaW-VGardGVIzZeCwYyKZ4fOA-zQPzyoIfFbw7p7zLR9AA2atyvXW057nHpemDOwGzxvFT2lmB59ATu1EMvjGbPBl8wpFDsJxOpCuT-lAUtnl6uH1hwxEr1l56op8WYJ07FbyCW1c1L_2IFyrNZQNQYspDb_xEI4ML9eAE1VPhPo2xrmlsT8oYN0fEJn4bhjC67x4jvilgtkVg9nBz_yTGP4yKRn4cioOzapqKZ_9Og',
  },
  {
    name: 'Elena Costa',
    role: 'Sustainability Head',
    company: 'EcoShip Global',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHFVhlRwqnqhcJR9Z6ssnTr6HcWgDzLm2NOUXoA_CwTCcgJ12imWE_NfdPvPhrbj-_6C5XyBaREFBPDl87R2CIcA4G5mMVrlexLn5PEuIYjCEbqXa0oeTst7zlOcvGgXJWRoGPutoEXtveEyvRC4mfq2PGKFgoBpgHMAmRZnGMuIfvbBXvBPQkefHI-I_5Lb7u0m9e0ws2-b5Fqm2DlmHNxSAKvmqx47ToDn8mC7tyAPvqqzFYvQFLGVJUJSh9kwrJpCyvAk4GdH4',
  },
  {
    name: 'Marcus Thorne',
    role: 'Principal Architect',
    company: 'Oracle SCM Cloud',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmDF5S5X264x1Ko4pg9Hruyo9ufcgvxyJzqO3qat8tuA97xbdRmSQBQbsjuZY3HJEPTZERKs_CSZ4fJfBTECa40vM4uJQCk9qz_FBFfzqDPAoWukXcZ24fdV85NPZtgMbYL5EantNon6T_-0IRDt2LIQdTUwEc6r1gWecEPQzy1NgSjGOqmvnePbn54dbHCKYnllFgVQpxuZw844ra9pHQY9CihVPQEHwR9wpuGA7sUsStEjcrhklE3jyA_vjTdIj-cqhdfeV5aW8',
  },
  {
    name: 'Linda Zhao',
    role: 'Global Ops Lead',
    company: 'Accelalpha',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuIavMHf1PFE4hk3BkD9JU1oRafYGnJV5R9oXhR-3M8H7jukPGxsBsBPRwW8Iazl375By8VnLFDu5UzKPPki-aeNHo6EKrLCU-XRVSPhYITAHtM8YXWK4rkWhh6UYYAwPlGZ4YqjiwKG3mhfF0hjbwxLJzwkxzimgLFvp7klNOYuXvYU78P4QY7aSEoAk3QdfkBA6ViIAszTbxX_3hbfaRpPKTDeyBcfoTEGkCIIplno45JjTqlN8nGTisO1eA8x_14gGm79LfWmg',
  },
  {
    name: 'Omar Sharif',
    role: 'Logistics Analyst',
    company: 'Regional Port Authority',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnI4_qEksv7S4BaDGPyDGtFio6ORUIrxlumXwQ6CfWYZ85YL6O_jaWb0ZxWPlkeF4pGZweHGFCa1f0As0KL1gubRAOwqOlytHxrw0k141ajS6Y74XQaiIFN0MXlNzBWv5zcamQ1Ts2gNmnFsr1sQNDC8pEzJmZL54i9uTwlt3w1zVmi6B0MWWZs4cG5ciub9U0JTYc2WyzwKzr2Dwx5BE2SQb4VeVhOMTF3LtREEKAa8fh8QdE05p92IIwCeZzglp9WHmhOXD4_vg',
  },
];

function SpeakerCard({ name, role, company, img }) {
  return (
    <div className="glass-card p-6 rounded-2xl text-center group">
      <div className="relative w-32 h-32 mx-auto mb-6">
        <div className="absolute inset-0 rounded-full border-2 border-primary border-dashed group-hover:rotate-180 transition-transform duration-1000" />
        <img
          className="w-full h-full object-cover rounded-full p-2"
          src={img}
          alt={`Portrait of ${name}`}
        />
      </div>
      <h4 className="font-headline-md text-headline-md text-on-surface mb-1">{name}</h4>
      <p className="text-primary font-label-bold uppercase text-[12px] mb-2">{role}</p>
      <p className="text-secondary text-sm">{company}</p>
    </div>
  );
}

export default function Speakers() {
  return (
    <section className="py-section-padding bg-surface-container-low" id="speakers">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">World-Class Visionaries</h2>
            <p className="text-secondary font-body-lg">
              Engage with 50+ speakers from across the globe, including Chief Supply Chain Officers and digital transformation pioneers.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="Previous">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="Next">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
          {speakers.map((s) => (
            <SpeakerCard key={s.name} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
