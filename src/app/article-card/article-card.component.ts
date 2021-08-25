import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, AfterContentInit, Testability } from '@angular/core';
import { ShareMenuComponent } from '../share-menu/share-menu.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit, AfterViewInit {
  @ViewChild('textElement') textElement: ElementRef
  @Input() title: string;
  @Input() titleFormatted: string;
  @Input() text: string;
  @Input() textFormatted: string;
  @Input() url: string;
  @Input() date: string;
  @Input() category: string;
  @Input() index: number;
  @Input() id: string;
  @Input() image_url: string;
  @Input() sharepic_url: string;
  @Input() firstBlock: boolean = true;
  @Input() factcheckingOrganisation: string;


  @Input() compact: boolean = false;

  isOverflown: boolean = false;
  categories: string[]

  ngOnInit(): void {
    this.categories = this.category.split(',')
    for(let c in this.categories){
      c = c.trim()
    }
  }

  ngAfterViewInit(): void {
    // set timeout to circumvent error: Expression has changed after it was checked
    setTimeout(() => {
      if (this.textElement)
      this.isOverflown = this.checkIfOverflown(this.textElement.nativeElement)
    }, 0)
  }

  truncateChar(text: string, limit: number = 280): string {
    if(!text || text.length <= limit )
    {
        return text;
    }

    let without_html = text.replace(/<(?:.|\n)*?>/gm, '');
    let short_until = without_html.substring(0, limit).lastIndexOf(" ");
    return without_html.substring(0, short_until)+ " ..."; 
  }

  checkIfOverflown(element): boolean {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth
  }

  getTitle(): string {
    return this.title;
  }
}
