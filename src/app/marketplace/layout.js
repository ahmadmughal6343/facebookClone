import Asidebar from "../../components/marketpage/asidebar";

export default function MarketplaceLayout({ children }) {
  
  return (
    <main className="pt-14 w-screen h-screen bg-[#eceafd]">
      <section className='grid grid-cols-[1fr_3fr] size-full'>
      <Asidebar />
       {children}
    </section>
     
    </main>
  );
}
