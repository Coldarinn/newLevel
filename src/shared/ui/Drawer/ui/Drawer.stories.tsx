import type { Meta, StoryObj } from '@storybook/react';

import { DecoratedComponent } from '@/shared/config/storybook/Decorator';

import { Drawer as DrawerComponent } from './Drawer';

export default {
  title: 'shared/Drawer',
  decorators: [DecoratedComponent],
  parameters: {
    layout: 'fullscreen',
  },
  component: DrawerComponent,
  render: (args) => <DrawerComponent {...args} />,
} satisfies Meta<typeof DrawerComponent>;

export const Drawer: StoryObj = {
  args: {
    notCentered: true,
    isOpening: true,
    children: (
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum fugia
        t placeat nihil error nisi nobis, eos molestias sint possimus dicta quia
        iusto veniam a perspiciatis deserunt qui, atque ullam ab recusandae! Ex in
        optio nesciunt, voluptates voluptatem quo perferendis ipsa? Quaerat totam
        labore a non eveniet molestias quos nihil deleniti enim porro minus conse
        quatur atque praesentium eaque tempore, laboriosam, quod quidem nobis. Re
        m vel vitae quam quos deserunt, assumenda quo exercitationem odit perspici
        atis, aspernatur eius et laborum voluptatum voluptates libero corporis qui
        dem sequi eum quae incidunt porro iusto iure consequatur cumque. Voluptates
        fugiat quibusdam sint possimus, impedit iure eaque dolorum tempore id opti
        o quaerat et reprehenderit perspiciatis deserunt sunt aliquid, autem exerc
        itationem distinctio similique ipsam ea nostrum iste. Sequi quae deleniti,
        dignissimos sint dolores nulla a officiis at tenetur. Hic esse accusamus fu
        git voluptatem minima dolor rerum corporis deleniti neque doloribus consequ
        atur voluptate quasi mollitia quae a molestiae velit veritatis, at officiis
        perspiciatis error autem possimus adipisci? Accusamus repellendus, ipsa num
        quam illum rem laboriosam possimus vitae maiores amet similique ipsam, tota
        m vel optio provident ullam quo doloribus inventore facere dignissimos, ipsu
        m quis obcaecati. Tenetur ea ipsa minus tempora reprehenderit, iusto obcaeca
        ti rerum dolorum, soluta pariatur incidunt eos! Illum veniam, voluptas corpo
        ris eveniet molestiae inventore beatae fugit autem assumenda voluptatibus alia
        s provident dolore atque nisi voluptate consequatur, deserunt consequuntur repe
        llendus temporibus ipsam quisquam mollitia dignissimos sit officia! Vitae ex d
        electus cum, nihil molestiae, deleniti fugiat deserunt aspernatur molestias ull
        am id quos maxime repellat fugit quibusdam? Unde repellat, laboriosam culpa ut
        facilis provident commodi. Eius dolore at qui laboriosam optio, rerum natus est
        soluta sapiente, alias laudantium ad necessitatibus aperiam quisquam sed asperio
        res impedit autem doloremque nostrum corrupti tempore cum eligendi. Ullam cum pa
        riatur, quaerat incidunt aut quos quidem quas, tempora ipsam suscipit dicta praes
        entium aperiam magnam, numquam sequi nemo molestiae fugiat?
      </div>
    ),
  },
};
