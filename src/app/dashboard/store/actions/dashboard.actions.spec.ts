import * as fromDashboard from './dashboard.actions';

describe('customDashboards', () => {
  it('should return an action', () => {
    expect(fromDashboard.customDashboards().type).toBe('[Dashboard] Custom Dashboards');
  });
});
