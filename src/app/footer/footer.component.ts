import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  ngOnInit(): void {
    const footerButton = document.querySelector('.show-button')
    const buttonArrow = footerButton.querySelector('.footerArrow')
    const frame = document.querySelector('.show-block')

    const addUserData = document.querySelector('.addUserData')
    const headerTitle = document.querySelector('.header-title')

    const resetSettings = document.querySelector('.resetSettings')


    let changeButton = () => {
      if (buttonArrow.getAttribute('data-button') === "frame-closed") {
        frame.removeAttribute("style")
        buttonArrow.classList.add('fa-chevron-down')
        buttonArrow.classList.remove('fa-chevron-up')
        buttonArrow.setAttribute('data-button', 'frame-opened')
        setTimeout(() => {
          frame.setAttribute("style", "display: block; animation-name: none;")
          footerButton.classList.remove('showIt')
          footerButton.classList.add('hideIt')
        }, 301);

      } else if (buttonArrow.getAttribute('data-button') === "frame-opened") {
        frame.removeAttribute("style")
        buttonArrow.classList.add('fa-chevron-up')
        buttonArrow.classList.remove('fa-chevron-down')
        buttonArrow.setAttribute('data-button', 'frame-closed')
        frame.setAttribute("style", "animation-name: hideIt;")
        footerButton.classList.remove('hideIt')
        footerButton.classList.add('showIt')
        setTimeout(() => {
          frame.setAttribute("style", "display: none;")
        }, 301);

      }
    }

    let displayUserData = () => {
      if (document.querySelector('.user') === null) {
        const user = document.createElement("p")
        user.classList.add('header-title-text', 'header-title-text__position', 'header-title-text__view', 'user')
        user.textContent = 'Jakub Horbacz'
        headerTitle.appendChild(user)
        user.setAttribute('id', "userName")
        addUserData.querySelector('a').innerHTML = '<span class="fa-li"><i class="fa-sharp fa-solid fa-chevron-right"></i></span>schowaj&nbsp;dane&nbsp;osobowe'
      } else {
        const userName = document.getElementById('userName')
        document.querySelector('.header-title').removeChild(userName);
        addUserData.querySelector('a').innerHTML = '<span class="fa-li"><i class="fa-sharp fa-solid fa-chevron-right"></i></span>pokaż&nbsp;dane&nbsp;osobowe'
      }
    }

    let resetAllSettings = () => {
      if (document.querySelector('.user') === null) {

      } else {
        const userName = document.getElementById('userName')
        document.querySelector('.header-title').removeChild(userName);
        addUserData.querySelector('a').innerHTML = '<span class="fa-li"><i class="fa-sharp fa-solid fa-chevron-right"></i></span>pokaż&nbsp;dane&nbsp;osobowe'
      }
    }

    footerButton.addEventListener("click", changeButton)

    addUserData.addEventListener("click", displayUserData)

    resetSettings.addEventListener('click', resetAllSettings)
  }

}






