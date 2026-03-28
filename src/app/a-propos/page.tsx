export default function AProposPage() {
  return (
    <div style={{ paddingTop: "96px" }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block bg-[#E8F5ED] text-[#1B7A3E] text-sm font-semibold px-4 py-2 rounded-full mb-6">
          À PROPOS
        </span>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Deux passionnés,
          <br />
          <span className="text-[#1B7A3E]">une vision digitale.</span>
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
          Venerti est fondée par Amine et Youness, deux entrepreneurs marocains de 20 ans 
          passionnés par le web, le design et la technologie. Notre mission : aider les 
          entreprises marocaines à grandir en ligne avec des sites web qui convertissent vraiment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { title: "Notre Mission", desc: "Aider chaque entrepreneur marocain à avoir une présence digitale professionnelle, accessible et performante." },
            { title: "Notre Vision", desc: "Devenir l'agence web de référence au Maroc et en Afrique francophone d'ici 2028." },
            { title: "Nos Valeurs", desc: "Qualité, transparence, respect des délais et support humain. On livre ce qu'on promet." },
          ].map((item) => (
            <div key={item.title} className="bg-[#F8FDF9] rounded-2xl p-8 border border-[#E8F5ED] text-left">
              <h3 className="font-bold text-gray-900 text-lg mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}