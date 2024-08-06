import { Injectable, signal } from '@angular/core';

export type Link = {
  id: string;
  name: string;
  url: string;
};

@Injectable({
  providedIn: 'root',
})
export class LinkService {
  links = signal<Link[]>([]);
  id = signal(0);

  addLink(link: Link) {
    this.links.update((links) => [...links, link]);
    this.id.update((id) => id + 1);
  }

  updateLinkName(id: string, name: string) {
    this.links.update((links) =>
      links.map((link) => (link.id === id ? { ...link, name } : link))
    );
  }

  updateLinkUrl(id: string, url: string) {
    this.links.update((links) =>
      links.map((link) => (link.id === id ? { ...link, url } : link))
    );
  }

  deleteLink(id: string) {
    this.links.update((links) => links.filter((link) => link.id !== id));
  }
}
