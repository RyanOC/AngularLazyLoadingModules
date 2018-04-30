import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, EventEmitter, Pipe, PipeTransform } from '@angular/core';

@Component({
	selector: "common-component",
	templateUrl: "./common.component.html"
	, encapsulation: ViewEncapsulation.None
	, changeDetection: ChangeDetectionStrategy.OnPush
})

export class CommonComponent implements OnInit { 

    ngOnInit() {
        //
    }

}