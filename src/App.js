function ProductCards({ products = [] }) {
  const card = {
    border: "1px solid #e5e7eb",
    borderRadius: 14,
    padding: 16,
    width: 260,
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  
  };

  const imgStyle = {
    width: 64,
    height: 64,
    borderRadius: "50%",
    objectFit: "cover",
    display: "block",
    margin: "0 auto 10px",
    border: "2px solid #f1f5f9"
  };

  const row = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "auto"
  };

  const btn = {
    border: "none",
    padding: "6px 14px",
    borderRadius: 8,
    background: "#22c55e",
    color: "#000",
    cursor: "pointer",
    fontWeight: 600
  };

  return (
    <div style={{ display: "flex", gap: 18, justifyContent: "center", flexWrap: "wrap", paddingTop: 24 }}>
      {products.slice(0, 3).map((p, i) => (
        <div key={i} style={card}>
          <img src={p.image} alt={p.name} style={imgStyle} />
          <h3 style={{ margin: "6px 0 4px", fontSize: 20 }}>{p.name}</h3>
          <p style={{ color: "#6b7280", fontSize: 14, minHeight: 34 }}>{p.description}</p>
          <div style={row}>
            <span style={{ fontWeight: 800, fontSize: 16 }}>R${Number(p.price).toFixed(2)}</span>
            <button style={btn} onClick={() => alert(`Added: ${p.name}`)}>Add</button>
          </div>
        </div>
      ))}
    </div>
  );
}

function App() {
  const products = [
    {
      name: "Pizza de calabresa com cebola caramelizada",
      description: "Pizza G, com molho de tomate, queijo mussarela, calabresa e cebola caramelizada.",
      price: 70.00,
      image: "https://uploads.metroimg.com/wp-content/uploads/2021/12/14161021/Calabresa-Caramelizada-com-molho-de-tomate-mucarela-linguica-calabresa-fatiada-cebola-caramelizada-azeitonas-pretas-e-oregano.jpeg"
    },
    {
      name: "Batata frita com cheedar e bacon",
      description: "Porção média de batata frita, coberta com queijo cheddar e bacon fatiado.",
      price: 15.00,
      image: "https://softpig.com.br/wp-content/uploads/2023/10/Batata-frita-com-cheddar-e-bacon-Receita-softpig.jpg"
    },
    {
      name: "Morango do Amor",
      description: "Morango coberto de brigadeiro branco e calda caramelizada.",
      price: 20.00,
      image: "https://canaldareceita.com.br/wp-content/uploads/2025/08/Design-sem-nome-3.webp"
    }
  ];

   return (
    <div style={{ padding: 24, backgroundColor: "#000", minHeight: "100vh" }}>
      <h1 style={{ color: "#fff", textAlign: "center" }}>🍔 Cardápio</h1>
      <ProductCards products={products} />
    </div>
  );
}

export default App;
