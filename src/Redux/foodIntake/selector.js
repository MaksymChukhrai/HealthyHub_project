export const selectIsLoading = (state) => state.foodIntake.isLoading;

export const getFoodIntake = (state) => state.foodIntake.data;

export const getFoodIntakeId = (state) => state.foodIntake.data._id;

// breakfast
export const getBreakfastCarbons = (state) =>
  state.foodIntake.data.breakfast.totalCarbonohidretes;
export const getBreakfastFat = (state) =>
  state.foodIntake.data.breakfast.totalFat;
export const getBreakfastProtein = (state) =>
  state.foodIntake.data.breakfast.totalProtein;

// Lunch
export const getLunchCarbons = (state) =>
  state.foodIntake.data.lunch.totalCarbonohidretes;
export const getLunchFat = (state) => state.foodIntake.data.lunch.totalFat;
export const getLunchProtein = (state) =>
  state.foodIntake.data.lunch.totalProtein;

// Dinner
export const getDinnerCarbons = (state) =>
  state.foodIntake.data.dinner.totalCarbonohidretes;
export const getDinnerFat = (state) => state.foodIntake.data.dinner.totalFat;
export const getDinnerProtein = (state) =>
  state.foodIntake.data.dinner.totalProtein;

// Snack
export const getSnackCarbons = (state) =>
  state.foodIntake.data.snack.totalCarbonohidretes;
export const getSnackFat = (state) => state.foodIntake.data.snack.totalFat;
export const getSnackProtein = (state) =>
  state.foodIntake.data.snack.totalProtein;

export const getDiaryCalories = (state) => state.foodIntake.data.totalCalories;

export const selectTotalProteins = (state) =>
  state.foodIntake.data.totalProtein;

export const selectTotalCarbon = (state) =>
  state.foodIntake.data.totalCarbonohidretes;
export const selectTotalFat = (state) => state.foodIntake.data.totalFat;

export const getFirstLoad = (state) => state.foodIntake.firstLoad;
