import { Component, OnDestroy, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  editor!: Editor;
  html: string = '';
  title = 'editor';

  ngOnInit(): void {
      this.editor = new Editor();
  }

  ngOnDestroy(): void {
      this.editor.destroy();
  }
}
