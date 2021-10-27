import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'counterapp';

  // minor
  minorCount = 0;

  increaseMinor() {
    this.minorCount = this.minorCount + 1;
  }
  decreaseMinor() {
    if (this.minorCount > 0) {
      this.minorCount = this.minorCount - 1;
    } else {
      this.minorCount = 0;
    }
  }

  // lorikeet
  lorikeetCount = 0;

  increaseLorikeet() {
    this.lorikeetCount = this.lorikeetCount + 1;
  }
  decreaseLorikeet() {
    if (this.lorikeetCount > 0) {
      this.lorikeetCount = this.lorikeetCount - 1;
    } else {
      this.lorikeetCount = 0;
    }
  }

  // magpie
  magpieCount = 0;

  increaseMagpie() {
    this.magpieCount = this.magpieCount + 1;
  }
  decreaseMagpie() {
    if (this.magpieCount > 0) {
      this.magpieCount = this.magpieCount - 1;
    } else {
      this.magpieCount = 0;
    }
  }

  // pigeon
  pigeonCount = 0;

  increasePigeon() {
    this.pigeonCount = this.pigeonCount + 1;
  }
  decreasePigeon() {
    if (this.pigeonCount > 0) {
      this.pigeonCount = this.pigeonCount - 1;
    } else {
      this.pigeonCount = 0;
    }
  }

  // duck
  duckCount = 0;

  increaseDuck() {
    this.duckCount = this.duckCount + 1;
  }
  decreaseDuck() {
    if (this.duckCount > 0) {
      this.duckCount = this.duckCount - 1;
    } else {
      this.duckCount = 0;
    }
  }

  ////////////////////////// SCORING////////////////

  // window.onload = function() {
  //   this.assignTrophy();
  // };

  currentUser = 'Reuben';
  currentLeader = '';
  scores = {};

  data = {
    reubenScore: 5,
    patScore: 2,
    jasonScore: 3,
    joshScore: 4,
  };

  reubenScore = this.data['reubenScore'];
  patScore = this.data['patScore'];
  jasonScore = this.data['jasonScore'];
  joshScore = this.data['joshScore'];

  changeCurrentUser(input) {
    this.currentUser = input;
  }

  resetScores() {
    this.minorCount = 0;
    this.lorikeetCount = 0;
    this.magpieCount = 0;
    this.pigeonCount = 0;
    this.duckCount = 0;
  }

  updateScore() {
    if (this.currentUser == 'Reuben') {
      this.reubenScore =
        this.reubenScore +
        this.minorCount +
        this.lorikeetCount +
        this.magpieCount +
        this.pigeonCount +
        this.duckCount;
      this.resetScores();
    } else if (this.currentUser == 'Patrick') {
      this.patScore =
        this.patScore +
        this.minorCount +
        this.lorikeetCount +
        this.magpieCount +
        this.pigeonCount +
        this.duckCount;
      this.resetScores();
    } else if (this.currentUser == 'Jason') {
      this.jasonScore =
        this.jasonScore +
        this.minorCount +
        this.lorikeetCount +
        this.magpieCount +
        this.pigeonCount +
        this.duckCount;
      this.resetScores();
    } else if (this.currentUser == 'Josh') {
      this.joshScore =
        this.joshScore +
        this.minorCount +
        this.lorikeetCount +
        this.magpieCount +
        this.pigeonCount +
        this.duckCount;
      this.resetScores();
    }
    this.assignTrophy();
  }

  getCurrentLeader() {
    var b = {
      Reuben: this.reubenScore,
      Patrick: this.patScore,
      Jason: this.jasonScore,
      Josh: this.joshScore,
    };

    var highestVal = Math.max.apply(null, Object.values(b)),
      val = Object.keys(b).find(function (a) {
        return b[a] === highestVal;
      });
    console.log(val);
    return val;
  }

  assignTrophy() {
    this.currentLeader = this.getCurrentLeader();

    if (this.currentLeader == 'Reuben') {
      document.getElementById('trophyReuben').style.display = 'block';
      document.getElementById('trophyPatrick').style.display = 'none';
      document.getElementById('trophyJason').style.display = 'none';
      document.getElementById('trophyJosh').style.display = 'none';
    } else if (this.currentLeader == 'Patrick') {
      document.getElementById('trophyReuben').style.display = 'none';
      document.getElementById('trophyPatrick').style.display = 'block';
      document.getElementById('trophyJason').style.display = 'none';
      document.getElementById('trophyJosh').style.display = 'none';
    } else if (this.currentLeader == 'Jason') {
      document.getElementById('trophyReuben').style.display = 'none';
      document.getElementById('trophyPatrick').style.display = 'none';
      document.getElementById('trophyJason').style.display = 'block';
      document.getElementById('trophyJosh').style.display = 'none';
    } else if (this.currentLeader == 'Josh') {
      document.getElementById('trophyReuben').style.display = 'none';
      document.getElementById('trophyPatrick').style.display = 'none';
      document.getElementById('trophyJason').style.display = 'none';
      document.getElementById('trophyJosh').style.display = 'block';
    }
  }
}
