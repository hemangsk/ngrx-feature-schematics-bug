import { createAction, props } from '@ngrx/store';

export const customDashboards = createAction(
  '[Dashboard] Custom Dashboards'
);

export const customDashboardsSuccess = createAction(
  '[Dashboard] Custom Dashboards Success',
  props<{ data: any }>()
);

export const customDashboardsFailure = createAction(
  '[Dashboard] Custom Dashboards Failure',
  props<{ error: any }>()
);
