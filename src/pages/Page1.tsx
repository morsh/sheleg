import * as React from 'react';
import { Card, CardTitle, CardText } from 'react-md';
import { SettingsStore, SettingsContainer, SettingsActions } from '../state';
import connectToStores from 'alt-utils/lib/connectToStores';

class Page1 extends React.Component<SettingsContainer> {

  static getStores(props: {}) {
    return [SettingsStore];
  }

  static getPropsFromStores(props: {}) {
      return SettingsStore.getState();
  }

  componentWillMount() {
    SettingsActions.saveSettingsAsync({ a: 10 });
  }

  render() {
    return (
      <div className="md-grid md-text-container">
        <h2 className="md-cell md-cell--12">
          Page 1
        </h2>
        <Card className="md-cell">
          <CardTitle title="Card 1" />
          <CardText>
            <p>{this.props.settings.a}</p>
          </CardText>
        </Card>
        <Card className="md-cell">
          <CardTitle title="Card 2" />
          <CardText>
            <p>Wowza</p>
          </CardText>
        </Card>
        <Card className="md-cell">
          <CardTitle title="Card 3" />
          <CardText>
            <p>Wowza</p>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default connectToStores(Page1);