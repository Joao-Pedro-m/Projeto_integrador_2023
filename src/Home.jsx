import Header from "./Components/Header.jsx"
import Products from "./Components/Products.jsx";
export default function Home() {
  return(
    <>
    <div className="w-full h-[80%]">
      <Header />
      <div className="flex justify-center h-full container mx-auto my-8">
        <div>
            {/*<p className="text-center text-2xl shopping-cart text-[#ffffff]">*/}
            {/*  Bem-vindo a belos cachos. Aqui você pode encontrar o creme perfeito para seu cabelo cacheado, ondulado ou crespo.*/}
            {/*</p>*/}
          <Products />
        </div>
      </div>
    </div>
    </>
  )
}