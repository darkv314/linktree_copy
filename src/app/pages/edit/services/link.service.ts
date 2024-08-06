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
  links = signal<Link[]>(
    Array(4)
      .fill(0)
      .map((_, index) => ({
        id: `${index}`,
        name: '',
        url: '',
      }))
  );
  id = signal(0);

  updateIndex() {
    this.id.update((id) => id + 1);
  }

  addLink(link: Link) {
    this.links.update((links) => [...links, link]);
    this.updateIndex();
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
