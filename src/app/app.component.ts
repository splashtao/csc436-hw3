import { Component,OnInit,Input } from '@angular/core';
import { Patient } from './patient.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @Input() check: boolean;
  private patients: Patient[] = [
    new Patient('Derrick', 'Rose', 'Drose@nba.com',
      'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3456.png&w=350&h=254', 'Trevor'),
    new Patient('Klay', 'Thompson', 'Kthompson@nba.com',
      'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6475.png&w=350&h=254', 'Micheal'),
    new Patient('Kevin', 'Durnat', 'KD@nba.com',
      'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3202.png&w=350&h=254', 'Micheal'),
    new Patient('Stephen', 'Curry', 'SC30@nba.com',
      'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254', 'Trevor'),
    new Patient('Russell', 'Westbrook', 'Brodi@nba.com',
      'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3468.png&w=350&h=254', 'Nicole'),
    new Patient('John', 'Wall', 'Jwall@nba.com',
      'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4237.png&w=350&h=254', 'Tom'),
    new Patient('Paul', 'George', 'PG13@nba.com',
      'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4251.png&w=350&h=254', 'Nicole'),
    new Patient('Kawhi', 'Leonard', 'Klaw@nba.com',
      'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6450.png&w=350&h=254', 'Tom'),
    new Patient('Kyrie', 'Irving', 'KIrving@nba.com',
      'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6442.png&w=350&h=254', 'Fred'),
    new Patient('James', 'Harden', 'Jharden@nba.com',
      'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3992.png&w=350&h=254', 'Kobe')
  ];
  displayedPatients: Patient[];
  searchText: string;
  ngOnInit() {
    this.displayedPatients = this.patients;
  }


  search() {
    let searchTextArray = this.searchText ? this.searchText.split(' ') : [];
    if (searchTextArray.length === 2)
    {
      if (searchTextArray[0].toLocaleLowerCase() === 'name') {
        this.displayedPatients = this.patients.filter(patient => patient.FName[0].toLocaleLowerCase() === searchTextArray[1][0].toLocaleLowerCase());
      }
      else if (searchTextArray[0].toLocaleLowerCase() === 'doctor') {
        this.displayedPatients = this.patients.filter(patient => patient.doctorName.toLocaleLowerCase() === searchTextArray[1].toLocaleLowerCase());
      }
      else {
        this.displayedPatients = [];
      }
    }
    else {
      this.displayedPatients = [];
    }
  }
  refresh() {
    this.displayedPatients = this.patients;
  }
}
