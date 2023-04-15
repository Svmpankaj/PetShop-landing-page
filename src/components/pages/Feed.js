import React from 'react'

function Feed() {
    return (
        <>
            <div className='container my-2' style={{ display: 'flex' }}>
                <div className="card" style={{ width: '400px' }}>
                    <div className="looking-forN white-bgN pl-3 pt-3 pb-3 pr-3 mx-4">
                        <h5 className="d-block">I'm Looking</h5>  <hr />
                        <a href="/" style={{ textDecoration: 'none' }}><span className="d-block" >For Buying</span></a> <hr />
                        <a href="/" style={{ textDecoration: 'none' }}><span className="d-block" >For Mating</span></a> <hr />
                        <a href="/" style={{ textDecoration: 'none' }}><span className="d-block" >For Adoption</span></a> <hr />
                    </div>

                    <div className="looking-forN white-bgN pl-3 pt-3 pb-3 pr-3 mx-4">
                        <h5 className="d-block">Pet Category</h5>  <hr />
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                Dogs
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                Cats
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                Small Pets
                            </label>
                        </div>
                    </div>

                    <div className="looking-forN white-bgN pl-3 pt-3 pb-3 pr-3 mx-4">
                        <h5 className="d-block">Sort By</h5>  <hr />
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                Price Low to High
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                Price High to Low
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                Age Low to High
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                Age High to Low
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                What's New
                            </label>
                        </div>
                    </div>

                    <div className="looking-forN white-bgN pl-3 pt-3 pb-3 pr-3 mx-4">
                        <h5 className="d-block">Gender</h5>  <hr />
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                Male
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                Female
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                Any
                            </label>
                        </div>
                    </div>

                    <div className="looking-forN white-bgN pl-3 pt-3 pb-3 pr-3 mx-4">
                        <h5 className="d-block">Puppy Quality</h5>  <hr />
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                Pet Quality
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                KCI Registered
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                Champion Bloodline
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                All
                            </label>
                        </div>
                    </div>

                    <div className="looking-forN white-bgN pl-3 pt-3 pb-3 pr-3 mx-4">
                        <h5 className="d-block">Puppy Quality</h5>  <hr />
                        <input type="range" className="form-range" id="customRange1" style={{ color: 'red' }} />
                        <div>
                            <p>Your Budget &#8377; 64520 </p>
                        </div>
                    </div>

                    <div className="looking-forN white-bgN pl-3 pt-3 pb-3 pr-3 mx-4">
                        <h5 className="d-block">Most Popular Breeds</h5>  <hr />
                        <ul>
                            <li>Shih Tzu (185)</li>
                            <li>Labrador Retriever (176)</li>
                            <li>Siberian Husky (162)</li>
                            <li>Golden Retriever (147)</li>
                            <li>German Shepherd (117)</li>
                            <li>Beagle (97)</li>
                            <li>Poodle (86)</li>
                            <li>Maltese ( 75)</li>
                            <li>Rottweiler (72)</li>
                            <li>Pembroke Welsh Corgi (58)</li>
                        </ul>

                    </div>

                </div>

                <div className="container mx-4" style={{ background: '#fff' }}>
                    <div>
                        <span>
                            <a href="/home">Home</a>>Dogs for sale
                        </span>
                        <h1 id="h4Heading">Dogs For Sale</h1>
                        <div class="d-flex align-items-center">
                            <span id="spnCounts">2109 Result Found</span>&nbsp;
                        </div>
                        <p>Buy Health-certified dogs and puppies online in India for sale, <a href="/dogs-for-sale">Available Dog breeds</a> like Labrador, German Shepherd, Golden Retriever, Shih Tzu, Siberian Husky, Poodle, and Maltipoo. <span id="dots">...</span>  <span id="more"> The most popular species are available in India, <a href="dogs/labrador-retriever-puppies-for-sale">Labrador Retriever</a> (Rs. 12 K - 80 K ), <a href="dogs/poodle-puppies-for-sale">Poodle</a> (Rs. 1.10 Lakh - 2.90 Lakh), <a href="dogs/maltipoo-puppies-for-sale">Maltipoo</a> (Rs. 1.05 Lakh - 2.10 Lakh), <a href="dogs/siberian-husky-puppies-for-sale">Siberian Husky</a> (Rs. 25 K - 1 Lakh), <a href="dogs/shih-tzu-puppies-for-sale">Shih Tzu</a> (Rs. 20 K - 80 K). Newborn puppy prices start from Rs 12,000 in India. To know more about puppy prices, photos, videos, reviews, and other details, please select your desired breed from the list below. Also, <b>7597972222</b>, call now and check the dog's valuation on Mr n Mrs Pet. </span> <input type="button" class="read-more" onclick="myFunction()" id="myBtn" value="Read More" /></p>

                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="./images/pic2.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title">Rottweiler</h4>
                            <h5 className="card-title">Rottweiler</h5>
                            <p className="card-text">Rottweiler Puppies for sale in Guntur at best price.</p>
                            <a href="/" className="btn btn-primary">Book Now</a>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Feed
