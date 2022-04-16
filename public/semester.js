const btn = document.querySelectorAll(".btn1");
const cont2 = document.querySelector(".cont2");

btn[0].style.backgroundColor = "#92FFD8";
cont2.innerHTML = `
<div class="box1">
    <h1 class="box1head">Courses</h1>
    <h2 class="box1headings">Theory</h2>
    <ul class="ulist">
        <li class="listing">Course 111</li>
        <li class="listing">Course 2</li>
        <li class="listing">Course 3</li>
        <li class="listing">Course 4</li>
        <li class="listing">Course 5</li>
        <li class="listing">Course 6</li>
        <li class="listing">Course 7</li>
    </ul>
    <h2 class="box1headings">Practical</h2>
    <ul class="ulist">
        <li class="listing"> Lab1</li>
        <li class="listing"> Lab2</li>
        <li class="listing"> Lab3</li>
    </ul>
</div>

<div class="box3">
    <div class="navbarnew">
        <ul class="navi">
            <li class="navilist">Details</li>
            <li class="navilist">Syllabus</li>
            <li class="navilist">Notes</li>
            <li class="navilist">Books</li>
            <li class="navilist">Previous Year</li>
        </ul>
    </div>
    <div class="box3main">
                    
                </div>
</div>
`

const listing = document.querySelectorAll(".listing");
const box3 = document.querySelector('.box3');
const box3main = document.querySelector(".box3main");
listing[0].style.color = "#92FFD8";
const navilist = document.querySelectorAll(".navilist");
navilist[0].style.color = "#92FFD8";
box3main.innerHTML = ``
for (let k = 0; k < 10; k++) {
    listing[k].addEventListener("click", () => {
        if (k == 0) {
            for (let j = 0; j < 10; j++) {
                if (k == j) {
                    listing[j].style.color = "#92FFD8";
                }
                else {
                    listing[j].style.color = "black"
                }
            }
            box3.innerHTML = `<div class="navbarnew">
            <ul class="navi">
                <li class="navilist">Details</li>
                <li class="navilist">Syllabus</li>
                <li class="navilist">Notes</li>
                <li class="navilist">Books</li>
                <li class="navilist">Previous Year</li>
            </ul>
        </div>
        <div class="box3main">
                        
                    </div>`
            const navilist = document.querySelectorAll(".navilist");
            navilist[0].style.color = "#92FFD8";

            for (let i = 0; i < 5; i++) {
                navilist[i].addEventListener("click", () => {
                    if (i == 0) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 1) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 2) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 3) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 4) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                })
            }
        }
        if (k == 1) {
            for (let j = 0; j < 10; j++) {
                if (k == j) {
                    listing[j].style.color = "#92FFD8";
                }
                else {
                    listing[j].style.color = "black"
                }
            }
            box3.innerHTML = `<div class="navbarnew">
            <ul class="navi">
                <li class="navilist">Details</li>
                <li class="navilist">Syllabus</li>
                <li class="navilist">Notes</li>
                <li class="navilist">Books</li>
                <li class="navilist">Previous Year</li>
            </ul>
        </div>
        <div class="box3main">
                        
                    </div>`
            const navilist = document.querySelectorAll(".navilist");
            navilist[0].style.color = "#92FFD8";
            for (let i = 0; i < 5; i++) {
                navilist[i].addEventListener("click", () => {
                    if (i == 0) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 1) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 2) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 3) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 4) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                })
            }
        }

        if (k == 2) {
            for (let j = 0; j < 10; j++) {
                if (k == j) {
                    listing[j].style.color = "#92FFD8";
                }
                else {
                    listing[j].style.color = "black"
                }
            }
            box3.innerHTML = `<div class="navbarnew">
            <ul class="navi">
                <li class="navilist">Details</li>
                <li class="navilist">Syllabus</li>
                <li class="navilist">Notes</li>
                <li class="navilist">Books</li>
                <li class="navilist">Previous Year</li>
            </ul>
        </div>
        <div class="box3main">
                        
                    </div>`
            const navilist = document.querySelectorAll(".navilist");
            navilist[0].style.color = "#92FFD8";
            for (let i = 0; i < 5; i++) {
                navilist[i].addEventListener("click", () => {
                    if (i == 0) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 1) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 2) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 3) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 4) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                })
            }
        }

        if (k == 3) {
            for (let j = 0; j < 10; j++) {
                if (k == j) {
                    listing[j].style.color = "#92FFD8";
                }
                else {
                    listing[j].style.color = "black"
                }
            }
            box3.innerHTML = `<div class="navbarnew">
            <ul class="navi">
                <li class="navilist">Details</li>
                <li class="navilist">Syllabus</li>
                <li class="navilist">Notes</li>
                <li class="navilist">Books</li>
                <li class="navilist">Previous Year</li>
            </ul>
        </div>
        <div class="box3main">
                        
                    </div>`
            const navilist = document.querySelectorAll(".navilist");
            navilist[0].style.color = "#92FFD8";
            for (let i = 0; i < 5; i++) {
                navilist[i].addEventListener("click", () => {
                    if (i == 0) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 1) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 2) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 3) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 4) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                })
            }
        }

        if (k == 4) {
            for (let j = 0; j < 10; j++) {
                if (k == j) {
                    listing[j].style.color = "#92FFD8";
                }
                else {
                    listing[j].style.color = "black"
                }
            }
            box3.innerHTML = `<div class="navbarnew">
            <ul class="navi">
                <li class="navilist">Details</li>
                <li class="navilist">Syllabus</li>
                <li class="navilist">Notes</li>
                <li class="navilist">Books</li>
                <li class="navilist">Previous Year</li>
            </ul>
        </div>
        <div class="box3main">
                        
                    </div>`
            const navilist = document.querySelectorAll(".navilist");
            navilist[0].style.color = "#92FFD8";
            for (let i = 0; i < 5; i++) {
                navilist[i].addEventListener("click", () => {
                    if (i == 0) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 1) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 2) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 3) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 4) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                })
            }
        }

        if (k == 5) {
            for (let j = 0; j < 10; j++) {
                if (k == j) {
                    listing[j].style.color = "#92FFD8";
                }
                else {
                    listing[j].style.color = "black"
                }
            }
            box3.innerHTML = `<div class="navbarnew">
            <ul class="navi">
                <li class="navilist">Details</li>
                <li class="navilist">Syllabus</li>
                <li class="navilist">Notes</li>
                <li class="navilist">Books</li>
                <li class="navilist">Previous Year</li>
            </ul>
        </div>
        <div class="box3main">
                        
                    </div>`
            const navilist = document.querySelectorAll(".navilist");
            navilist[0].style.color = "#92FFD8";
            for (let i = 0; i < 5; i++) {
                navilist[i].addEventListener("click", () => {
                    if (i == 0) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 1) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 2) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 3) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 4) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                })
            }
        }

        if (k == 6) {
            for (let j = 0; j < 10; j++) {
                if (k == j) {
                    listing[j].style.color = "#92FFD8";
                }
                else {
                    listing[j].style.color = "black"
                }
            }
            box3.innerHTML = `<div class="navbarnew">
            <ul class="navi">
                <li class="navilist">Details</li>
                <li class="navilist">Syllabus</li>
                <li class="navilist">Notes</li>
                <li class="navilist">Books</li>
                <li class="navilist">Previous Year</li>
            </ul>
        </div>
        <div class="box3main">
                        
                    </div>`
            const navilist = document.querySelectorAll(".navilist");
            navilist[0].style.color = "#92FFD8";
            for (let i = 0; i < 5; i++) {
                navilist[i].addEventListener("click", () => {
                    if (i == 0) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 1) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 2) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 3) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 4) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                })
            }
        }

        if (k == 7) {
            for (let j = 0; j < 10; j++) {
                if (k == j) {
                    listing[j].style.color = "#92FFD8";
                }
                else {
                    listing[j].style.color = "black"
                }
            }
            box3.innerHTML = `<div class="navbarnew">
            <ul class="navi">
                <li class="navilist">Details</li>
                <li class="navilist">Syllabus</li>
                <li class="navilist">Notes</li>
                <li class="navilist">Books</li>
                <li class="navilist">Previous Year</li>
            </ul>
        </div>
        <div class="box3main">
                        
                    </div>`
            const navilist = document.querySelectorAll(".navilist");
            navilist[0].style.color = "#92FFD8";
            for (let i = 0; i < 5; i++) {
                navilist[i].addEventListener("click", () => {
                    if (i == 0) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 1) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 2) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 3) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 4) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                })
            }
        }
        if (k == 8) {
            for (let j = 0; j < 10; j++) {
                if (k == j) {
                    listing[j].style.color = "#92FFD8";
                }
                else {
                    listing[j].style.color = "black"
                }
            }
            box3.innerHTML = `<div class="navbarnew">
            <ul class="navi">
                <li class="navilist">Details</li>
                <li class="navilist">Syllabus</li>
                <li class="navilist">Notes</li>
                <li class="navilist">Books</li>
                <li class="navilist">Previous Year</li>
            </ul>
        </div>
        <div class="box3main">
                        
                    </div>`
            const navilist = document.querySelectorAll(".navilist");
            navilist[0].style.color = "#92FFD8";
            for (let i = 0; i < 5; i++) {
                navilist[i].addEventListener("click", () => {
                    if (i == 0) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 1) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 2) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 3) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 4) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                })
            }
        }
        if (k == 9) {
            for (let j = 0; j < 10; j++) {
                if (k == j) {
                    listing[j].style.color = "#92FFD8";
                }
                else {
                    listing[j].style.color = "black"
                }
            }
            box3.innerHTML = `<div class="navbarnew">
            <ul class="navi">
                <li class="navilist">Details</li>
                <li class="navilist">Syllabus</li>
                <li class="navilist">Notes</li>
                <li class="navilist">Books</li>
                <li class="navilist">Previous Year</li>
            </ul>
        </div>
        <div class="box3main">
                        
                    </div>`
            const navilist = document.querySelectorAll(".navilist");
            navilist[0].style.color = "#92FFD8";
            for (let i = 0; i < 5; i++) {
                navilist[i].addEventListener("click", () => {
                    if (i == 0) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 1) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 2) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 3) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 4) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                })
            }
        }


    })
}
for (let i = 0; i < 5; i++) {
    navilist[i].addEventListener("click", () => {
        if (i == 0) {
            navilist[i].style.color = "#92FFD8";
            box3main.innerHTML = ``
            for (let j = 0; j < 5; j++) {
                if (i == j) {

                }
                else {
                    navilist[j].style.color = "white"
                }
            }
        }
        if (i == 1) {
            navilist[i].style.color = "#92FFD8";
            box3main.innerHTML = ``
            for (let j = 0; j < 5; j++) {
                if (i == j) {

                }
                else {
                    navilist[j].style.color = "white"
                }
            }
        }
        if (i == 2) {
            navilist[i].style.color = "#92FFD8";
            box3main.innerHTML = ``
            for (let j = 0; j < 5; j++) {
                if (i == j) {

                }
                else {
                    navilist[j].style.color = "white"
                }
            }
        }
        if (i == 3) {
            navilist[i].style.color = "#92FFD8";
            box3main.innerHTML = ``
            for (let j = 0; j < 5; j++) {
                if (i == j) {

                }
                else {
                    navilist[j].style.color = "white"
                }
            }
        }
        if (i == 4) {
            navilist[i].style.color = "#92FFD8";
            box3main.innerHTML = ``
            for (let j = 0; j < 5; j++) {
                if (i == j) {

                }
                else {
                    navilist[j].style.color = "white"
                }
            }
        }
    })
}





for (let i = 0; i < 8; i++) {
    btn[i].addEventListener("click", () => {
        if (i == 0) {//sem1
            btn[i].style.backgroundColor = "#92FFD8";
            for (let j = 0; j < 8; j++) {
                if (i == j) {

                }
                else {
                    btn[j].style.backgroundColor = "white";
                }
            }
            cont2.innerHTML = `
            <div class="box1">
                <h1 class="box1head">Courses</h1>
                <h2 class="box1headings">Theory</h2>
                <ul class="ulist">
                    <li class="listing">Course 111</li>
                    <li class="listing">Course 2</li>
                    <li class="listing">Course 3</li>
                    <li class="listing">Course 4</li>
                    <li class="listing">Course 5</li>
                    <li class="listing">Course 6</li>
                    <li class="listing">Course 7</li>
                </ul>
                <h2 class="box1headings">Practical</h2>
                <ul class="ulist">
                    <li class="listing"> Lab1</li>
                    <li class="listing"> Lab2</li>
                    <li class="listing"> Lab3</li>
                </ul>
            </div>
            
            <div class="box3">
                <div class="navbarnew">
                    <ul class="navi">
                        <li class="navilist">Details</li>
                        <li class="navilist">Syllabus</li>
                        <li class="navilist">Notes</li>
                        <li class="navilist">Books</li>
                        <li class="navilist">Previous Year</li>
                    </ul>
                </div>
                <div class="box3main">
                    
                </div>
            </div>`
            const box3main = document.querySelector(".box3main");
            const navilist = document.querySelectorAll(".navilist");
            const listing = document.querySelectorAll('.listing');
            listing[0].style.color = "#92FFD8";
            navilist[0].style.color = "#92FFD8";
            box3main.innerHTML = ``
            for (let k = 0; k < 10; k++) {
                listing[k].addEventListener("click", () => {
                    if (k == 0) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }
                    if (k == 1) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 2) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 3) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 4) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 5) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 6) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 7) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }
                    if (k == 8) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }
                    if (k == 9) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }


                })
            }
            for (let i = 0; i < 5; i++) {
                navilist[i].addEventListener("click", () => {
                    if (i == 0) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 1) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 2) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 3) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 4) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                })
            }
        }
        
        if (i == 1) {
            btn[i].style.backgroundColor = "#92FFD8";
            for (let j = 0; j < 8; j++) {
                if (i == j) {

                }
                else {
                    btn[j].style.backgroundColor = "white";
                }
            }
            cont2.innerHTML = `
            <div class="box1">
                <h1 class="box1head">Courses</h1>
                <h2 class="box1headings">Theory</h2>
                <ul class="ulist">
                    <li class="listing">Course 122</li>
                    <li class="listing">Course 2</li>
                    <li class="listing">Course 3</li>
                    <li class="listing">Course 4</li>
                    <li class="listing">Course 5</li>
                    <li class="listing">Course 6</li>
                    <li class="listing">Course 7</li>
                </ul>
                <h2 class="box1headings">Practical</h2>
                <ul class="ulist">
                    <li class="listing"> Lab1</li>
                    <li class="listing"> Lab2</li>
                    <li class="listing"> Lab3</li>
                </ul>
            </div>
            
            <div class="box3">
                <div class="navbarnew">
                    <ul class="navi">
                        <li class="navilist">Details</li>
                        <li class="navilist">Syllabus</li>
                        <li class="navilist">Notes</li>
                        <li class="navilist">Books</li>
                        <li class="navilist">Previous Year</li>
                    </ul>
                </div>
                <div class="box3main">
                    
                </div>
            </div>`
            const box3main = document.querySelector(".box3main");
            const navilist = document.querySelectorAll(".navilist");
            const listing = document.querySelectorAll('.listing');
            listing[0].style.color = "#92FFD8";
            navilist[0].style.color = "#92FFD8";
            box3main.innerHTML = ``
            for (let k = 0; k < 10; k++) {
                listing[k].addEventListener("click", () => {
                    if (k == 0) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }
                    if (k == 1) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 2) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 3) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 4) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 5) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 6) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 7) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }
                    if (k == 8) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }
                    if (k == 9) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }


                })
            }
            for (let i = 0; i < 5; i++) {
                navilist[i].addEventListener("click", () => {
                    if (i == 0) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 1) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 2) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 3) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 4) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                })
            }
        }
        if (i == 2) {
            btn[i].style.backgroundColor = "#92FFD8";
            for (let j = 0; j < 8; j++) {
                if (i == j) {

                }
                else {
                    btn[j].style.backgroundColor = "white";
                }
            }
            cont2.innerHTML = `
            <div class="box1">
                <h1 class="box1head">Courses</h1>
                <h2 class="box1headings">Theory</h2>
                <ul class="ulist">
                    <li class="listing">Course 133</li>
                    <li class="listing">Course 2</li>
                    <li class="listing">Course 3</li>
                    <li class="listing">Course 4</li>
                    <li class="listing">Course 5</li>
                    <li class="listing">Course 6</li>
                    <li class="listing">Course 7</li>
                </ul>
                <h2 class="box1headings">Practical</h2>
                <ul class="ulist">
                    <li class="listing"> Lab1</li>
                    <li class="listing"> Lab2</li>
                    <li class="listing"> Lab3</li>
                </ul>
            </div>
            
            <div class="box3">
                <div class="navbarnew">
                    <ul class="navi">
                        <li class="navilist">Details</li>
                        <li class="navilist">Syllabus</li>
                        <li class="navilist">Notes</li>
                        <li class="navilist">Books</li>
                        <li class="navilist">Previous Year</li>
                    </ul>
                </div>
                <div class="box3main">
                    
                </div>
            </div>`
            const box3main = document.querySelector(".box3main");
            const navilist = document.querySelectorAll(".navilist");
            const listing = document.querySelectorAll('.listing');
            listing[0].style.color = "#92FFD8";
            navilist[0].style.color = "#92FFD8";
            box3main.innerHTML = ``
            for (let k = 0; k < 10; k++) {
                listing[k].addEventListener("click", () => {
                    if (k == 0) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }
                    if (k == 1) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 2) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 3) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 4) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 5) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 6) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 7) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }
                    if (k == 8) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }
                    if (k == 9) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }


                })
            }
            for (let i = 0; i < 5; i++) {
                navilist[i].addEventListener("click", () => {
                    if (i == 0) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 1) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 2) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 3) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 4) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                })
            }
        }
        if (i == 3) {
            btn[i].style.backgroundColor = "#92FFD8";
            for (let j = 0; j < 8; j++) {
                if (i == j) {

                }
                else {
                    btn[j].style.backgroundColor = "white";
                }
            }
            cont2.innerHTML = `
            <div class="box1">
                <h1 class="box1head">Courses</h1>
                <h2 class="box1headings">Theory</h2>
                <ul class="ulist">
                    <li class="listing">Course 144</li>
                    <li class="listing">Course 2</li>
                    <li class="listing">Course 3</li>
                    <li class="listing">Course 4</li>
                    <li class="listing">Course 5</li>
                    <li class="listing">Course 6</li>
                    <li class="listing">Course 7</li>
                </ul>
                <h2 class="box1headings">Practical</h2>
                <ul class="ulist">
                    <li class="listing"> Lab1</li>
                    <li class="listing"> Lab2</li>
                    <li class="listing"> Lab3</li>
                </ul>
            </div>
            
            <div class="box3">
                <div class="navbarnew">
                    <ul class="navi">
                        <li class="navilist">Details</li>
                        <li class="navilist">Syllabus</li>
                        <li class="navilist">Notes</li>
                        <li class="navilist">Books</li>
                        <li class="navilist">Previous Year</li>
                    </ul>
                </div>
                <div class="box3main">
                    
                </div>
            </div>`
            const box3main = document.querySelector(".box3main");
            const navilist = document.querySelectorAll(".navilist");
            const listing = document.querySelectorAll('.listing');
            listing[0].style.color = "#92FFD8";
            navilist[0].style.color = "#92FFD8";
            box3main.innerHTML = ``
            for (let k = 0; k < 10; k++) {
                listing[k].addEventListener("click", () => {
                    if (k == 0) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }
                    if (k == 1) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 2) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 3) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 4) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 5) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 6) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 7) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }
                    if (k == 8) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }
                    if (k == 9) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }


                })
            }
            for (let i = 0; i < 5; i++) {
                navilist[i].addEventListener("click", () => {
                    if (i == 0) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 1) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 2) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 3) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 4) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                })
            }
        }
        if (i == 4) {
            btn[i].style.backgroundColor = "#92FFD8";
            for (let j = 0; j < 8; j++) {
                if (i == j) {

                }
                else {
                    btn[j].style.backgroundColor = "white";
                }
            }
            cont2.innerHTML = `
            <div class="box1">
                <h1 class="box1head">Courses</h1>
                <h2 class="box1headings">Theory</h2>
                <ul class="ulist">
                    <li class="listing">Course 155</li>
                    <li class="listing">Course 2</li>
                    <li class="listing">Course 3</li>
                    <li class="listing">Course 4</li>
                    <li class="listing">Course 5</li>
                    <li class="listing">Course 6</li>
                    <li class="listing">Course 7</li>
                </ul>
                <h2 class="box1headings">Practical</h2>
                <ul class="ulist">
                    <li class="listing"> Lab1</li>
                    <li class="listing"> Lab2</li>
                    <li class="listing"> Lab3</li>
                </ul>
            </div>
            
            <div class="box3">
                <div class="navbarnew">
                    <ul class="navi">
                        <li class="navilist">Details</li>
                        <li class="navilist">Syllabus</li>
                        <li class="navilist">Notes</li>
                        <li class="navilist">Books</li>
                        <li class="navilist">Previous Year</li>
                    </ul>
                </div>
                <div class="box3main">
                    
                </div>
            </div>`
            const box3main = document.querySelector(".box3main");
            const navilist = document.querySelectorAll(".navilist");
            const listing = document.querySelectorAll('.listing');
            listing[0].style.color = "#92FFD8";
            navilist[0].style.color = "#92FFD8";
            box3main.innerHTML = ``
            for (let k = 0; k < 10; k++) {
                listing[k].addEventListener("click", () => {
                    if (k == 0) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }
                    if (k == 1) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 2) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 3) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 4) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 5) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 6) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 7) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }
                    if (k == 8) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }
                    if (k == 9) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }


                })
            }
            for (let i = 0; i < 5; i++) {
                navilist[i].addEventListener("click", () => {
                    if (i == 0) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 1) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 2) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 3) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 4) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                })
            }
        }
        if (i == 5) {
            btn[i].style.backgroundColor = "#92FFD8";
            for (let j = 0; j < 8; j++) {
                if (i == j) {

                }
                else {
                    btn[j].style.backgroundColor = "white";
                }
            }
            cont2.innerHTML = `
            <div class="box1">
                <h1 class="box1head">Courses</h1>
                <h2 class="box1headings">Theory</h2>
                <ul class="ulist">
                    <li class="listing">Course 166</li>
                    <li class="listing">Course 2</li>
                    <li class="listing">Course 3</li>
                    <li class="listing">Course 4</li>
                    <li class="listing">Course 5</li>
                    <li class="listing">Course 6</li>
                    <li class="listing">Course 7</li>
                </ul>
                <h2 class="box1headings">Practical</h2>
                <ul class="ulist">
                    <li class="listing"> Lab1</li>
                    <li class="listing"> Lab2</li>
                    <li class="listing"> Lab3</li>
                </ul>
            </div>
            
            <div class="box3">
                <div class="navbarnew">
                    <ul class="navi">
                        <li class="navilist">Details</li>
                        <li class="navilist">Syllabus</li>
                        <li class="navilist">Notes</li>
                        <li class="navilist">Books</li>
                        <li class="navilist">Previous Year</li>
                    </ul>
                </div>
                <div class="box3main">
                    
                </div>
            </div>`
            const box3main = document.querySelector(".box3main");
            const navilist = document.querySelectorAll(".navilist");
            const listing = document.querySelectorAll('.listing');
            listing[0].style.color = "#92FFD8";
            navilist[0].style.color = "#92FFD8";
            box3main.innerHTML = ``
            for (let k = 0; k < 10; k++) {
                listing[k].addEventListener("click", () => {
                    if (k == 0) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }
                    if (k == 1) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 2) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 3) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 4) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 5) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 6) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 7) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }
                    if (k == 8) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }
                    if (k == 9) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }


                })
            }
            for (let i = 0; i < 5; i++) {
                navilist[i].addEventListener("click", () => {
                    if (i == 0) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 1) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 2) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 3) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 4) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                })
            }
        }
        if (i == 6) {
            btn[i].style.backgroundColor = "#92FFD8";
            for (let j = 0; j < 8; j++) {
                if (i == j) {

                }
                else {
                    btn[j].style.backgroundColor = "white";
                }
            }
            cont2.innerHTML = `
            <div class="box1">
                <h1 class="box1head">Courses</h1>
                <h2 class="box1headings">Theory</h2>
                <ul class="ulist">
                    <li class="listing">Course 177</li>
                    <li class="listing">Course 2</li>
                    <li class="listing">Course 3</li>
                    <li class="listing">Course 4</li>
                    <li class="listing">Course 5</li>
                    <li class="listing">Course 6</li>
                    <li class="listing">Course 7</li>
                </ul>
                <h2 class="box1headings">Practical</h2>
                <ul class="ulist">
                    <li class="listing"> Lab1</li>
                    <li class="listing"> Lab2</li>
                    <li class="listing"> Lab3</li>
                </ul>
            </div>
            
            <div class="box3">
                <div class="navbarnew">
                    <ul class="navi">
                        <li class="navilist">Details</li>
                        <li class="navilist">Syllabus</li>
                        <li class="navilist">Notes</li>
                        <li class="navilist">Books</li>
                        <li class="navilist">Previous Year</li>
                    </ul>
                </div>
                <div class="box3main">
                    
                </div>
            </div>`
            const box3main = document.querySelector(".box3main");
            const navilist = document.querySelectorAll(".navilist");
            const listing = document.querySelectorAll('.listing');
            listing[0].style.color = "#92FFD8";
            navilist[0].style.color = "#92FFD8";
            box3main.innerHTML = ``
            for (let k = 0; k < 10; k++) {
                listing[k].addEventListener("click", () => {
                    if (k == 0) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }
                    if (k == 1) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 2) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 3) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 4) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 5) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 6) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 7) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }
                    if (k == 8) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }
                    if (k == 9) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }


                })
            }
            for (let i = 0; i < 5; i++) {
                navilist[i].addEventListener("click", () => {
                    if (i == 0) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 1) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 2) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 3) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 4) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                })
            }
        }
        if (i == 7) {//sem8
            btn[i].style.backgroundColor = "#92FFD8";
            for (let j = 0; j < 8; j++) {
                if (i == j) {

                }
                else {
                    btn[j].style.backgroundColor = "white";
                }
            }
            cont2.innerHTML = `
            <div class="box1">
                <h1 class="box1head">Courses</h1>
                <h2 class="box1headings">Theory</h2>
                <ul class="ulist">
                    <li class="listing">Course 188</li>
                    <li class="listing">Course 2</li>
                    <li class="listing">Course 3</li>
                    <li class="listing">Course 4</li>
                    <li class="listing">Course 5</li>
                    <li class="listing">Course 6</li>
                    <li class="listing">Course 7</li>
                </ul>
                <h2 class="box1headings">Practical</h2>
                <ul class="ulist">
                    <li class="listing"> Lab1</li>
                    <li class="listing"> Lab2</li>
                    <li class="listing"> Lab3</li>
                </ul>
            </div>
            
            <div class="box3">
                <div class="navbarnew">
                    <ul class="navi">
                        <li class="navilist">Details</li>
                        <li class="navilist">Syllabus</li>
                        <li class="navilist">Notes</li>
                        <li class="navilist">Books</li>
                        <li class="navilist">Previous Year</li>
                    </ul>
                </div>
                <div class="box3main">
                    
                </div>
            </div>`
            const box3main = document.querySelector(".box3main");
            const navilist = document.querySelectorAll(".navilist");
            const listing = document.querySelectorAll('.listing');
            listing[0].style.color = "#92FFD8";
            navilist[0].style.color = "#92FFD8";
            box3main.innerHTML = ``
            for (let k = 0; k < 10; k++) {
                listing[k].addEventListener("click", () => {
                    if (k == 0) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }
                    if (k == 1) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 2) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 3) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 4) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 5) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 6) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }

                    if (k == 7) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }
                    if (k == 8) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }
                    if (k == 9) {
                        for (let j = 0; j < 10; j++) {
                            if (k == j) {
                                listing[j].style.color = "#92FFD8";
                            }
                            else {
                                listing[j].style.color = "black"
                            }
                        }
                        box3.innerHTML = `<div class="navbarnew">
                        <ul class="navi">
                            <li class="navilist">Details</li>
                            <li class="navilist">Syllabus</li>
                            <li class="navilist">Notes</li>
                            <li class="navilist">Books</li>
                            <li class="navilist">Previous Year</li>
                        </ul>
                    </div>
                    <div class="box3main">
                                    
                                </div>`
                        const navilist = document.querySelectorAll(".navilist");
                        navilist[0].style.color = "#92FFD8";
                        for (let m = 1; m < 5; m++) {
                            navilist[m].style.color = "white";
                        }
                        for (let i = 0; i < 5; i++) {
                            navilist[i].addEventListener("click", () => {
                                if (i == 0) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 1) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 2) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 3) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                                if (i == 4) {
                                    navilist[i].style.color = "#92FFD8";
                                    box3main.innerHTML = ``
                                    for (let j = 0; j < 5; j++) {
                                        if (i == j) {

                                        }
                                        else {
                                            navilist[j].style.color = "white"
                                        }
                                    }
                                }
                            })
                        }
                    }


                })
            }
            for (let i = 0; i < 5; i++) {
                navilist[i].addEventListener("click", () => {
                    if (i == 0) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 1) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 2) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 3) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                    if (i == 4) {
                        navilist[i].style.color = "#92FFD8";
                        box3main.innerHTML = ``
                        for (let j = 0; j < 5; j++) {
                            if (i == j) {

                            }
                            else {
                                navilist[j].style.color = "white"
                            }
                        }
                    }
                })
            }
        }

    })
}

