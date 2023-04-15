import React from 'react'

function Alert() {
    return (
        <>
            {/* <div className="alert alert-light" role="alert">
                <div></div>
            </div> */}

            <section className="white_section">
                <div className="container">
                    <div className="reg_breeder_box">
                        <div className="media d-table d-xxl-flex d-xl-flex d-lg-flex d-md-flex align-items-center flex-wrap" id="embed_button">
                            <img className="align-self-center mr-3 img-respoonsive" src="assets/image/icons/breed_register.webp" alt="Mr n Mrs Pet" />
                            <div className="media-body">
                                <h4 className="mt-0">Are You A Breeder?</h4>
                                <p>It takes only a few clicks to connect with genuine pet lovers. Register Now!</p>
                            </div>
                            <span className="media_right_btn" onclick="hide_show_toggle()" id="add-pet">Add Your pet&nbsp;&nbsp; <i className="fa fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="gray_section ad-pets-none" id="divEm" style={{ display: "block" }}>
                <div className="container">
                    <div className="row mt-1">

                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 low_padding">
                            <a href="sign-up.aspx?prevpage=add-your-pet.aspx" name="List Your Pet For Sale" className="web_i_name web-clk-a">
                                <center className="whitebox">
                                    <h4>Add Your Pet For Sale</h4>
                                </center>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 low_padding">
                            <a href="sign-up.aspx?prevpage=add-your-pet-for-matting.aspx" name="List Your Pet For Mating" className="web_i_name web-clk-a">
                                <center className="whitebox">
                                    <h4>Add Your Pet For Mating</h4>
                                </center>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 low_padding">
                            <a href="sign-up.aspx?prevpage=add-your-pet-for-adoption.aspx" name="List Your Pet For Adoption" className="web_i_name web-clk-a">
                                <center className="whitebox">
                                    <h4>Add Your Pet For Adoption</h4>
                                </center>
                            </a>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Alert
