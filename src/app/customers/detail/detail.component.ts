import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { SeoService } from 'src/app/providers/seo.service';
import { UsersService } from 'src/app/providers/users.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  customerId: string = '';
  customerInfo: any;

  constructor(
    private route: ActivatedRoute,
    private users: UsersService,
    private seo: SeoService
  ) { }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.paramMap.get('id') || '';
    this.users.getUserById(this.customerId).pipe(
      tap((user: any) => {

        this.seo.generateTags({
          title: user.name,
          description: user.email,
        })

      })
    ).subscribe((user) => {
      this.customerInfo = user
    })
  }

}
