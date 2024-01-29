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

    footerButton.addEventListener("click", changeButton)
  }

}






