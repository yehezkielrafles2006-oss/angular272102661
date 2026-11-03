import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, Header, Sidebar, Footer],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}