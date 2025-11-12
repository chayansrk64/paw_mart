import { useLoaderData } from "react-router";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const ListingDetails = () => {
 const listing = useLoaderData()
 console.log('listing details', listing);
    
    return (
        <div className="">
           
         {/* product details */}
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
                <div className='col-span-5 '>

                    <img className='w-full' src={listing.image} alt="" />
                    
                </div>
                <div className='col-span-7  p-4'>
                    <h3 className='text-3xl font-semibold my-3'>{listing.name}</h3>
                    <p className='text-xl font-semibold my-3'>${listing.price}</p>
                    <p>{listing.description}</p>
                    <p>{listing.location}</p>
                    <p>{listing.date}</p>


                    <button  className='btn btn-secondary '>I want buy this product</button>


                    {/* modal  */}
                    
                        <dialog  className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Give Seller Your Offered Price!</h3>
                            {/* form for bid */}
                            <form >
                                <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" name='name' className="input" readOnly  />
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" readOnly  />
                                <label className="label">Bid</label>
                                <input type="text" name='bid' className="input" placeholder="Your Bid" />
                                
                                <button className="btn btn-neutral mt-4">Place Your Bid</button>
                                </fieldset>
                            </form>

                            <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Cancel</button>
                            </form>
                            </div>
                        </div>
                        </dialog>


                     
                </div>
            </div>
        </div>
    );
};

export default ListingDetails;