import React from "react";
const site_footer = {
    backgroundColor:"#7c4b44",
    padding:"45px 0 20px",
    fontSize:"15px",
    lineheight:"24px",
    color:"white",
    marginTop:"80px"
}
const footer_links = {
  paddingLeft:"0",
  listStyle:"none",
  textDecoration:"none",
  listStyleType:"none",
  
}


const Footer = () => {
  return (
    <div>
      <footer style={{...site_footer}}>
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h3 style={{fontWeight:"bold"}}>About</h3>
              <p class="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odit in provident magnam aspernatur omnis fugit exercitationem, qui dolor eius obcaecati beatae iure debitis id quisquam, eveniet quam. Repellendus dolores possimus, hic explicabo ducimus earum reiciendis quam sint. Soluta sequi possimus voluptates expedita praesentium reprehenderit, sint cupiditate neque perspiciatis odit distinctio facere rerum provident necessitatibus natus nostrum quasi molestiae numquam!
              </p>
            </div>

            <div class="col-xs-6 col-md-3" >
              <h5>Brand</h5>
              <ul style={{...footer_links}} >
                <li >
                  <a href="http://scanfcode.com/category/c-language/" style={{textDecoration:"none",color:"white"}}>Nike</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/front-end-development/" style={{textDecoration:"none",color:"white"}}>
                    Adidas
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/back-end-development/" style={{textDecoration:"none",color:"white"}}>
                    Puma
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/java-programming-language/" style={{textDecoration:"none",color:"white"}}>
                    Zara
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/android/" style={{textDecoration:"none",color:"white"}}>Gucci</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/templates/" style={{textDecoration:"none",color:"white"}}>
                    Praga
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul style={footer_links}>
                <li>
                  <a href="http://scanfcode.com/about/" style={{textDecoration:"none",color:"white"}}>About Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contact/" style={{textDecoration:"none",color:"white"}}>Contact Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contribute-at-scanfcode/" style={{textDecoration:"none",color:"white"}}>
                    Contribute
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/privacy-policy/" style={{textDecoration:"none",color:"white"}}>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/sitemap/" style={{textDecoration:"none",color:"white"}}>Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div class="container" style={{color:"white"}}>
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; 2022 All Rights Reserved by
                <a href="/" style={{textDecoration:"none",color:"white",fontWeight:"bold"}}> Pyson </a>.
              </p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons" style={{listStyleType:"none"}}>
                <li >
                  <a class="facebook" href="/" style={{color:"white"}}>
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a class="twitter" href="/" style={{color:"white"}}>
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a class="dribbble" href="/" style={{color:"white"}}>
                    <i class="fa fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a class="linkedin" href="/" style={{color:"white"}}>
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
