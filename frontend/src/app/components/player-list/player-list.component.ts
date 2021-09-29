import {Component, OnInit} from '@angular/core';
import {PlayercreationService} from "../../services/playercreation.service";
import {Player} from "../../../models/player";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[];
  SelectedIDs = [];
  modifiedPlayers: Player[];
  showMsg=false;

  constructor(private playerService: PlayercreationService) {
  }

  ngOnInit() {
    this.playerService.getPlayers().subscribe(data => {
      this.players = data;
      this.modifiedPlayers = [];
    });

  }

  selectID(user, event: any) {
    if (this.SelectedIDs.indexOf(user) !== -1) {
      this.SelectedIDs.splice(this.SelectedIDs.indexOf(user), 1);
    } else {
      this.SelectedIDs.push(user);
    }
  }

  onDelete() {
    const promises = [];
    this.SelectedIDs.forEach(value => {
      this.playerService.delete(value).subscribe(result => promises.push(result));
    });
    this.reloadPage();

  }

  onUpdate() {
    this.players.forEach(user => {
      var newnamehtml = document.getElementById(' ' + user.id + ' ').children.namedItem('name') as HTMLElement;
      if (user.name !== newnamehtml.innerText) {
        user.name = newnamehtml.innerText;
        this.playerService.save(user).subscribe(response=>{
          this.showMsg=true;
        });
      }
    });
  }

  reloadPage() {
    window.location.reload();
  }

}
