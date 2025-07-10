import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() detalhesFormGroup!: FormGroup;
  @Input() listServico!: string[];
  @Input() listBarbeiro!: string[];
  @Input() currentStep!: number;
  @Input() listDados!: { label: string; control: string }[];

  ngOnInit(): void {
    console.log(this.currentStep);
  }
}
