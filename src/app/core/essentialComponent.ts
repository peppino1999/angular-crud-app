import { Component, OnDestroy, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject } from "rxjs";


@Component({
    template: ''
})
export class EssentialComponent implements OnDestroy{
    destroy$ = new Subject()
    router = inject(Router)
    route = inject(ActivatedRoute)
    routeParams = this.route.snapshot.params

    ngOnDestroy(): void {
        this.destroy$.next(null)
        this.destroy$.complete()
    }

}