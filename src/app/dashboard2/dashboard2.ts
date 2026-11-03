import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-dashboard2',
  imports: [RouterModule, Header, Sidebar, Footer],
  templateUrl: './dashboard2.html',
  styleUrl: './dashboard2.css',
})
export class Dashboard2 {}
