import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Fact } from '../model/fact.model'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  facts: Array < Fact >
  selectedCategory
  searchterm
  limit: number
  totalCount: number

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(
      queryParams => {
        const q = queryParams.get("q")
        const c = queryParams.get("c")

        if (q != this.searchterm || c != this.selectedCategory) {
          this.searchterm = q
          this.selectedCategory = c
          this.fetch(q, c)
        }
      }
    )

    const q = this.route.snapshot.queryParamMap.get("q")
    const c = this.route.snapshot.queryParamMap.get("c")
    this.fetch(q, c)
  }

  async fetch(q: string, c: string) {
    if (q) {
      const limit = 10
      this.dataService.getSearchCount(q, c).subscribe(
        (count: number) => this.totalCount = count
      )
      this.facts = await this.dataService.search(q, c, limit).toPromise()
      this.limit = limit
    } else {
      const limit = 9
      this.dataService.getFactCount(c).subscribe(
        (count: number) => this.totalCount = count
      )
      this.facts = await this.dataService.getData(c, limit).toPromise()
      this.limit = limit
    }

    console.log(this.limit, this.totalCount)
  }

  async loadMore() {
    let newFacts: Array < Fact > 
    if(this.searchterm && this.searchterm != "") {
      newFacts = await this.dataService.search(this.searchterm, this.selectedCategory, this.limit + 10).toPromise()
    } else {
      newFacts = await this.dataService.getData(this.selectedCategory, this.limit, this.limit + 10).toPromise()
    }
    this.limit = this.limit + 10
    this.facts = this.facts.concat(newFacts)
  }

  clearSearch() {
    this.router.navigate(
      [], 
      {
        relativeTo: this.route,
        queryParams: {"q": ""}, 
        queryParamsHandling: 'merge',
      })
  }

}
