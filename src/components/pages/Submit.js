import React from 'react'

function Submit() {
    return (
        <>
            <section className='container my-3'>
                <div className="card">
                    <h2 style={{ marginLeft: '20px' }}>Still not found what your are looking for?</h2>
                    <p style={{ marginLeft: '20px' }}>Submit Your Enquiry</p>
                    <div className="container-sm" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className="mb-2 mx-2" style={{ width: '500px' }}>
                            <input className="form-control form-control-lg" type="text" placeholder="Name" aria-label=".form-control-lg example" />
                        </div>
                        <div className="mb-2 mx-2 " style={{ width: '500px' }}>
                            <input className="form-control form-control-lg" type="text" placeholder="Contact No" aria-label=".form-control-lg example" />
                        </div>
                    </div>

                    <div className="container-sm" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className="mb-2 mx-2" style={{ width: '500px' }}>
                            <input className="form-control form-control-lg" type="text" placeholder="Type Your Email" aria-label=".form-control-lg example" />
                        </div>
                        <div className="mb-2 mx-2" style={{ width: '500px' }}>
                            <select className="form-select form-select-lg" aria-label="Default select example">
                                <option selected>Select Requirement</option>
                                <option value="1">Pet Booking</option>
                                <option value="2">Sell Your Pet</option>
                            </select>
                        </div>

                    </div>

                    <div className="container-sm" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className="mb-2 mx-2" style={{ width: '500px' }}>
                            <select className="form-select form-select-lg" aria-label="Default select example">
                                <option selected>Select Pet Type</option>
                                <option value="1">Dog</option>
                                <option value="2">Cat</option>
                                <option value="2">Small Pet Type</option>
                            </select>
                        </div>
                        <div className="mb-2 mx-2" style={{ width: '500px' }}>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Breed</option>
                                <option value="1">Affenpinscher</option>
                                <option value="2">Afghan Hound</option>
                                <option value="3">Airedale Terrier</option>
                                <option value="4">Akita</option>
                                <option value="297">Alabai</option>
                                <option value="5">Alapaha Blue Blood Bulldog</option>
                                <option value="6">Alaskan Klee Kai</option>
                                <option value="7">Alaskan Malamute</option>
                                <option value="223">American Akita</option>
                                <option value="8">American Bulldog</option>
                                <option value="218">American Bully</option>
                                <option value="224">American Cocker Spaniel</option>
                                <option value="227">American Doberman</option>
                                <option value="9">American Eskimo</option>
                                <option value="10">American Hairless Terrier</option>
                                <option value="222">American Mastiff</option>
                                <option value="225">American Pit Bull Terrier</option>
                                <option value="11">American Staffordshire Terrier</option>
                                <option value="12">American Tundra Shepherd</option>
                                <option value="13">American Water Spaniel</option>
                                <option value="14">Anatolian Shepherds</option>
                                <option value="15">Aussiedoodle</option>
                                <option value="16">Australian Cattle Dog</option>
                                <option value="228">Australian Kelpie</option>
                                <option value="226">Australian Retriever</option>
                                <option value="17">Australian Shepherd</option>
                                <option value="18">Australian Terrier</option>
                                <option value="19">Basenji</option>
                                <option value="20">Basset Hound</option>
                                <option value="21">Beabull</option>
                                <option value="22">Beagle</option>
                                <option value="230">Beaglier</option>
                                <option value="23">Bearded Collie</option>
                                <option value="231">Bedlington Terrier</option>
                                <option value="24">Belgian Malinois</option>
                                <option value="25">Belgian Shepherd</option>
                                <option value="26">Belgian Tervuren</option>
                                <option value="27">Berger Picard</option>
                                <option value="28">Bernaswiss Mountain Dog</option>
                                <option value="29">Bernedoodle</option>
                                <option value="30">Bernese Mountain Dog</option>
                                <option value="31">Bichon Frise</option>
                                <option value="32">Bichonpoo</option>
                                <option value="33">Biewer Terrier</option>
                                <option value="34">Black and Tan Coonhound</option>
                                <option value="35">Black Mouth Cur</option>
                                <option value="36">Black Russian Terrier</option>
                                <option value="37">Bloodhound</option>
                                <option value="38">Boerboel</option>
                                <option value="39">Bolognese</option>
                                <option value="229">Boo</option>
                                <option value="40">Border Collie</option>
                                <option value="41">Border Terrier</option>
                                <option value="42">Borkie</option>
                                <option value="232">Borzoi</option>
                                <option value="43">Boston Terrier</option>
                                <option value="44">Bouvier des Flandres</option>
                                <option value="45">Boxer</option>
                                <option value="46">Boykin Spaniel</option>
                                <option value="233">Briard</option>
                                <option value="235">British Bulldog</option>
                                <option value="47">Brittany Spaniel</option>
                                <option value="48">Brussels Griffon</option>
                                <option value="49">Bull Terrier</option>
                                <option value="50">Bulldog</option>
                                <option value="51">Bullmastiff</option>
                                <option value="234">Bully Kutta</option>
                                <option value="52">Cairn Terrier</option>
                                <option value="53">Cane Corso</option>
                                <option value="54">Cardigan Welsh Corgi</option>
                                <option value="55">Catahoula</option>
                                <option value="296">Caucasian Shepherd</option>
                                <option value="56">Cavachon</option>
                                <option value="236">Cavador</option>
                                <option value="57">Cavalier King Charles Spaniel</option>
                                <option value="58">Cavapom</option>
                                <option value="59">Cavapoo</option>
                                <option value="237">Cesky Terrier</option>
                                <option value="238">Cheagle</option>
                                <option value="60">Chesapeake Bay Retriever</option>
                                <option value="61">Chihuahua</option>
                                <option value="62">Chinese Crested</option>
                                <option value="63">Chinese SharPei</option>
                                <option value="64">Chiweenie</option>
                                <option value="65">Chorkie</option>
                                <option value="66">Chow Chow</option>
                                <option value="67">Chug</option>
                                <option value="68">Cirneco dellEtna</option>
                                <option value="69">Clumber Spaniel</option>
                                <option value="70">Cockalier</option>
                                <option value="71">Cockapoo</option>
                                <option value="72">Cocker Spaniel</option>
                                <option value="73">Collie</option>
                                <option value="74">Coonhound</option>
                                <option value="239">Corgidor</option>
                                <option value="240">Corman Shepherd</option>
                                <option value="75">Coton de Tulear</option>
                                <option value="221">Culture Pomeranian</option>
                                <option value="76">Dachshund</option>
                                <option value="77">Dalmatian</option>
                                <option value="78">Dandie Dinmont</option>
                                <option value="79">Designer Breeds</option>
                                <option value="219">Doberman</option>
                                <option value="80">Doberman Pinscher</option>
                                <option value="81">Dogo Argentino</option>
                                <option value="82">Dogue de Bordeaux</option>
                                <option value="83">Double Doodle</option>
                                <option value="84">Dutch Shepherd</option>
                                <option value="242">English Bulldog</option>
                                <option value="85">English Cocker Spaniel</option>
                                <option value="243">English Mastiff</option>
                                <option value="86">English Setter</option>
                                <option value="87">English Shepherd</option>
                                <option value="88">English Springer Spaniel</option>
                                <option value="89">English Toy Spaniel</option>
                                <option value="90">Entlebucher Mountain Dog</option>
                                <option value="241">European Doberman</option>
                                <option value="91">Fila Brasileiro</option>
                                <option value="92">Flat Coated Retriever</option>
                                <option value="93">Fox Terrier Smooth</option>
                                <option value="94">Fox Terrier Toy</option>
                                <option value="95">Fox Terrier Wire</option>
                                <option value="96">French Bulldog</option>
                                <option value="245">French Mastiff</option>
                                <option value="244">French Spaniel</option>
                                <option value="97">Frenchton</option>
                                <option value="246">German Pinscher</option>
                                <option value="98">German Shepherd</option>
                                <option value="99">German Shorthaired Pointer</option>
                                <option value="247">German Spitz</option>
                                <option value="248">Goberian</option>
                                <option value="100">Golden Cocker Retriever</option>
                                <option value="101">Golden Retriever</option>
                                <option value="249">Golden Shepherd</option>
                                <option value="102">Goldendoodle</option>
                                <option value="103">Gordon Setter</option>
                                <option value="104">Great Dane</option>
                                <option value="105">Great Pyrenees</option>
                                <option value="106">Greater Swiss Mountain Dog</option>
                                <option value="107">Greyhound</option>
                                <option value="108">Harlequin Pinscher</option>
                                <option value="109">Havachon</option>
                                <option value="110">Havanese</option>
                                <option value="111">Havapoo</option>
                                <option value="214">Indian Breed</option>
                                <option value="250">Indian Mastiff</option>
                                <option value="251">Indian Spitz</option>
                                <option value="112">Irish Setter</option>
                                <option value="113">Irish Terrier</option>
                                <option value="114">Irish Wolfhound</option>
                                <option value="115">Italian Greyhound</option>
                                <option value="116">Jack Russell Terrier</option>
                                <option value="253">Japanese Akita</option>
                                <option value="117">Japanese Chin</option>
                                <option value="118">Japanese Spitz</option>
                                <option value="252">Japanese Terrier</option>
                                <option value="119">Keeshond</option>
                                <option value="120">Kerry Blue Terrier</option>
                                <option value="121">Komondor</option>
                                <option value="122">Kuvasz</option>
                                <option value="123">Labradoodle</option>
                                <option value="124">Labrador Retriever</option>
                                <option value="125">Lakeland Terrier</option>
                                <option value="126">Leonberger</option>
                                <option value="127">Leondoodle</option>
                                <option value="128">Lhasa Apso</option>
                                <option value="129">Lhasapoo</option>
                                <option value="130">Mal Shi</option>
                                <option value="131">Maltese</option>
                                <option value="132">Maltichon</option>
                                <option value="133">Maltipoo</option>
                                <option value="134">Mastiff</option>
                                <option value="135">Mi Ki</option>
                                <option value="136">Miniature American Shepherd</option>
                                <option value="137">Miniature Australian Shepherd</option>
                                <option value="138">Miniature Pinscher</option>
                                <option value="254">Miniature Schnauzer</option>
                                <option value="139">Morkie</option>
                                <option value="140">Mountain Cur</option>
                                <option value="255">Mudhol hound</option>
                                <option value="141">Neapolitan Mastiff</option>
                                <option value="142">Newfoundland</option>
                                <option value="143">Norfolk Terrier</option>
                                <option value="144">Norwegian Buhund</option>
                                <option value="145">Norwegian Elkhound</option>
                                <option value="146">Norwich Terrier</option>
                                <option value="147">Nova Scotia Duck Tolling Retriever</option>
                                <option value="148">Old English Sheepdog</option>
                                <option value="149">Olde English Bulldogge</option>
                                <option value="150">Ori Pei</option>
                                <option value="151">Papillon</option>
                                <option value="152">Parson Russell Terrier</option>
                                <option value="256">Pashmi Hound</option>
                                <option value="153">Peekapoo</option>
                                <option value="154">Pekingese</option>
                                <option value="155">Pembroke Welsh Corgi</option>
                                <option value="156">Petit Basset Griffon Vendeen</option>
                                <option value="220">Pitbull</option>
                                <option value="157">Pointer</option>
                                <option value="158">Pomapoo</option>
                                <option value="159">Pomeranian</option>
                                <option value="160">Pomsky</option>
                                <option value="161">Poodle</option>
                                <option value="162">Portuguese Water Dog</option>
                                <option value="163">Presa Canario</option>
                                <option value="164">Pug</option>
                                <option value="165">Puggle</option>
                                <option value="258">Rajapalayam</option>
                                <option value="259">Rampur Hound</option>
                                <option value="166">Rat Terrier</option>
                                <option value="167">Redbone Coonhound</option>
                                <option value="168">Rhodesian Ridgeback</option>
                                <option value="169">Rottweiler</option>
                                <option value="257">Rough Collie</option>
                                <option value="170">Saint Bernard</option>
                                <option value="171">Saluki</option>
                                <option value="172">Samoyed</option>
                                <option value="173">Schipperke</option>
                                <option value="174">Schnauzer</option>
                                <option value="175">Schnoodle</option>
                                <option value="176">Schnorkie</option>
                                <option value="177">Scottish Terrier</option>
                                <option value="178">Sheepadoodle</option>
                                <option value="179">Shepadoodle</option>
                                <option value="180">Shetland Sheepdog</option>
                                <option value="181">Shiba Inu</option>
                                <option value="182">Shichon</option>
                                <option value="183">Shiffon</option>
                                <option value="184">Shih Tzu</option>
                                <option value="185">Shihpoo</option>
                                <option value="186">Shorkie</option>
                                <option value="187">Siberian Husky</option>
                                <option value="188">Silky Terrier</option>
                                <option value="189">Skye Terrier</option>
                                <option value="261">Smooth Collie</option>
                                <option value="190">Soft Coated Wheaten Terrier</option>
                                <option value="260">Spanish Mastiff</option>
                                <option value="191">Staffordshire Bull Terrier</option>
                                <option value="264">Teacup Pomeranian</option>
                                <option value="192">Tibetan Mastiff</option>
                                <option value="193">Tibetan Spaniel</option>
                                <option value="194">Tibetan Terrier</option>
                                <option value="195">Tosa</option>
                                <option value="196">Toy Australian Shepherd</option>
                                <option value="268">Toy Fox Terrier</option>
                                <option value="276">Toy Pom</option>
                                <option value="263">Toy Pomeranian</option>
                                <option value="266">Valley Bulldog</option>
                                <option value="197">Victorian Bulldog</option>
                                <option value="198">Vizsla</option>
                                <option value="199">Weimaraner</option>
                                <option value="200">Welsh Terrier</option>
                                <option value="201">West Highland White Terrier</option>
                                <option value="202">Whippet</option>
                                <option value="267">Wire Hair Fox Terrier</option>
                                <option value="203">Yorkiepoo</option>
                                <option value="204">Yorkshire Terrier</option>

                            </select>
                        </div>

                    </div>
                    <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className="mb-2 mx-2" style={{ width: '500px' }} >
                            <select className="form-select form-select-lg" aria-label="Default select example">
                                <option selected>-Select-</option>
                                <option value="1">Andaman and Nicobar Islands</option>
                                <option value="2">Andhra Pradesh</option>
                                <option value="3">Arunachal Pradesh</option>
                                <option value="4">Assam</option>
                                <option value="5">Bihar</option>
                                <option value="6">Chandigarh</option>
                                <option value="7">Chhattisgarh</option>
                                <option value="8">Dadra and Nagar Haveli</option>
                                <option value="9">Daman and Diu</option>
                                <option value="10">Delhi NCR</option>
                                <option value="11">Goa</option>
                                <option value="12">Gujarat</option>
                                <option value="13">Haryana</option>
                                <option value="14">Himachal</option>
                                <option value="15">Jammu and Kashmir</option>
                                <option value="16">Jharkhand</option>
                                <option value="17">Karnataka</option>
                                <option value="18">Kerala</option>
                                <option value="19">Lakshadweep</option>
                                <option value="20">Madhya Pradesh</option>
                                <option value="21">Maharashtra</option>
                                <option value="22">Manipur</option>
                                <option value="23">Meghalaya</option>
                                <option value="24">Mizoram</option>
                                <option value="25">Nagaland</option>
                                <option value="26">Odisha</option>
                                <option value="27">Puducherry</option>
                                <option value="28">Punjab</option>
                                <option value="29">Rajasthan</option>
                                <option value="30">Sikkim</option>
                                <option value="31">Tamil Nadu</option>
                                <option value="32">Telangana</option>
                                <option value="33">Tripura</option>
                                <option value="34">Uttar Pradesh</option>
                                <option value="35">Uttarakhand</option>
                                <option value="36">West Bengal</option>
                            </select>
                        </div>
                        <div className="mb-2 mx-2" style={{ width: '500px' }}>
                            <select className="form-select form-select-lg" aria-label="Default select example">
                                <option selected>Select City</option>
                                <option value="Ajmer">Ajmer</option>
                                <option value="Alwar">Alwar</option>
                                <option value="Banswara">Banswara</option>
                                <option value="Baran">Baran</option>
                                <option value="Barmer">Barmer</option>
                                <option value="Behror">Behror</option>
                                <option value="Bharatpur">Bharatpur</option>
                                <option value="Bhilwara">Bhilwara</option>
                                <option value="Bhinmal">Bhinmal</option>
                                <option value="Bikaner">Bikaner</option>
                                <option value="Bundi">Bundi</option>
                                <option value="Chittorgarh">Chittorgarh</option>
                                <option value="Churu">Churu</option>
                                <option value="Dausa">Dausa</option>
                                <option value="Dholpur">Dholpur</option>
                                <option value="Didwana">Didwana</option>
                                <option value="Dungarpur">Dungarpur</option>
                                <option value="Hanumangarh">Hanumangarh</option>
                                <option value="Jaipur">Jaipur</option>
                                <option value="Jaisalmer">Jaisalmer</option>
                                <option value="Jalore">Jalore</option>
                                <option value="Jhalawar">Jhalawar</option>
                                <option value="Jhunjhunu">Jhunjhunu</option>
                                <option value="Jodhpur">Jodhpur</option>
                                <option value="Karauli">Karauli</option>
                                <option value="Kota">Kota</option>
                                <option value="Kotputli">Kotputli</option>
                                <option value="Nagaur">Nagaur</option>
                                <option value="Nawalgarh">Nawalgarh</option>
                                <option value="Pali">Pali</option>
                                <option value="Pilani">Pilani</option>
                                <option value="Pratapgarh">Pratapgarh</option>
                                <option value="Rajsamand">Rajsamand</option>
                                <option value="Sawai madhopur">Sawai madhopur</option>
                                <option value="Sikar">Sikar</option>
                                <option value="Sirohi">Sirohi</option>
                                <option value="Sri ganganagar">Sri ganganagar</option>
                                <option value="Tonk">Tonk</option>
                                <option value="Udaipur">Udaipur</option>
                            </select >
                        </div>

                    </div>
                    <div className="container">
                        <div className="mb-3">
                            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Remark...' rows="3"></textarea>
                        </div>
                    </div>
                    <div className="d-grid mx-2 my-2">
                        <button className="btn btn-primary" type="button">Button</button>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Submit