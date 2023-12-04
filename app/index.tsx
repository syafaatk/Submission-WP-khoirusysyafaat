import React from 'react';

interface Berita {
  id: number;
  judul: string;
  isi: string;
  // Add other properties as needed
}

interface HomeProps {
  beritas: Berita[];
}

const Home: React.FC<HomeProps> = ({ beritas }) => {
  return (
    <div>
      <h1>Latest News</h1>
      <ul>
        {beritas.map((berita) => (
          <li key={berita.id}>
            <h2>{berita.judul}</h2>
            <p>{berita.isi}</p>
            {/* Add rendering for other information as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  // Call the API to get news data
  const res = await fetch('https://diskopukm.palembang.go.id/api/beritas?sort[0]=tanggal%3Adesc&pagination[pageSize]=9&populate=*');
  const data: Berita[] = await res.json();

  // Send data to the component as a prop
  return {
    props: {
      beritas: data,
    },
  };
}

export default Home;