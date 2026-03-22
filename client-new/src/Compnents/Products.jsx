import { Helmet } from "react-helmet-async";


const Products = () => {
    const arr = [1,2,3,4,5]
  return (
    <>
<Helmet>
  <title>Products</title>
</Helmet>

    <h1 className=" px-16 pt-4 text-3xl font-extrabold">Products</h1>
    <section className="w-full grid grid-cols-4 px-16 justify-items-center gap-6 py-6">
      {
        arr.map((course,index)=>{
            return(
                <div key={index} className="card bg-base-100  shadow-sm">
        <figure>
          <img
            src="https://images.pexels.com/photos/2085832/pexels-photo-2085832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title alegreya text-2xl">Robo War</h2>
          <p className="montserrat">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary nunito text-lg">Read more</button>
          </div>
        </div>
      </div>
            )
        })
      }
    </section>
    </>
  );
};

export default Products;
