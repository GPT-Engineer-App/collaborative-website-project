import { createClient } from '@supabase/supabase-js';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

import React from "react";
export const queryClient = new QueryClient();
export function SupabaseProvider({ children }) {
    return React.createElement(QueryClientProvider, { client: queryClient }, children);
}

const fromSupabase = async (query) => {
    const { data, error } = await query;
    if (error) throw new Error(error.message);
    return data;
};

// Hooks for slider_votes
export const useSliderVotes = () => useQuery({
    queryKey: ['slider_votes'],
    queryFn: () => fromSupabase(supabase.from('slider_votes').select('*')),
});
export const useAddSliderVote = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newVote) => fromSupabase(supabase.from('slider_votes').insert([newVote])),
        onSuccess: () => {
            queryClient.invalidateQueries('slider_votes');
        },
    });
};
export const useUpdateSliderVote = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedVote) => fromSupabase(supabase.from('slider_votes').update(updatedVote).eq('id', updatedVote.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('slider_votes');
        },
    });
};
export const useDeleteSliderVote = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('slider_votes').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('slider_votes');
        },
    });
};

// Hooks for groups
export const useGroups = () => useQuery({
    queryKey: ['groups'],
    queryFn: () => fromSupabase(supabase.from('groups').select('*')),
});
export const useAddGroup = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newGroup) => fromSupabase(supabase.from('groups').insert([newGroup])),
        onSuccess: () => {
            queryClient.invalidateQueries('groups');
        },
    });
};
export const useUpdateGroup = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedGroup) => fromSupabase(supabase.from('groups').update(updatedGroup).eq('id', updatedGroup.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('groups');
        },
    });
};
export const useDeleteGroup = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('groups').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('groups');
        },
    });
};

// Hooks for voting
export const useVoting = () => useQuery({
    queryKey: ['voting'],
    queryFn: () => fromSupabase(supabase.from('voting').select('*')),
});
export const useAddVote = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newVote) => fromSupabase(supabase.from('voting').insert([newVote])),
        onSuccess: () => {
            queryClient.invalidateQueries('voting');
        },
    });
};
export const useUpdateVote = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedVote) => fromSupabase(supabase.from('voting').update(updatedVote).eq('id', updatedVote.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('voting');
        },
    });
};
export const useDeleteVote = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('voting').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('voting');
        },
    });
};

// Hooks for tasks
export const useTasks = () => useQuery({
    queryKey: ['tasks'],
    queryFn: () => fromSupabase(supabase.from('tasks').select('*')),
});
export const useAddTask = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newTask) => fromSupabase(supabase.from('tasks').insert([newTask])),
        onSuccess: () => {
            queryClient.invalidateQueries('tasks');
        },
    });
};
export const useUpdateTask = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedTask) => fromSupabase(supabase.from('tasks').update(updatedTask).eq('task_id', updatedTask.task_id)),
        onSuccess: () => {
            queryClient.invalidateQueries('tasks');
        },
    });
};
export const useDeleteTask = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (task_id) => fromSupabase(supabase.from('tasks').delete().eq('task_id', task_id)),
        onSuccess: () => {
            queryClient.invalidateQueries('tasks');
        },
    });
};

// Hooks for profiles
export const useProfiles = () => useQuery({
    queryKey: ['profiles'],
    queryFn: () => fromSupabase(supabase.from('profiles').select('*')),
});
export const useAddProfile = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newProfile) => fromSupabase(supabase.from('profiles').insert([newProfile])),
        onSuccess: () => {
            queryClient.invalidateQueries('profiles');
        },
    });
};
export const useUpdateProfile = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedProfile) => fromSupabase(supabase.from('profiles').update(updatedProfile).eq('profile_id', updatedProfile.profile_id)),
        onSuccess: () => {
            queryClient.invalidateQueries('profiles');
        },
    });
};
export const useDeleteProfile = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (profile_id) => fromSupabase(supabase.from('profiles').delete().eq('profile_id', profile_id)),
        onSuccess: () => {
            queryClient.invalidateQueries('profiles');
        },
    });
};

// Hooks for task_tags
export const useTaskTags = () => useQuery({
    queryKey: ['task_tags'],
    queryFn: () => fromSupabase(supabase.from('task_tags').select('*')),
});
export const useAddTaskTag = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newTaskTag) => fromSupabase(supabase.from('task_tags').insert([newTaskTag])),
        onSuccess: () => {
            queryClient.invalidateQueries('task_tags');
        },
    });
};
export const useUpdateTaskTag = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedTaskTag) => fromSupabase(supabase.from('task_tags').update(updatedTaskTag).eq('task_id', updatedTaskTag.task_id).eq('tag_id', updatedTaskTag.tag_id)),
        onSuccess: () => {
            queryClient.invalidateQueries('task_tags');
        },
    });
};
export const useDeleteTaskTag = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (task_id, tag_id) => fromSupabase(supabase.from('task_tags').delete().eq('task_id', task_id).eq('tag_id', tag_id)),
        onSuccess: () => {
            queryClient.invalidateQueries('task_tags');
        },
    });
};

// Hooks for projects
export const useProjects = () => useQuery({
    queryKey: ['projects'],
    queryFn: () => fromSupabase(supabase.from('projects').select('*')),
});
export const useAddProject = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newProject) => fromSupabase(supabase.from('projects').insert([newProject])),
        onSuccess: () => {
            queryClient.invalidateQueries('projects');
        },
    });
};
export const useUpdateProject = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedProject) => fromSupabase(supabase.from('projects').update(updatedProject).eq('id', updatedProject.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('projects');
        },
    });
};
export const useDeleteProject = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('projects').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('projects');
        },
    });
};

// Hooks for files
export const useFiles = () => useQuery({
    queryKey: ['files'],
    queryFn: () => fromSupabase(supabase.from('files').select('*')),
});
export const useAddFile = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newFile) => fromSupabase(supabase.from('files').insert([newFile])),
        onSuccess: () => {
            queryClient.invalidateQueries('files');
        },
    });
};
export const useUpdateFile = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedFile) => fromSupabase(supabase.from('files').update(updatedFile).eq('id', updatedFile.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('files');
        },
    });
};
export const useDeleteFile = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('files').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('files');
        },
    });
};

// Hooks for user_scores
export const useUserScores = () => useQuery({
    queryKey: ['user_scores'],
    queryFn: () => fromSupabase(supabase.from('user_scores').select('*')),
});
export const useAddUserScore = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newUserScore) => fromSupabase(supabase.from('user_scores').insert([newUserScore])),
        onSuccess: () => {
            queryClient.invalidateQueries('user_scores');
        },
    });
};
export const useUpdateUserScore = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedUserScore) => fromSupabase(supabase.from('user_scores').update(updatedUserScore).eq('id', updatedUserScore.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('user_scores');
        },
    });
};
export const useDeleteUserScore = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('user_scores').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('user_scores');
        },
    });
};

// Hooks for comments
export const useComments = () => useQuery({
    queryKey: ['comments'],
    queryFn: () => fromSupabase(supabase.from('comments').select('*')),
});
export const useAddComment = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newComment) => fromSupabase(supabase.from('comments').insert([newComment])),
        onSuccess: () => {
            queryClient.invalidateQueries('comments');
        },
    });
};
export const useUpdateComment = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedComment) => fromSupabase(supabase.from('comments').update(updatedComment).eq('comment_id', updatedComment.comment_id)),
        onSuccess: () => {
            queryClient.invalidateQueries('comments');
        },
    });
};
export const useDeleteComment = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (comment_id) => fromSupabase(supabase.from('comments').delete().eq('comment_id', comment_id)),
        onSuccess: () => {
            queryClient.invalidateQueries('comments');
        },
    });
};

// Hooks for tags
export const useTags = () => useQuery({
    queryKey: ['tags'],
    queryFn: () => fromSupabase(supabase.from('tags').select('*')),
});
export const useAddTag = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newTag) => fromSupabase(supabase.from('tags').insert([newTag])),
        onSuccess: () => {
            queryClient.invalidateQueries('tags');
        },
    });
};
export const useUpdateTag = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedTag) => fromSupabase(supabase.from('tags').update(updatedTag).eq('tag_id', updatedTag.tag_id)),
        onSuccess: () => {
            queryClient.invalidateQueries('tags');
        },
    });
};
export const useDeleteTag = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (tag_id) => fromSupabase(supabase.from('tags').delete().eq('tag_id', tag_id)),
        onSuccess: () => {
            queryClient.invalidateQueries('tags');
        },
    });
};

// Hooks for users
export const useUsers = () => useQuery({
    queryKey: ['users'],
    queryFn: () => fromSupabase(supabase.from('users').select('*')),
});
export const useAddUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newUser) => fromSupabase(supabase.from('users').insert([newUser])),
        onSuccess: () => {
            queryClient.invalidateQueries('users');
        },
    });
};
export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedUser) => fromSupabase(supabase.from('users').update(updatedUser).eq('id', updatedUser.id)),
        onSuccess: () => {
            queryClient.invalidateQueries('users');
        },
    });
};
export const useDeleteUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('users').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries('users');
        },
    });
};

// Hooks for sessions
export const useSessions = () => useQuery({
    queryKey: ['sessions'],
    queryFn: () => fromSupabase(supabase.from('sessions').select('*')),
});
export const useAddSession = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newSession) => fromSupabase(supabase.from('sessions').insert([newSession])),
        onSuccess: () => {
            queryClient.invalidateQueries('sessions');
        },
    });
};
export const useUpdateSession = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedSession) => fromSupabase(supabase.from('sessions').update(updatedSession).eq('session_id', updatedSession.session_id)),
        onSuccess: () => {
            queryClient.invalidateQueries('sessions');
        },
    });
};
export const useDeleteSession = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (session_id) => fromSupabase(supabase.from('sessions').delete().eq('session_id', session_id)),
        onSuccess: () => {
            queryClient.invalidateQueries('sessions');
        },
    });
};

// Hooks for categories
export const useCategories = () => useQuery({
    queryKey: ['categories'],
    queryFn: () => fromSupabase(supabase.from('categories').select('*')),
});
export const useAddCategory = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newCategory) => fromSupabase(supabase.from('categories').insert([newCategory])),
        onSuccess: () => {
            queryClient.invalidateQueries('categories');
        },
    });
};
export const useUpdateCategory = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (updatedCategory) => fromSupabase(supabase.from('categories').update(updatedCategory).eq('category_id', updatedCategory.category_id)),
        onSuccess: () => {
            queryClient.invalidateQueries('categories');
        },
    });
};
export const useDeleteCategory = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (category_id) => fromSupabase(supabase.from('categories').delete().eq('category_id', category_id)),
        onSuccess: () => {
            queryClient.invalidateQueries('categories');
        },
    });
};