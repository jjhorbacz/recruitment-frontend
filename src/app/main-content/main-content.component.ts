import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {


  private jdata = [
    { line: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { line: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { line: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { line: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { line: 'Ea totam repellat et suscipit tenetur et exercitationem facilis eum autem quibusdam.' },
    { line: 'Vel omnis molestias ut odio enim ut aperiam provident id eius sapiente.' }
  ]


  ngOnInit(): void {

  }


}