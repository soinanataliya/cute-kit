import type { Meta, StoryObj } from '@storybook/react';
import TabsComponent from './Tabs';

const meta: Meta<typeof TabsComponent> = {
  title: 'Components/tabs',
  component: TabsComponent,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Tabs: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h2>Horizontal</h2>
        <TabsComponent
          tabs={[
            {
              id: '1',
              label: 'Tab 1',
              content: <div>Content for Tab 1</div>,
            },
            {
              id: '2',
              label: 'Tab 2',
              content: <div>Content for Tab 2</div>,
            },
            {
              id: '3',
              label: 'Tab 3',
              content: <div>Content for Tab 3</div>,
            },
          ]}
        />
      </div>
      <div>
        <h2>Vertical</h2>
        <TabsComponent
          variant="vertical"
          tabs={[
            {
              id: '1',
              label: 'Tab 1',
              content: <div>Content for Tab 1</div>,
            },
            {
              id: '2',
              label: 'Tab 2',
              content: <div>Content for Tab 2</div>,
            },
            {
              id: '3',
              label: 'Tab 3',
              content: <div>Content for Tab 3</div>,
            },
          ]}
        />
      </div>
      <div>
        <h2>With Link</h2>
        <TabsComponent
          tabs={[
            {
              id: '1',
              label: 'Tab 1',
              content: <div>Content for Tab 1</div>,
            },
            {
              id: 'google',
              label: 'Google',
              href: 'https://google.com',
            },
            {
              id: '3',
              label: 'Tab 3',
              content: <div>Content for Tab 3</div>,
            },
          ]}
        />
      </div>
    </div>
  ),
};
