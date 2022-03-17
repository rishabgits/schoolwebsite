class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` 
    
        <a href='index.html'>Home</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
            <a href='profile.html'>Profile</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
            <a href='syllabus.html'>syllabus</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
            <a href='gallery.html'>gallery</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
            <a href='contact.html'>contacts</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
           
            
        `

    }
}
customElements.define('my-header', MyHeader)


class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="sack"> 
        <div class="row">
        <div class="col-1"></div>
        <div class="col-3">
        <BR>
        <h4>SUSHIL.K C</h4>
        <br>
        <P>I  am  engineering student 
         i am works in web desing and study</P>
        </div>
        <div class="col-3">
        <br>
        <h4>USEFUL LINKS</h4>
        <br>
        <P>HOME<br>
        NEWS<br>
        SYLLABOUS<br>
        GALLERY<br>
        CONTACTS</P>
        </div>
        <div class="col-3">
        <br>
        <h5>PROGRAMMING COURSES</h5>
        <br>
        <P>HTML PROGRAMMING<br>
        CSS PROGRAMMING<br>
        JAVA SCRIPT PROGRAMMING<br>
        C PROGRAMMING</P>
        </div>
        

        
        </div>

       

       
        
        `
        

    }
}
customElements.define('my-footer', MyFooter)