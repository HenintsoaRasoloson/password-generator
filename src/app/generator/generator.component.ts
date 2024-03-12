import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { GeneratorService } from "../services/generator.service";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ToastrModule, ToastrService } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@Component({
  selector: "app-generator",
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    FontAwesomeModule,
    ToastrModule,
    // BrowserAnimationsModule,
  ],
  templateUrl: "./generator.component.html",
  styleUrl: "./generator.component.scss",
})
export class GeneratorComponent {
  // number of characters
  characterLength: number = 8;
  characterLengthMin: number = 2;
  characterLengthMax: number = 60;

  // use small Letters
  useSmallLetters: boolean = true;
  // use capital Letters
  useCapitalLetters: boolean = true;
  // use specialChar
  useSpecialChar: boolean = false;
  //user Numbers
  useNumber: boolean = false;

  //generated Password
  generatedString: string = "";

  constructor(
    private generatorService: GeneratorService,
    private toastr: ToastrService
  ) {}

  onSubmit() {
    this.generatedString = this.generatorService.generateRandomString(
      this.characterLength,
      this.useCapitalLetters,
      this.useSmallLetters,
      this.useNumber,
      this.useSpecialChar
    );
    console.log(this.generatedString);
  }

  async copyToClipboard() {
    this.toastr.success("Mot de passe copié dans le presse-papiers", "Fait!");
    navigator.clipboard.writeText(this.generatedString);
  }
}
